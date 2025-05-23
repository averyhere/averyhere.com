"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from '@/components/auth'
import { PiGearSixDuotone, PiSpeedometerDuotone, PiPuzzlePieceDuotone, PiBuildingOfficeDuotone } from "react-icons/pi";

export const AdminNav = () => {
  const pathname = usePathname();

  return (
    <nav className='w-full flex items-center flex-wrap gap-4 justify-between align text-xs'>
      <ul className='flex flex-wrap gap-4 mt-1 justify-center'>
        <li><Link href="/admin/" className={`flex items-center gap-1 text-bright-purple dark:text-pink border-0 border-b-4 ${pathname === '/admin/' ? 'border-blue' : 'border-transparent'}`}><PiSpeedometerDuotone className="size-6" /> Dashboard</Link></li>
        <li><Link href="/admin/list/experience/" className={`flex items-center gap-1 text-bright-purple dark:text-pink border-0 border-b-4 ${pathname.includes('/experience/') ? 'border-blue' : 'border-transparent'}`}><PiBuildingOfficeDuotone className="size-6" /> Experience</Link></li>
        <li><Link href="/admin/list/projects/" className={`flex items-center gap-1 text-bright-purple dark:text-pink border-0 border-b-4 ${pathname.includes('/project/') || pathname.includes('/projects/') ? 'border-blue' : 'border-transparent'}`}><PiPuzzlePieceDuotone className="size-6" /> Projects</Link></li>
        <li><Link href="/admin/profile/" className={`flex items-center gap-1 text-bright-purple dark:text-pink border-0 border-b-4 mb-1.5 ${pathname === '/admin/profile/' ? 'border-blue' : 'border-transparent'}`} title="Edit profile"><PiGearSixDuotone className="size-6" /> Settings</Link></li>
      </ul>
      <ul className='flex flex-wrap gap-4 mt-1 justify-center'>
        <li><LogoutButton /></li>
      </ul>
    </nav>
  )
}