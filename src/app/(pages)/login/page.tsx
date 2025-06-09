import type { Metadata } from 'next'
import { LoginForm } from '@/components/auth'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
}

export default async function LoginPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (!error && data?.user) {
    redirect('/admin/')
  }

  return (
    <>
      <h1 className='text-3xl text-center font-bold mb-2'>Login</h1>
      <LoginForm />
    </>
  )
}