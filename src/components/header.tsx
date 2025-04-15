import { AveryOndoLogo } from "@/components/logos"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export const SiteHeader = ({ className }: { className?: string }) => {

  return (
    <header className={`${className} pt-16 md:pt-0 flex flex-col justify-center`}>
      <h1 className="sr-only">Avery Ondo</h1>
      <Link href="/">
        <AveryOndoLogo className="w-full h-full max-w-3xs m-auto md:max-w-lg" />
      </Link>
      <Navigation variant="horizontal" />
    </header>
  )
}
