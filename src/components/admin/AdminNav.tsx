import { LogoutButton } from '@/components/auth'
import { 
  PiGearSixDuotone,
  PiSpeedometerDuotone,
  PiPuzzlePieceDuotone,
  PiBuildingOfficeDuotone,
  PiArticleDuotone 
} from "react-icons/pi";
import { createClient } from '@/utils/supabase/server'
import { NavLink } from '@/components/ui'
import { AveryOndoLogo } from "@/components/logos"
import Link from "next/link"
import Image from "next/image"

export const AdminNav = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return null;
  }

  return (
    <aside className='w-48 bg-black dark:bg-white/5 h-dvh sticky top-0 flex flex-col justify-between'>
      <div>
        <Link href="/admin/">
          <AveryOndoLogo className="w-full px-2 pt-4 pb-4 h-auto" />
        </Link>
        <nav className='w-full flex flex-col gap-4 align text-sm grow justify-between'>
          <ul className='flex flex-col mt-1'>
            <li><NavLink href="/admin/" className='flex p-2 items-center gap-1 text-white/90 hover:text-white border-0 border-l-4 border-transparent' activeClasses='border-pink text-pink bg-white/5 hover:text-pink' exactMatchOnly><PiSpeedometerDuotone className="size-6" /> Dashboard</NavLink></li>
            <li><NavLink href="/admin/pages/" className='flex p-2 items-center gap-1 text-white/90 hover:text-white border-0 border-l-4 border-transparent' activeClasses='border-pink text-pink bg-white/5 hover:text-pink'><PiArticleDuotone className="size-6" /> Pages</NavLink></li>
            <li><NavLink href="/admin/experience/" className='flex p-2 items-center gap-1 text-white/90 hover:text-white border-0 border-l-4 border-transparent' activeClasses='border-pink text-pink bg-white/5 hover:text-pink'><PiBuildingOfficeDuotone className="size-6" /> Experience</NavLink></li>
            <li><NavLink href="/admin/projects/" className='flex p-2 items-center gap-1 text-white/90 hover:text-white border-0 border-l-4 border-transparent' activeClasses='border-pink text-pink bg-white/5 hover:text-pink'><PiPuzzlePieceDuotone className="size-6" /> Projects</NavLink></li>
            <li><NavLink href="/admin/profile/" className='flex p-2 items-center gap-1 text-white/90 hover:text-white border-0 border-l-4 mb-1.5 border-transparent' activeClasses='border-pink text-pink bg-white/5 hover:text-pink'><PiGearSixDuotone className="size-6" /> Settings</NavLink></li>
          </ul>
        </nav>
      </div>
      <ul className='flex flex-col gap-4 mt-1'>
        <li><LogoutButton variant='link' icon className='flex px-2 items-center gap-1 text-white/90 hover:text-white border-0 border-l-4 border-transparent text-sm capitalize hover:no-underline' /></li>
        <li className='text-white text-xs px-2 pb-1'>© Avery Ondo</li>
      </ul>
    </aside>
  )
}