import { 
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone
} from "react-icons/pi"
import { HiOutlineExternalLink } from "react-icons/hi"

export default function Page() {
  return (
    <>
      <h2 className="mb-4 text-3xl text-center">
        Looking to get in touch?<br />Here&apos;s where you can find me:
      </h2>

      <ul className="grid grid-cols-2 items-center justify-center">
        <li>
          <a href="https://www.linkedin.com/in/mattondo/" target="_blank" className="flex flex-col items-center justify-center transition-all duration-200 hover:text-blue">
            <PiLinkedinLogoDuotone className="size-24 max-w-full" /> <span className="flex">LinkedIn <HiOutlineExternalLink /></span>
          </a>
        </li>
        <li>
          <a href="https://github.com/MattOndo" target="_blank" className="flex flex-col items-center justify-center transition-all duration-200 hover:text-blue">
            <PiGithubLogoDuotone className="size-24 max-w-full" /> <span className="flex">GitHub <HiOutlineExternalLink /></span>
          </a>
        </li>
      </ul>
    </>
  );
}
