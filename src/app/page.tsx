import { AveryOndoLogo } from "@/components/logos"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col min-h-dvh gap-4 items-center justify-center p-4">
      <Link href="/" className="w-full h-auto max-w-lg">
        <AveryOndoLogo className="w-full h-full" />
      </Link>
      <Navigation variant="horizontal" />
    </div>
  );
}
