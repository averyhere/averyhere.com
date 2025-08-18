import Link from "next/link";
import Image from "next/image";

export const Footer = async () => {
  return (
    <footer className="justify-self-end w-full mt-10 mb-4">
      <div className="text-center grow-0 print:hidden my-1 flex flex-col items-center justify-center gap-1 text-xs">
        <div className="flex gap-4 items-center justify-center">
          <Image
            src="/images/rainbow-flag-quasar-progress.svg"
            width={512}
            height={325}
            className="h-4 w-auto"
            alt="LGBTQIA+ Rainbow Flag Quasar Progress Variant"
          />
          <span className="w-0.5 h-4 bg-purple"></span>
          <Image
            src="/images/transgender-pride-flag.svg"
            width={800}
            height={480}
            className="h-4 w-auto"
            alt="LGBTQIA+ Rainbow Flag Quasar Progress Variant"
          />

          <span className="w-0.5 h-4 bg-purple"></span>

          <Link
            href="/privacy/"
            className="decoration-blue underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <span className="w-0.5 h-4 bg-purple"></span>
          <span>© {new Date().getFullYear()} Avery Ondo</span>
        </div>
      </div>
    </footer>
  );
};
