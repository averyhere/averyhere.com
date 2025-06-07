'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function upsertExperience(formData: FormData) {
  const supabase = await createClient()
  const jobId = formData.get('id') as string || null;

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const jobData = {
    slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    company_name: formData.get('company_name') as string,
    overview: formData.get('overview') as string,
    start_date: formData.get('start_date') as string,
    end_date: formData.get('end_date') as string,
  }
  const data = jobId ? {
    id: jobId,
    ...jobData
  } : jobData;

  const { error } = await supabase.from('projects').upsert(data).select();
  
  if (error) {
    return { error: error.message }
  }

  revalidatePath(`/experience/`, 'layout')
  revalidatePath(`/admin/experience/`, 'layout')

  if (jobId) {
    return { success: 'Experience updated' }
  } else {
    return { success: 'Experience added' }
  }

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
    return { error: error.message }
  }

  revalidatePath(`/experience/`, 'layout')
  revalidatePath(`/admin/experience/`, 'layout')
  redirect('/admin/experience/?success=job+deleted')
}