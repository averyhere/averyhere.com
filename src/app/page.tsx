import { AveryOndoLogo } from "@/components/logos"
import { MainNav } from "@/components/MainNav"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import type { Metadata } from 'next'

export const dynamic = 'force-static';
 
export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
}

export default function Home() {
  return (
    <>
      <main id="main-content" className="h-full w-full flex flex-col min-h-dvh gap-4 items-center justify-center p-4 relative">
        <Link href="/" className="w-full h-auto max-w-lg">
          <AveryOndoLogo className="w-full h-full" />
          <h1 className="sr-only">Avery Ondo</h1>
        </Link>
        <p className="text-bright-purple dark:text-pink">adventurer, web developer, marketer</p>
        <MainNav variant="horizontal" />

        <div className="absolute bottom-0 w-full max-w-max text-xs md:text-sm text-center">
          <blockquote className='blockquote'>
            <p className="text-pretty">We must never be a country that says there’s only one way to love, only one way to look, and only one way to live.</p>
            <cite className="text-bright-purple dark:text-pink"><strong>Sarah McBride</strong></cite>
          </blockquote>
        </div>
      </main>

      <Footer />
    </>
  );
}
