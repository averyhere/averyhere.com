import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { PiPencilSimpleDuotone, PiPlusDuotone } from "react-icons/pi";
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Avery Ondo - Admin',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage() {

  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login/");
  }

  const { data: projects } = await supabase.from("projects").select();

  return (
    <main id="main-content" className="max-w-4xl">
      <header className='flex gap-4 items-end border-b border-purple border-dashed pb-4'>
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <Button
          icon={PiPlusDuotone}
          size='xs'
          href='/admin/projects/new'
        >
          Add
        </Button>
      </header>
      <div className="divide-y divide-purple divide-dashed">
        {/* eslint-disable-next-line */}
        {projects?.map((entry: any) => (
          <article className="py-4 relative flex justify-between" key={entry.id}>
            <div>
              <h2 className="font-bold text-xl mr-2">{entry.title}</h2>
              <span className="inline text-purple font-bold">/&zwj;/</span>&nbsp;<span className="inline font-light">{entry.subtitle}</span>
            </div>
            <Link
                href={`/admin/projects/edit/${entry.id}/`}
                className="flex items-center gap-0.5 text-bright-purple dark:text-pink text-sm hover:underline decoration-blue underline-offset-4"
                >
                  <PiPencilSimpleDuotone className="size-3" />
                  Edit
              </Link>
          </article>
        ))}
        <article className="py-4 relative flex justify-end">
          <Link
              href={`/admin/projects/new/`}
              className="flex items-center gap-2 text-bright-purple dark:text-pink text-lg hover:underline decoration-blue underline-offset-4"
              >
                <PiPlusDuotone className="size-8" />
                Add Project
            </Link>
        </article>
      </div>
    </main>
  )
}