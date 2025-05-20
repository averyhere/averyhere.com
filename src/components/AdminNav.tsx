"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from '@/components/auth'
import { PiUserCircleGearDuotone } from "react-icons/pi"

export const AdminNav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex flex-wrap gap-4 justify-between align'>
      <ul className='flex flex-wrap gap-4 mt-1'>
        <li><Link href="/admin/" className={`flex items-center gap-1 text-bright-purple dark:text-pink underline-offset-4 decoration-blue hover:underline ${pathname === '/admin/' ? 'underline' : ''}`}>Dashboard</Link></li>
        <li><Link href="/admin/list/experience/" className={`flex items-center gap-1 text-bright-purple dark:text-pink underline-offset-4 decoration-blue hover:underline ${pathname.includes('/experience/') ? 'underline' : ''}`}>Experience</Link></li>
        <li><Link href="/admin/list/projects/" className={`flex items-center gap-1 text-bright-purple dark:text-pink underline-offset-4 decoration-blue hover:underline ${pathname.includes('/project/') || pathname.includes('/projects/') ? 'underline' : ''}`}>Projects</Link></li>
        <li><Link href="/admin/profile/" className={`flex items-center gap-1 text-bright-purple dark:text-pink underline-offset-4 decoration-blue hover:underline ${pathname === '/admin/profile/' ? 'underline' : ''}`}><PiUserCircleGearDuotone /> Edit Profile</Link></li>
      </ul>
      <LogoutButton />
    </nav>
  )
}