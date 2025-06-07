'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function upsertProject(formData: FormData) {
  const supabase = await createClient()
  const projectId = formData.get('id') as string || null;

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const projectData = {
    slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    subtitle: formData.get('subtitle') as string,
    overview: formData.get('overview') as string,
    link_text: formData.get('link_text') as string,
    link_url: formData.get('link_url') as string,
  }

  const data = projectId ? {
    id: projectId,
    ...projectData
  } : projectData;

  const { error } = await supabase.from('projects').upsert(data).select();
  
  if (error) {
    return { error: error.message }
  }

  revalidatePath(`/projects/`, 'layout')
  revalidatePath(`/admin/projects/`, 'layout')

  if (projectId) {
    return { success: 'Project updated' }
  } else {
    return { success: 'Project added' }
  }
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
    return { error: error.message }
  }

  revalidatePath(`/projects/`, 'layout')
  revalidatePath(`/admin/projects/`, 'layout')
  redirect('/admin/projects/?success=project+deleted')
}
