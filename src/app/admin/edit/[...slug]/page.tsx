import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { ProjectForm, ExperienceForm } from '@/components/admin'

export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  // Authenticate user
  const { data: authData, error: authError } = await supabase.auth.getUser()
  
  if (authError || !authData?.user) {
    redirect('/admin/')
  }

  // Get current data
  const type = slug[0];
  const table = type === 'project' ? 'projects' : type === 'experience' ? 'work_experience' : '';
  const id = slug[1];

  const { data, error } = await supabase.from(table).select().eq('id',id).maybeSingle();

  if (error || !data) {
    return (
      <>
        <h1 className="text-3xl font-bold">Error locating {type} {id}</h1>
      </>
    )
  }
  
  return (
    <>      
      <h1 className="text-3xl font-bold mb-4">Edit {type}</h1>

      {type === 'project' && (
        <ProjectForm data={data} />
      )}

      {type === 'experience' && (
        <ExperienceForm data={data} />
      )}
    </>
  )
}