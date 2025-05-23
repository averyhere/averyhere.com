import type { Metadata } from 'next'
import { LoginForm } from '@/components/auth'

export const metadata: Metadata = {
  title: 'Avery Ondo',
  description: 'Avery Ondo\'s personal website.',
}

export default async function PrivatePage({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  return (
    <>
      <h1 className='text-3xl text-center font-bold mb-2'>Login</h1>
      <LoginForm message={searchParams.message} />
    </>
  )
}