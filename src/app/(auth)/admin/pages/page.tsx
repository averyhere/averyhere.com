import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { PiPencilSimpleDuotone, PiPlusDuotone, PiEyeDuotone } from "react-icons/pi";

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

  const { data: pages } = await supabase.from("pages").select();

  return (
    <main id="main-content">
      <section className="flex flex-col">
        <h2 className="text-3xl font-bold">Pages</h2>

        <div className="divide-y divide-purple divide-dashed">

          {/* eslint-disable-next-line */}
          {pages?.map((entry: any) => (
            <article className="py-4 relative flex justify-between" key={entry.id}>
              <div>
                <h2 className="font-bold text-xl mr-2 mb-2 leading-1">{entry.title}</h2>
                <Link className='font-light text-xs leading-1' href={`/${entry.slug}/`}>{process.env.NEXT_PUBLIC_FRONTEND_URL}/{entry.slug}/</Link>
              </div>
              <div>
                <Link
                  href={`/admin/pages/edit/${entry.id}/`}
                  className="flex items-center gap-0.5 text-bright-purple dark:text-pink text-sm hover:underline decoration-blue underline-offset-4"
                  >
                    <PiPencilSimpleDuotone className="size-3" />
                    Edit
                </Link>
                <Link
                  href={`/${entry.slug}/`}
                  className="flex items-center gap-0.5 text-bright-purple dark:text-pink text-sm hover:underline decoration-blue underline-offset-4"
                  >
                    <PiEyeDuotone className="size-3" />
                    View
                </Link>
              </div>
            </article>
          ))}
          <article className="py-4 relative flex justify-end">
            <Link
                href={`/admin/pages/new/`}
                className="flex items-center gap-2 text-bright-purple dark:text-pink text-lg hover:underline decoration-blue underline-offset-4"
                >
                  <PiPlusDuotone className="size-8" />
                  Add Page
              </Link>
          </article>
        </div>
      </section>
    </main>
  )

}