"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNav = ({ variant }: { variant?: string }) => {
  const pathname = usePathname();
  const classes = variant === 'horizontal' ? 'grid grid-cols-1 md:grid-cols-4 max-w-max m-auto gap-4' : 'flex flex-row flex-wrap gap-4 m-auto justify-center'
  return (
    <nav className="w-full text-center text-md md:text-xl">
      <ul className={classes}>
        <li className="w-auto md:w-full">
          <Link href="/about/" className={`decoration-blue underline-offset-4 hover:underline ${pathname === '/about/' ? 'underline' : ''}`}>about</Link>
        </li>
        <li className="w-auto md:w-full">
          <Link href="/experience/" className={`decoration-blue underline-offset-4 hover:underline ${pathname === '/experience/' ? 'underline' : ''}`}>experience</Link>
        </li>
        <li className="w-auto md:w-full">
          <Link href="/projects/" className={`decoration-blue underline-offset-4 hover:underline ${pathname === '/projects/' ? 'underline' : ''}`}>projects</Link>
        </li>
        <li className="w-auto md:w-full">
          <Link href="/contact/" className={`decoration-blue underline-offset-4 hover:underline ${pathname === '/contact/' ? 'underline' : ''}`}>contact</Link>
        </li>
      </ul>
    </nav>
  )
}