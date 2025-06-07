import { createClient } from '@/utils/supabase/server'
import Link from "next/link"
import { LogoutButton } from '@/components/auth'
import Image from "next/image"

export const Footer = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  return (
    <footer className="justify-self-end w-full mt-10">
      <div className="text-center grow-0 print:hidden my-1 flex flex-col items-center justify-center gap-1 text-xs">
        {(!error && data?.user) && (
          <span>
            <Link href="/admin/" className='decoration-blue underline-offset-4 hover:underline'>dashboard</Link>
            <span className='text-purple'>&nbsp;|&nbsp;</span>
            <LogoutButton variant='link' />
          </span>
        )}

        <div className='flex gap-1'>
          <Image
            src="/images/rainbow-flag-quasar-progress.svg"
            width={512}
            height={325}
            className='h-8 w-auto'
            alt="LGBTQIA+ Rainbow Flag Quasar Progress Variant"
          />
          <Image
            src="/images/transgender-pride-flag.svg"
            width={800}
            height={480}
            className='h-8 w-auto'
            alt="LGBTQIA+ Rainbow Flag Quasar Progress Variant"
          />
        </div>

        <span>© Avery Ondo</span>
      </div>
    </footer>
  )
}