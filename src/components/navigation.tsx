"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = ({ variant}: { variant?: string }) => {
  const pathname = usePathname();
  const classes = variant === 'horizontal' ? 'text-xl md:text-2xl flex flex-wrap flex-col flex-row gap-8 mt-8 justify-around' : 'text-4xl flex flex-wrap flex-col gap-4'
  return (
    <nav className="nav-menu max-w-max mx-auto">
      <ul className={classes}>
        <li>
          <Link href="/about" className={`nav-item hover:underline ${pathname === '/about' ? 'active' : 'inactive'}`}>about</Link>
        </li>
        <li>
          <Link href="/experience" className={`nav-item hover:underline ${pathname === '/experience' ? 'active' : 'inactive'}`}>experience</Link>
        </li>
        <li>
          <Link href="/projects" className={`nav-item hover:underline ${pathname === '/projects' ? 'active' : 'inactive'}`}>projects</Link>
        </li>
        <li>
          <Link href="/contact" className={`nav-item hover:underline ${pathname === '/contact' ? 'active' : 'inactive'}`}>contact</Link>
        </li>
      </ul>
    </nav>
  )
}