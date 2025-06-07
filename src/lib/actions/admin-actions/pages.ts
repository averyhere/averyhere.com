'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function upsertPage(formData: FormData) {
  const supabase = await createClient()
  const pageId = formData.get('id') as string || null;

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const pageData = {
    slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    seo_title: formData.get('seo_title') as string,
    seo_description: formData.get('seo_description') as string,
  }

  const data = pageId ? {
    id: pageId,
    ...pageData
  } : pageData;

  const { error } = await supabase.from('pages').upsert(data).select();
  
  if (error) {
    return { error: error.message, data: data }
  }

  revalidatePath(`/projects/`, 'layout')
  revalidatePath(`/admin/projects/`, 'layout')

  if (pageId) {
    return { success: 'Page updated', data: data }
  } else {
    return { success: 'Page added', data: data }
  }
}

export async function deletePage(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const pageData = {
    id: formData.get('id') || null,
    slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    seo_title: formData.get('seo_title') as string,
    seo_description: formData.get('seo_description') as string,
  }

  const { error } = await supabase.from('projects').delete().eq('id',pageData.id);
  
  if (error) {
    return { error: error.message, data: pageData }
  }

  revalidatePath(`/projects/`, 'layout')
  revalidatePath(`/admin/projects/`, 'layout')
  redirect('/admin/projects/?success=project+deleted')
}
