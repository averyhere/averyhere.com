import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { PiPencilSimpleDuotone, PiPlusDuotone } from "react-icons/pi";

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

  const { data: experience } = await supabase.from("work_experience").select();

  return (
    <main id="main-content">
      <section className="flex flex-col">
        <h2 className="text-3xl font-bold">Work Experience</h2>

        <div className="divide-y divide-purple divide-dashed">

          {/* eslint-disable-next-line */}
          {experience?.map((entry: any) => (
            <article className="py-4 relative flex justify-between" key={entry.id}>
              <div>
                <h2 className="font-bold text-xl mr-2">{entry.title}</h2>
                <span className="inline text-purple font-bold">@</span>&nbsp;<span className="inline font-light">{entry.company_name}</span>
              </div>
              <Link
                  href={`/admin/experience/edit/${entry.id}/`}
                  className="flex items-center gap-0.5 text-bright-purple dark:text-pink text-sm hover:underline decoration-blue underline-offset-4"
                  >
                    <PiPencilSimpleDuotone className="size-3" />
                    Edit
                </Link>
            </article>
          ))}
          <article className="py-4 relative flex justify-end">
            <Link
                href={`/admin/experience/new/`}
                className="flex items-center gap-2 text-bright-purple dark:text-pink text-lg hover:underline decoration-blue underline-offset-4"
                >
                  <PiPlusDuotone className="size-8" />
                  Add Experience
              </Link>
          </article>
        </div>
      </section>
    </main>
  )

}