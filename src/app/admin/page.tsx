import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { LoginForm } from '@/components/auth'
import { Button } from '@/components'
import { PiPlusDuotone, PiPuzzlePieceDuotone, PiBuildingOfficeDuotone, PiListDuotone } from "react-icons/pi";
import Link from 'next/link'

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
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p>Hey {display_name}!</p>

      <div className='grid gap-4'>
        <div className='flex justify-between items-center'>
          <Link href="/admin/list/experience/" className='flex gap-2 items-center'>
            <PiBuildingOfficeDuotone className='size-14' />
            <h2 className='text-xl'>Experience</h2>
          </Link>
          <div className='flex flex-wrap mt-2'>
            <Button href="/admin/list/experience/" size="sm" icon={PiListDuotone}>View All</Button>
            <Button href="/admin/create/experience/" size="sm" icon={PiPlusDuotone}>Add New</Button>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <Link href="/admin/list/projects/" className='flex gap-2 items-center'>
            <PiPuzzlePieceDuotone className='size-14' />
            <h2 className='text-xl'>Projects</h2>
          </Link>
          <div className='flex flex-wrap mt-2'>
            <Button href="/admin/list/projects/" size="sm" icon={PiListDuotone}>View All</Button>
            <Button href="/admin/create/project/" size="sm" icon={PiPlusDuotone}>Add New</Button>
          </div>
        </div>
      </div>
    </>
  )
}