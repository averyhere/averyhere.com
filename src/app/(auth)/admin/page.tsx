import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";
import { Button } from '@/components/ui'
import { PiPlusDuotone, PiPuzzlePieceDuotone, PiArrowSquareOutDuotone, PiArticleDuotone, PiUserDuotone, PiGearSixDuotone, PiBuildingOfficeDuotone, PiListDuotone } from "react-icons/pi";
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login/");
  }

  const display_name = data.user.user_metadata.display_name;
  
  return (
    <main id="main-content">
      <header className='mb-4'>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Hey {display_name}!</p>
      </header>

      <div className='grid grid-cols-2 gap-4 max-w-2xl'>
        <div className='flex flex-col border border-purple p-4 justify-between items-center'>
          <Link href="/admin/experience/" className='flex gap-2 items-center'>
            <PiBuildingOfficeDuotone className='size-14' />
            <h2 className='text-xl'>Experience</h2>
          </Link>
          <div className='flex flex-wrap mt-2 gap-2'>
            <Button href="/admin/experience/" size="sm" icon={PiListDuotone}>View All</Button>
            <Button href="/admin/experience/new/" size="sm" icon={PiPlusDuotone}>Add New</Button>
          </div>
        </div>
        <div className='flex flex-col border border-purple p-4 justify-between items-center'>
          <Link href="/admin/pages/" className='flex gap-2 items-center'>
            <PiArticleDuotone className='size-14' />
            <h2 className='text-xl'>Pages</h2>
          </Link>
          <div className='flex flex-wrap mt-2 gap-2'>
            <Button href="/admin/pages/" size="sm" icon={PiListDuotone}>View All</Button>
            <Button href="/admin/pages/new/" size="sm" icon={PiPlusDuotone}>Add New</Button>
          </div>
        </div>
        <div className='flex flex-col border border-purple p-4 justify-between items-center'>
          <Link href="/admin/projects/" className='flex gap-2 items-center'>
            <PiPuzzlePieceDuotone className='size-14' />
            <h2 className='text-xl'>Projects</h2>
          </Link>
          <div className='flex flex-wrap mt-2 gap-2'>
            <Button href="/admin/projects/" size="sm" icon={PiListDuotone}>View All</Button>
            <Button href="/admin/projects/new/" size="sm" icon={PiPlusDuotone}>Add New</Button>
          </div>
        </div>
        <div className='flex flex-col border border-purple p-4 justify-between items-center'>
          <Link href="/admin/profile/" className='flex gap-2 items-center'>
            <PiUserDuotone className='size-14' />
            <h2 className='text-xl'>My Profile</h2>
          </Link>
          <div className='flex flex-wrap mt-2 gap-2'>
            <Button href="/admin/profile/" size="sm" icon={PiGearSixDuotone}>Edit</Button>
          </div>
        </div>
      </div>

      <div className='my-4 max-w-2xl'>
        <h2 className='text-xl border-b border-purple mb-1'>Tools & Platforms</h2>
        <ul className='flex gap-4'>
          <li>
            <a href="https://vercel.com/averyhere-projects/averyhere.com" className='flex items-center gap-1 underline-offset-4 decoration-pink hover:text-blue hover:underline' target='_blank' referrerPolicy='no-referrer'>
              <span>Vercel Dashboard</span> 
              <PiArrowSquareOutDuotone />
            </a>
          </li>
          <li>
            <a href="https://supabase.com/dashboard/project/wiluwgnyrskvujxteaxh" className='flex items-center gap-1 underline-offset-4 decoration-pink hover:text-blue hover:underline' target='_blank' referrerPolicy='no-referrer'>
              <span>Supabase</span> 
              <PiArrowSquareOutDuotone />
            </a>
          </li>
          <li>
            <a href="https://github.com/averyhere/averyhere.com" className='flex items-center gap-1 underline-offset-4 decoration-pink hover:text-blue hover:underline' target='_blank' referrerPolicy='no-referrer'>
              <span>GitHub Repo</span> 
              <PiArrowSquareOutDuotone />
            </a>
          </li>
          <li>
            <a href="https://search.google.com/search-console?resource_id=sc-domain:averyhere.com" className='flex items-center gap-1 underline-offset-4 decoration-pink hover:text-blue hover:underline' target='_blank' referrerPolicy='no-referrer'>
              <span>Google Search Console</span> 
              <PiArrowSquareOutDuotone />
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}