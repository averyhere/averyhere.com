'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function loginAction(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { error: error.message }
  }

  const assuranceLevel = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
  if (assuranceLevel.data?.nextLevel === 'aal2' &&
      assuranceLevel.data?.nextLevel !== assuranceLevel.data?.currentLevel) {

      redirect(`${origin}/verify-mfa`)
      
  }

  redirect('/admin/')
}