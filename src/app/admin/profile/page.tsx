import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { AdminNav } from '@/components/AdminNav'
import { redirect } from 'next/navigation'
import { ProfileForm } from '@/components/admin'

export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  console.log("🚀 ~ PrivatePage ~ data:", data.user)
  if (error || !data?.user) {
    redirect('/admin/')
  }
  
  return (
    <>
      <AdminNav />
      
      <h1 className="text-3xl font-bold">Edit Profile</h1>

      <ProfileForm data={data.user} />
    </>
  )
}