import { AveryOndoLogo, MainNav } from "@/components"
import Link from "next/link"

export const SiteHeader = async ({className, children}:{className?:string, children?:React.ReactElement}) => {

  return (
    <header className={`w-full p-4 md:pt-20 h-max md:sticky md:top-0 ${className}`}>
      <Link href="/" className="w-full h-auto max-w-3xs mt-10 md:mt-0 mb-2">
        <AveryOndoLogo className="w-full h-auto hidden md:block" />
        <AveryOndoLogo variant="horizontal" className="w-full h-auto md:hidden" />
        <span className="sr-only">Homepage</span>
      </Link>
      <p className="text-bright-purple dark:text-pink text-xs mb-8 text-center">adventurer, web developer, marketer</p>
      <MainNav />
      {children}
    </header>
  )
}
