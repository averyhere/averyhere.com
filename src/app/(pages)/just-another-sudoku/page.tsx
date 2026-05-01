import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "./style.module.css";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { Button } from "@/components/ui";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Just Another Sudoku is on the App Store",
  description: "A free sudoku game available on the iOS App Store.",
};

export default async function Page() {
  return (
    <div className="flex flex-col gap-4 lg:pt-20">
      <header className="flex flex-row gap-4 items-center">
        <div
          className="shadow-lg"
          style={{
            // @ts-ignore corner shape is not yet in the official types, but it is supported in all modern browsers and we use it with a fallback border radius for Safari
            cornerShape: "squircle",
            borderRadius: "40px",
          }}
        >
          <Icon size={100} />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-1">Just Another Sudoku</h1>
          <span
            className="inline text-purple font-bold text-sm"
            aria-hidden="true"
          >
            /&zwj;/
          </span>
          &nbsp;
          <span className="inline font-light text-sm">
            iOS App built with React Native
          </span>
        </div>
      </header>
      <div className="md:flex md:justify-between items-end">
        <div className="w-full flex flex-row items-center justify-center divide-x divide-purple">
          <Link
            target="_blank"
            className="pr-4"
            href="https://apps.apple.com/us/app/just-another-sudoku/id6749923370?itscg=30200&itsct=apps_box_badge&mttnsubad=6749923370"
          >
            <img
              src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1755129600"
              alt="Download on the App Store"
              style={{
                height: "34px",
                aspectRatio: 246 / 82,
                objectFit: "contain",
              }}
            />
          </Link>

          <Button
            href="https://github.com/averyhere/just-another-sudoku-app/"
            size="sm"
            icon={PiGithubLogoDuotone}
            iconPosition="end"
            external
            className="ml-4"
          >
            View on Github
          </Button>
        </div>
      </div>
      <article className="prose dark:prose-invert">
        <p>
          Just Another Sudoku is the clean, classic Sudoku experience you've
          been looking for. No ads, no accounts, no distractions, and no
          tracking. Just pure puzzle-solving.
        </p>
        <p>
          Whether you're unwinding before bed, sharpening your mind on your
          commute, or challenging yourself with harder difficulties, Just
          Another Sudoku gives you a focused, beautiful space to play.
        </p>
        <ul className={styles.repeatingCounterRule}>
          <li>
            <strong>Apple Pencil Support</strong>
            <br />
            Write numbers directly into cells using Apple's native Scribble
            feature for a natural, handwriting-first experience designed for
            iPad.
          </li>

          <li>
            <strong>Completely Private</strong>
            <br />
            Zero data collection. No accounts. No tracking. What you play stays
            on your device.
          </li>

          <li>
            <strong>Truly Ad-Free</strong>
            <br />
            Not "ad-free with a subscription", just actually free of ads,
            forever.
          </li>

          <li>
            <strong>Haptic Feedback</strong>
            <br />
            Subtle haptic responses on button presses and number placement make
            every interaction feel satisfying and tactile.
          </li>

          <li>
            <strong>Available in Multiple Languages</strong>
            <br />
            Localized for players around the world.
          </li>

          <li>
            <strong>Clean, Classic Gameplay</strong>
            <br />
            No gimmicks. Just the Sudoku grid you know and love, with a minimal
            interface that gets out of your way.
          </li>
        </ul>

        <p>
          Perfect for all skill levels from beginners learning the basics to
          seasoned solvers tackling expert grids.
        </p>
      </article>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col items-center text-center w-full">
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

          <Button
            href="https://github.com/averyhere/just-another-sudoku-app/"
            size="xs"
            icon={PiGithubLogoDuotone}
            iconPosition="end"
            external
            className="mt-4"
          >
            View on Github
          </Button>
        </div>
        <div className="flex flex-col items-center text-center w-full">
          <Image
            width={1320}
            height={2868}
            className="max-w-full rounded-3xl dark:hidden"
            src="/images/just-another-sudoku-light.png"
            alt="Screenshot of the Just Another Sudoku app on an iPhone in light mode"
          />
          <Image
            width={1320}
            height={2868}
            className="max-w-full rounded-3xl hidden dark:block"
            src="/images/just-another-sudoku-dark.png"
            alt="Screenshot of the Just Another Sudoku app on an iPhone in dark mode"
          />
        </div>
      </div>
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
      height={height || size}
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
