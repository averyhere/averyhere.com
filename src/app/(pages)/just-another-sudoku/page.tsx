import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just Another Sudoku is on the App Store",
  description: "A free sudoku game available on the iOS App Store.",
};

export default async function Page() {
  return (
    <div className="flex flex-col gap-8">
      <header className="prose text-center dark:prose-invert">
        <h1>I'm on the App Store!</h1>
      </header>

      <aside className="flex flex-col items-center w-full">
        <Icon size={150} />
        <span className="font-light uppercase flex flex-col mb-4">
          <span className="text-xl">Just Another</span>
          <span className="text-4xl">Sudoku</span>
        </span>
        <Link
          target="_blank"
          href="https://apps.apple.com/us/app/just-another-sudoku/id6749923370?itscg=30200&itsct=apps_box_badge&mttnsubad=6749923370"
        >
          <img
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1755129600"
            alt="Download on the App Store"
            style={{
              height: "48px",
              aspectRatio: 246 / 82,
              objectFit: "contain",
            }}
          />
        </Link>
      </aside>
    </div>
  );
}

const Icon = ({
  size,
  width,
  height,
  ...props
}: { size: number } & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width={width || size}
      height={width || size}
      viewBox="0 0 1024 1024"
      fill="none"
    >
      <path d="M512 632V752H392V632H512Z" fill="#66C7F1" />
      <path d="M392 512V632H272V512H392Z" fill="#F184D5" />
      <path d="M392 632V752H272V632H392Z" fill="#ACA6E3" />
      <path d="M272 632V752H152V632H272Z" fill="#66C7F1" />
      <path d="M392 752V872H272V752H392Z" fill="#F184D5" />
      <path d="M512 272V392H392V272H512Z" fill="#F184D5" />
      <path d="M872 272V392H752V272H872Z" fill="#66C7F1" />
      <path d="M872 632V752H752V632H872Z" fill="#F184D5" />
      <path d="M392 152V272H272V152H392Z" fill="#66C7F1" />
      <path d="M752 152V272H632V152H752Z" fill="#F184D5" />
      <path d="M752 512V632H632V512H752Z" fill="#66C7F1" />
      <path d="M392 272V392H272V272H392Z" fill="#ACA6E3" />
      <path d="M752 272V392H632V272H752Z" fill="#ACA6E3" />
      <path d="M752 632V752H632V632H752Z" fill="#ACA6E3" />
      <path d="M272 272V392H152V272H272Z" fill="#F184D5" />
      <path d="M632 272V392H512V272H632Z" fill="#66C7F1" />
      <path d="M632 632V752H512V632H632Z" fill="#F184D5" />
      <path d="M392 392V512H272V392H392Z" fill="#66C7F1" />
      <path d="M752 392V512H632V392H752Z" fill="#F184D5" />
      <path d="M752 752V872H632V752H752Z" fill="#66C7F1" />
    </svg>
  );
};
