"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from '@/components/auth'

export const Navigation = ({ variant, showAdminLinks }: { variant?: string, showAdminLinks?: boolean }) => {
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
      {showAdminLinks && (
        <div className="mt-4">
          <h6 className="text-sm font-bold">Admin</h6>
          <ul className="flex flex-wrap gap-4 items-center justify-center">
            <li>
              <Link href="/admin/" className={`nav-item text-sm hover:underline ${pathname === '/admin/' ? 'active' : 'inactive'}`}>dashboard</Link>
            </li>
            <li>
              <LogoutButton variant="link" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}