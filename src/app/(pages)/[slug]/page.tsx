import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/client'

type Props = { params: Promise<{ slug: string }> }

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const supabase = await createClient()
  const { data: pages } = await supabase.from('pages').select();
  // eslint-disable-next-line
  const pageSlugs: any[] = pages!.map((page)=>{
    return {slug: page.slug};
  })
  console.log("🚀 ~ pageSlugs ~ pageSlugs:", pageSlugs)

  return pageSlugs;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  
  const supabase = await createClient()
  const { slug } = await params

  const { data: page } = await supabase.from('pages').select().eq('slug',slug).single();
  
  return {
    title: page.seo_title,
    description: page.seo_description,
  }
}

export default async function Page({ params }: Props) {
  const supabase = await createClient()
  const { slug } = await params

  const { data: page } = await supabase.from('pages').select().eq('slug',slug).single();

  return (
    <article>
      <h1 className="mb-4 text-3xl font-bold">{page.title}</h1>
      <div 
        className='prose prose-sm dark:prose-invert' 
        dangerouslySetInnerHTML={{
          __html: page.content
        }}
      />
    </article>
  );
}
