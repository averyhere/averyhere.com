import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { ProfileForm } from '@/components/admin'
import { Toast } from '@/components/ui'
import { SearchParams } from 'next/dist/server/request/search-params'

export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage({
  searchParams
}: {searchParams: SearchParams}) {

  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login/");
  }
  
  return (
    <main id="main-content">
      <h1 className="text-3xl font-bold">Edit Profile</h1>

      <ProfileForm data={data.user} />

      {searchParams?.mfaVerified && (
        <Toast message="MFA verified successfully" variant="error" />
      )}
    </main>
  )
}