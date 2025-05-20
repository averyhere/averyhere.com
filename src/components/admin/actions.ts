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

  const data = {
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

  revalidatePath('/admin/', 'layout')
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

  const { error } = await supabase.from('projects').upsert(projectData).select();
  
  if (error) {
    if (projectData.id) {
      redirect(`/admin/edit/project/${projectData.id}/?success=false`)
    } else {
      redirect(`/admin/create/project/?success=false`)
    }
  }

  revalidatePath(`/projects/`, 'layout')
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

  revalidatePath(`/projects/`, 'layout')
  revalidatePath(`/admin/edit/project/${projectData.id}/`, 'layout')
  redirect('/admin/create/project/?success=true&action=delete')
}

export async function upsertExperience(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    id: formData.get('id') || null,
    slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    company_name: formData.get('company_name') as string,
    overview: formData.get('overview') as string,
    start_date: formData.get('start_date') as string,
    end_date: formData.get('end_date') as string,
  }

  const { error } = await supabase.from('projects').upsert(data).select();
  
  if (error) {
    if (data.id) {
      redirect(`/admin/edit/experience/${data.id}/?success=false&action=update`)
    } else {
      redirect(`/admin/create/experience/?success=false&action=insert`)
    }
  }

  revalidatePath(`/experience/`, 'layout')
  revalidatePath(`/admin/edit/experience/${data.id}/`, 'layout')
  redirect(`/admin/edit/experience/${data.id}/?success=true&action=${data.id ? 'update' : 'insert'}`)
}

export async function deleteExperience(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    id: formData.get('id') || null,
    slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    company_name: formData.get('company_name') as string,
    overview: formData.get('overview') as string,
    start_date: formData.get('start_date') as string,
    end_date: formData.get('end_date') as string,
  }

  const { error } = await supabase.from('projects').delete().eq('id',data.id);
  
  if (error) {
    redirect(`/admin/edit/experience/${data.id}/?success=false&action=delete`)
  }

  revalidatePath(`/experience/`, 'layout')
  revalidatePath(`/admin/edit/experience/${data.id}/`, 'layout')
  redirect('/admin/create/experience/?success=true&action=delete')
}