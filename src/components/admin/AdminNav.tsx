"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from '@/components/auth'
import { PiPlusDuotone, PiUserCircleGearDuotone } from "react-icons/pi"

export const AdminNav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex flex-wrap gap-4 justify-between align'>
      <ul className='flex flex-wrap gap-4 mt-1'>
        <li><Link href="/admin/" className={`flex items-center gap-1 text-bright-purple dark:text-pink underline-offset-4 decoration-blue hover:underline ${pathname === '/admin/' ? 'underline' : ''}`}>Dashboard</Link></li>
        <li><Link href="/admin/create/experience/" className={`flex items-center gap-1 text-bright-purple dark:text-pink underline-offset-4 decoration-blue hover:underline ${pathname === '' ? 'underline' : ''}`}><PiPlusDuotone /> Add Experience</Link></li>
        <li><Link href="/admin/create/project/" className={`flex items-center gap-1 text-bright-purple dark:text-pink underline-offset-4 decoration-blue hover:underline ${pathname === '' ? 'underline' : ''}`}><PiPlusDuotone /> Add Project</Link></li>
        <li><Link href="/admin/profile/" className={`flex items-center gap-1 text-bright-purple dark:text-pink underline-offset-4 decoration-blue hover:underline ${pathname === '/admin/profile/' ? 'underline' : ''}`}><PiUserCircleGearDuotone /> Edit Profile</Link></li>
      </ul>
      <LogoutButton />
    </nav>
  )
}