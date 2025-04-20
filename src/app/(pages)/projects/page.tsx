import { HiOutlineExternalLink } from "react-icons/hi"
import { createClient } from '@utils/supabase/server';

export default async function Page() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select();
  return (
    <div className="flex flex-col gap-8 md:mt-20">
      <h2 className="text-3xl font-bold">selected projects</h2>

      <div className="divide-y divide-purple">
        {projects?.map((entry) => (
          <article className="py-8" key={entry.id}>
            <header className="pb-2 mb-2">
              <div>
                <h4 className="text-2xl">
                  {entry.title}
                </h4>
                <span className="text-2xl inline text-purple">&nbsp;/&zwj;/&nbsp;</span>
                <span className="inline text-lg font-light">{entry.subtitle}</span>
              </div>
              </header>
              <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{__html: entry.overview}} />
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
