import { createClient } from '@utils/supabase/server';
import type { Metadata } from 'next'
import { Accordion } from '@/components'
import type { AccordionItemType } from '@/components/Accordion'

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Avery\'s Projects',
  description: 'Check out some of Avery\'s selected projects.',
}

export default async function Page() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select().order('id', {ascending: true});

  return (

    <section className="flex flex-col md:pt-20">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">Selected Projects</h2>
        <p className="text-sm font-light">Click or tap on a project below to read more about it.</p>
      </header>
      <Accordion data={(projects as AccordionItemType[])} />
    </section>
  )
}
