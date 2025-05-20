import { HiOutlineExternalLink } from "react-icons/hi"
import { PiPencilSimpleDuotone } from "react-icons/pi";
import { createClient } from '@utils/supabase/server';
import type { Metadata } from 'next'
import { Button } from '@/components/button'
import Link from 'next/link'

// export const dynamic = 'force-static';
 
export const metadata: Metadata = {
  title: 'Avery\'s Projects',
  description: 'Check out some of Avery\'s selected projects.',
}

export default async function Page() {
  const supabase = await createClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();
  const { data: projects } = await supabase.from("projects").select();

  const isAuthenticatedUser = !!(!authError && authData.user)
  
  return (
    <section className="flex flex-col md:mt-20">
      <h2 className="text-3xl font-bold">Selected Projects</h2>

      <div className="divide-y divide-purple divide-dashed">
        {projects?.map((entry) => (
          <article className="py-8" key={entry.id}>
            <header className="pb-2 mb-2 relative">
              <h2 className="font-bold text-xl mr-2">{entry.title}</h2>
              <span className="inline text-purple font-bold">/&zwj;/</span>&nbsp;<span className="inline font-light">{entry.subtitle}</span>
              {isAuthenticatedUser && (
                <Link
                  href={`/admin/edit/project/${entry.id}/`}
                  className="!absolute top-0 right-0 flex items-center gap-0.5 text-bright-purple dark:text-pink text-sm hover:underline decoration-blue underline-offset-4"
                  >
                    <PiPencilSimpleDuotone className="size-3" />
                    Edit
                </Link>
              )}
            </header>
            <div className="prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{__html: entry.overview}} />
            {entry.link_url && entry.link_text && (
              <div className="mt-6 flex justify-end">
                <Button
                  href={entry.link_url}
                  size="sm"
                  icon={HiOutlineExternalLink}
                  iconPosition="end"
                  external
                >
                  {entry.link_text}
                </Button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
