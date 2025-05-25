import { LogoutButton } from '@/components/auth'
import { PiGearSixDuotone, PiSpeedometerDuotone, PiPuzzlePieceDuotone, PiBuildingOfficeDuotone } from "react-icons/pi";
import { createClient } from '@/utils/supabase/server'
import { NavLink } from '@/components/ui'

export const AdminNav = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return null;
  }

  return (
    <nav className='w-full flex items-center flex-wrap gap-4 justify-between align text-xs'>
      <ul className='flex flex-wrap gap-4 mt-1 justify-center'>
        <li><NavLink href="/admin/" className='flex items-center gap-1 text-bright-purple dark:text-pink border-0 border-b-4 border-transparent' activeClasses='border-blue'><PiSpeedometerDuotone className="size-6" /> Dashboard</NavLink></li>
        <li><NavLink href="/admin/list/experience/" className='flex items-center gap-1 text-bright-purple dark:text-pink border-0 border-b-4 border-transparent' activeClasses='border-blue'><PiBuildingOfficeDuotone className="size-6" /> Experience</NavLink></li>
        <li><NavLink href="/admin/list/projects/" className='flex items-center gap-1 text-bright-purple dark:text-pink border-0 border-b-4 border-transparent' activeClasses='border-blue'><PiPuzzlePieceDuotone className="size-6" /> Projects</NavLink></li>
        <li><NavLink href="/admin/profile/" className='flex items-center gap-1 text-bright-purple dark:text-pink border-0 border-b-4 mb-1.5 border-transparent' activeClasses='border-blue'><PiGearSixDuotone className="size-6" /> Settings</NavLink></li>
      </ul>
      <ul className='flex flex-wrap gap-4 mt-1 justify-center'>
        <li><LogoutButton /></li>
      </ul>
    </nav>
  )
}