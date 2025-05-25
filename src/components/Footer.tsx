import { createClient } from '@/utils/supabase/server'
import Link from "next/link"
import { LogoutButton } from '@/components/auth'

export const Footer = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  return (
    <footer className="justify-self-end w-full">
      <div className="text-center grow-0 print:hidden my-1 flex flex-col items-center justify-center gap-1 text-xs">
        {(!error && data?.user) && (
          <span>
            <Link href="/admin/" className='decoration-blue underline-offset-4 hover:underline'>dashboard</Link>
            <span className='text-purple'>&nbsp;|&nbsp;</span>
            <LogoutButton variant='link' />
          </span>
        )}
        <span>© Avery Ondo</span>
      </div>
    </footer>
  )
}