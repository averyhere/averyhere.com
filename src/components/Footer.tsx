import Link from "next/link";
import Image from "next/image";

export const Footer = async () => {
  return (
    <footer className="justify-self-end w-full mt-10 mb-14">
      <div className="text-center grow-0 print:hidden my-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 text-xs">
        <div className="grid md:flex grid-cols-[1fr_max-content_1fr] gap-4">
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
        </div>
        <span className="w-0.5 h-4 bg-purple hidden md:block"></span>
        <div className="grid md:flex grid-cols-[1fr_max-content_1fr] gap-4">
          <Link
            href="/privacy/"
            className="decoration-blue underline-offset-4 hover:underline text-right md:text-center"
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
