import { 
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiEnvelopeDuotone
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

      <ul className="grid grid-cols-2 md:grid-cols-3 items-center justify-center">
        <li>
          <a href="https://www.linkedin.com/in/averyondo/" target="_blank" className="flex flex-col items-center justify-center transition-all duration-200 hover:text-blue">
            <PiLinkedinLogoDuotone className="size-24 max-w-full" /> <span className="flex">LinkedIn <HiOutlineExternalLink /></span>
          </a>
        </li>
        <li>
          <a href="https://github.com/averyhere" target="_blank" className="flex flex-col items-center justify-center transition-all duration-200 hover:text-blue">
            <PiGithubLogoDuotone className="size-24 max-w-full" /> <span className="flex">GitHub <HiOutlineExternalLink /></span>
          </a>
        </li>
        <li>
          <a href='mailto:hello@averyhere.com' target="_blank" className="flex flex-col items-center justify-center transition-all duration-200 hover:text-blue">
            <PiEnvelopeDuotone className="size-24 max-w-full" /> <span className="flex">Email <HiOutlineExternalLink /></span>
          </a>
        </li>
      </ul>
    </article>
  );
}
