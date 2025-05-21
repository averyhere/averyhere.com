"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNav = ({ variant }: { variant?: string }) => {
  const pathname = usePathname();
  const classes = variant === 'horizontal' ? 'grid grid-cols-1 md:grid-cols-4 max-w-max m-auto gap-4' : 'flex flex-row flex-wrap gap-4 m-auto justify-center'
  return (
    <nav className="w-full text-center">
      <ul className={classes}>
        <li className="w-auto md:w-full text-xl">
          <Link href="/about/" className={`nav-item hover:underline ${pathname === '/about/' ? 'active' : 'inactive'}`}>about</Link>
        </li>
        <li className="w-auto md:w-full text-xl">
          <Link href="/experience/" className={`nav-item hover:underline ${pathname === '/experience/' ? 'active' : 'inactive'}`}>experience</Link>
        </li>
        <li className="w-auto md:w-full text-xl">
          <Link href="/projects/" className={`nav-item hover:underline ${pathname === '/projects/' ? 'active' : 'inactive'}`}>projects</Link>
        </li>
        <li className="w-auto md:w-full text-xl">
          <Link href="/contact/" className={`nav-item hover:underline ${pathname === '/contact/' ? 'active' : 'inactive'}`}>contact</Link>
        </li>
      </ul>
    </nav>
  )
}