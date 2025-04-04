import { AveryOndoLogo, MattOndoLogo } from "@/components/logos"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { siteConfig } from "@/siteConfig"

export const SiteHeader = ({ className }: { className?: string }) => {

  return (
    <header className={`${className} md:min-h-dvh pt-16 md:pt-0 flex flex-col justify-center`}>
      <h1 className="sr-only">Avery Ondo</h1>
      <Link href="/">
        { siteConfig.deadName === true && (
          <MattOndoLogo className="w-full h-full max-w-full m-auto md:max-w-lg" />
        ) || (
          <AveryOndoLogo className="w-full h-full max-w-full m-auto md:max-w-lg" />
        )}
      </Link>
      <Navigation variant="horizontal" />
    </header>
  )
}
