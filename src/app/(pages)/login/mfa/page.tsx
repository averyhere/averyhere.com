import MfaVerificationForm from "@/components/auth/MfaForm";
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function LoginVerificationPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (!error && data?.user) {
    redirect('/admin/')
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        Multi-Factor Verification
      </h1>
      <MfaVerificationForm />
    </>
  );
}
