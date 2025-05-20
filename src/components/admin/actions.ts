'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const pw_data = {
    new_password: formData.get('new_password') as string,
    password_confirm: formData.get('password_confirm') as string,
  }

  let data = {
    email: formData.get('email') as string,
    display_name: formData.get('display_name') as string,
  } as {
    [key: string]: string
  }

  // Add new password to data only if password is changing & meets requirements
  if (
    (pw_data.new_password && pw_data.password_confirm) && // Both new & confirm provided
    (pw_data.new_password === pw_data.password_confirm)   // New & confirm match
    // TODO: validate pw requirements
  ) {
    data['password'] = pw_data.new_password;
  }

  const { error } = await supabase.auth.updateUser({data})

  if (error) {
    redirect('/admin/profile/?success=false')
  }

  revalidatePath('/admin/profile/', 'layout')
  redirect('/admin/profile/?success=true')
}

export async function upsertProject(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const projectData = {
    id: formData.get('id') || null,
    slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    subtitle: formData.get('subtitle') as string,
    overview: formData.get('overview') as string,
    link_text: formData.get('link_text') as string,
    link_url: formData.get('link_url') as string,
  }

  const { data, error } = await supabase.from('projects').upsert(projectData).select();
  
  if (error) {
    if (projectData.id) {
      redirect(`/admin/edit/project/${projectData.id}/?success=false`)
    } else {
      redirect(`/admin/create/project/?success=false`)
    }
  }

  revalidatePath(`/admin/edit/project/${projectData.id}/`, 'layout')
  redirect(`/admin/edit/project/${projectData.id}/?success=true&action=${projectData.id ? 'update' : 'insert'}`)
}

export async function deleteProject(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const projectData = {
    id: formData.get('id') || null,
    slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    subtitle: formData.get('subtitle') as string,
    overview: formData.get('overview') as string,
    link_text: formData.get('link_text') as string,
    link_url: formData.get('link_url') as string,
  }

  const { error } = await supabase.from('projects').delete().eq('id',projectData.id);
  
  if (error) {
    redirect(`/admin/edit/project/${projectData.id}/?success=false&action=delete`)
  }

  revalidatePath(`/admin/edit/project/${projectData.id}/`, 'layout')
  redirect('/admin/create/project/?success=true&action=delete')
}
