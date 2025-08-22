import { AveryOndoLogo } from "@/components/logos";
import { MainNav } from "@/components/MainNav";
import Link from "next/link";

export const SiteHeader = async ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactElement;
}) => {
  return (
    <header
      className={`w-full h-max md:sticky flex md:flex-col gap-8 py-2 md:gap-4 md:py-0 items-center md:justify-center md:min-h-dvh md:top-0 ${className}`}
    >
      <Link href="/" className="w-full h-auto max-w-3xs mb-2">
        <AveryOndoLogo className="w-full h-auto hidden md:block" />
        <AveryOndoLogo
          variant="horizontal"
          className="w-full h-auto md:hidden"
        />
        <p className="text-bright-purple dark:text-pink text-xs text-left">
          adventurer, web developer, marketer
        </p>
      </Link>
      <MainNav />
    </header>
  );
};
