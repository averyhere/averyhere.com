import { AveryOndoLogo, Navigation } from "@/components"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <div className="h-auto w-full md:h-dvh md:self-start md:sticky md:top-0 md:w-sm flex flex-col items-center justify-center">
        <Link href="/" className="w-full h-auto max-w-3xs mt-10 md:mt-0 mb-8">
          <AveryOndoLogo className="w-full h-full" />
        </Link>
        <Navigation />
      </div>
      <div className="w-full h-full flex flex-col justify-center mt-8 md:mt-0 overflow-y-auto">
        <h2 className="mb-4 text-3xl font-bold">404</h2>
        <p>
          Sorry! Couldn't find that page.
        </p>
      </div>
    </>
  );
}
