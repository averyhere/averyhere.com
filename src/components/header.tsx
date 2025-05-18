import { AveryOndoLogo } from "@/components/logos"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export const SiteHeader = () => {

  return (
    <header className="h-auto w-full md:h-dvh md:self-start md:sticky md:top-0 md:w-sm flex flex-col items-center justify-center">
      <Link href="/" className="w-full h-auto max-w-3xs mt-10 md:mt-0 mb-2">
        <AveryOndoLogo className="w-full h-full" />
      </Link>
      <p className="text-bright-purple dark:text-pink text-xs mb-8">adventurer, web developer, marketer</p>
      <Navigation />
    </header>
  )
}
