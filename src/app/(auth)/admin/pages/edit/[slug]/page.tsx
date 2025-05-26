import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { PageForm } from '@/components/admin'

export const metadata: Metadata = {
  title: 'Avery Ondo - Admin',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params
  const supabase = await createClient()
  const { data: authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect('/login/')
  }

  const { data, error } = await supabase.from('pages').select().eq('id',slug).maybeSingle();


  if (error || !data) {
    return (
      <main id="main-content">
        <h1 className="text-3xl font-bold">Error locating experience with id of {slug}</h1>
      </main>
    )
  }

  return <PageForm data={data} />;


}