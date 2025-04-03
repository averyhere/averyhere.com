"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = ({ variant}: { variant?: string }) => {
  const pathname = usePathname();
  const classes = variant === 'horizontal' ? 'text-2xl flex flex-col flex-row gap-8 mb-4 justify-around' : 'text-4xl flex flex-col gap-4'
  return (
    <nav className="nav-menu">
      <ul className={classes}>
        <li>
          <Link href="/about" className={`nav-item hover:underline ${pathname === '/about' ? 'active' : 'inactive'}`}>about</Link>
        </li>
        <li>
          <Link href="/my-work" className={`nav-item hover:underline ${pathname === '/my-work' ? 'active' : 'inactive'}`}>my work</Link>
        </li>
        <li>
          <Link href="/contact" className={`nav-item hover:underline ${pathname === '/contact' ? 'active' : 'inactive'}`}>contact</Link>
        </li>
      </ul>
    </nav>
  )
}