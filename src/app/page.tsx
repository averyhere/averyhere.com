import { cn } from "@/lib/utils";
import { NavLink } from "@/components/ui";
import { AveryOndoLogo } from "@/components/logos";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Avery Ondo",
  description: "Avery Ondo's personal website.",
};

export default function Home() {
  return (
    <>
      <main
        id="main-content"
        className="h-full w-full flex flex-col min-h-dvh gap-4 items-center justify-center p-4 relative"
      >
        <Link href="/" className="w-full h-auto max-w-lg">
          <AveryOndoLogo className="w-full h-full" />
          <h1 className="sr-only">Avery Ondo</h1>
        </Link>
        <p className="text-bright-purple dark:text-pink">
          adventurer, web developer, marketer
        </p>
        <nav className={cn(["w-full text-center text-md md:text-xl mt-8"])}>
          <ul
            className={cn([
              "w-full flex justify-center items-center gap-4 md:gap-8 flex-wrap",
            ])}
          >
            <li className="w-auto">
              <NavLink
                href="/about/"
                className="decoration-blue underline-offset-4 decoration-2 hover:underline"
                activeClasses="underline"
              >
                about
              </NavLink>
            </li>
            <li className="w-auto">
              <NavLink
                href="/experience/"
                className="decoration-blue underline-offset-4 decoration-2 hover:underline"
                activeClasses="underline"
              >
                experience
              </NavLink>
            </li>
            <li className="w-auto">
              <NavLink
                href="/projects/"
                className="decoration-blue underline-offset-4 decoration-2 hover:underline"
                activeClasses="underline"
              >
                projects
              </NavLink>
            </li>
            <li className="w-auto">
              <NavLink
                href="/just-another-sudoku/"
                className="decoration-blue underline-offset-4 decoration-2 hover:underline"
                activeClasses="underline"
              >
                sudoku
              </NavLink>
            </li>
            <li className="w-auto">
              <NavLink
                href="/contact/"
                className="decoration-blue underline-offset-4 decoration-2 hover:underline"
                activeClasses="underline"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </main>

      <Footer />
    </>
  );
}
