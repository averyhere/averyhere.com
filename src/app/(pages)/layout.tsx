import { AveryOndoLogo } from "@/components/logos"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-auto w-full md:h-dvh md:self-start md:sticky md:top-0 md:w-sm flex flex-col items-center justify-center">
        <Link href="/" className="w-full h-auto max-w-3xs mt-10 md:mt-0 mb-8">
          <AveryOndoLogo className="w-full h-full" />
        </Link>
        <Navigation />
      </div>
      <div id="main-content" className="w-full h-full flex flex-col justify-center mt-8 md:mt-0 overflow-y-auto">
        {children}
      </div>
    </>
  );
}
