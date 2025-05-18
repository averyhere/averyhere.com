import { 
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiEnvelopeDuotone,
  PiButterflyDuotone
} from "react-icons/pi"
import { HiOutlineExternalLink } from "react-icons/hi"
import type { Metadata } from 'next'
 
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
          <a href="https://www.linkedin.com/in/averyondo/" target="_blank" className="button">
            <PiLinkedinLogoDuotone className="size-8" /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/averyhere" target="_blank" className="button">
            <PiGithubLogoDuotone className="size-8" /> GitHub
          </a>
        </li>
        <li>
          <a href='https://bsky.app/profile/averyhere.com' target="_blank" className="button">
            <PiButterflyDuotone className="size-8" /> Bluesky
          </a>
        </li>
        <li>
          <a href='mailto:hello@averyhere.com' target="_blank" className="button">
            <PiEnvelopeDuotone className="size-8" /> Email
          </a>
        </li>
      </ul>
    </article>
  );
}
