import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { PageForm } from '@/components/admin'

export const metadata: Metadata = {
  title: 'Avery Ondo - Admin',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage() {

  const supabase = await createClient()
  const { data: authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect('/login/')
  }


  return (
    <main id="main-content" className='max-w-xl'>
      <h1 className="text-3xl font-bold">Edit Experience</h1>

      <PageForm />
    </main>
  )


}