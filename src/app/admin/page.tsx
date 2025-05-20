import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { LoginForm } from '@/components/auth'
import { AdminNav } from '@/components/AdminNav'

export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return <LoginForm />
  }

  const display_name = data.user.user_metadata.display_name;
  
  return (
    <>
      <AdminNav />

      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p>Hey {display_name}!</p>
    </>
  )
}