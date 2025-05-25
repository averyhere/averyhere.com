import { 
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiEnvelopeDuotone,
  PiButterflyDuotone
} from "react-icons/pi"
import type { Metadata } from 'next'
import { Button } from "@/components/ui"

export const dynamic = 'force-static';
 
export const metadata: Metadata = {
  title: 'Contact Avery',
  description: 'Ways to get in touch with Avery.',
}

export default function Page() {
  return (
    <article>
      <header>
        <h1 className="mb-4 text-3xl text-center font-bold">
          Looking to get in touch?
        </h1>
        <p className="mb-4 text-xl text-center">Here&apos;s where you can find me:</p>
      </header>

      <ul className="flex flex-wrap gap-4 items-center justify-center">
        <li>
          <Button
            href="https://www.linkedin.com/in/averyondo/" 
            icon={PiLinkedinLogoDuotone}
            size="lg"
            external
          >
            <span className="sr-only">LinkedIn</span>
          </Button>
        </li>
        <li>
          <Button
            href="https://github.com/averyhere"
            icon={PiGithubLogoDuotone}
            size="lg"
            external
          >
            <span className="sr-only">GitHub</span>
          </Button>
        </li>
        <li>
          <Button
            href="https://bsky.app/profile/averyhere.com"
            icon={PiButterflyDuotone}
            size="lg"
            external
          >
            <span className="sr-only">Bluesky</span>
          </Button>
        </li>
        <li>
          <Button
            href="mailto:hello@averyhere.com"
            icon={PiEnvelopeDuotone}
            size="lg"
            external
          >
            <span className="sr-only">Email</span>
          </Button>
        </li>
      </ul>
    </article>
  );
}
