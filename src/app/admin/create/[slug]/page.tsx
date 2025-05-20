import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { AdminNav } from '@/components/admin'
import { redirect } from 'next/navigation'
import { ProjectForm } from '@/components/admin'

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
  const { data, error } = await supabase.auth.getUser()
  
  if (error || !data?.user) {
    redirect('/admin/')
  }
  
  console.log("🚀 ~ slug:", slug)
  
  
  return (
    <>
      <AdminNav />
      
      <h1 className="text-3xl font-bold">Add a new {slug}</h1>

      {slug === 'project' && (
        <ProjectForm />
      )}
    </>
  )
}