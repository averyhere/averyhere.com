import { HiOutlineExternalLink } from "react-icons/hi"
import { createClient } from '@utils/supabase/server';
import type { Metadata } from 'next'
import { Accordion, Button } from '@/components'

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Avery\'s Projects',
  description: 'Check out some of Avery\'s selected projects.',
}

export default async function Page() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select().order('id', {ascending: true});

  return (

    <section className="flex flex-col">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">Selected Projects</h2>
        <p className="text-sm font-light">Click or tap on a project below to read more about it.</p>
      </header>
      <Accordion data={projects} />
    </section>
  )
  
  return (
    <section className="flex flex-col">
      <h2 className="text-3xl font-bold">Selected Projects</h2>

      <div className="divide-y divide-purple divide-dashed">
        {projects?.map((entry) => (
          <article className="py-2" key={entry.id}>
            <header className="pb-2 relative">
              <h2 className="font-bold text-xl mr-2">{entry.title}</h2>
              <div className="flex items-start justify-between">
                <div><span className="inline text-purple font-bold text-sm">/&zwj;/</span>&nbsp;<span className="inline font-light text-sm">{entry.subtitle}</span></div>
                <Button href="#" size="xs">Read more</Button>
              </div>
            </header>
            <div className="h-0 max-h-[1000px] overflow-hidden">
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
