import { HiOutlineExternalLink } from "react-icons/hi"
import { createClient } from '@utils/supabase/server';
import type { Metadata } from 'next'

export const dynamic = 'force-static';
 
export const metadata: Metadata = {
  title: 'Avery Ondo\'s Projects',
  description: 'Check out some of Avery Ondo\'s selected projects.',
}

export default async function Page() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select();
  return (
    <div className="flex flex-col md:mt-20">
      <h2 className="text-3xl font-bold">Selected Projects</h2>

      <div className="divide-y divide-purple divide-dashed">
        {projects?.map((entry) => (
          <article className="py-8" key={entry.id}>
            <header className="pb-2 mb-2">
              <div>
                <h3 className="font-bold text-xl mr-2">{entry.title}</h3>
                <span className="inline text-purple font-bold">/&zwj;/</span>&nbsp;<span className="inline font-light">{entry.subtitle}</span>
              </div>
              </header>
              <div className="prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{__html: entry.overview}} />
              {entry.link_url && entry.link_text && (
                <div className="mt-6 flex justify-end">
                  <a className="button" target="_blank" href={entry.link_url}>{entry.link_text} <HiOutlineExternalLink className="" /></a>
                </div>
              )}
          </article>
        ))}
      </div>
    </div>
  );
}
