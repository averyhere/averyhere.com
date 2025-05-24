'use server'

import { createClient } from '@/utils/supabase/server'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const new_password = formData.get('new_password') as string;
  const password_confirm = formData.get('password_confirm') as string;
  const email = formData.get('email') as string;
  const display_name = formData.get('display_name') as string;
  let isPwChange = false;

  // Password Validation
  if (new_password && password_confirm) {
    isPwChange = true;

    if (new_password !== password_confirm) {
      return { error: 'Passwords do not match' }
    }
  }

  const data = isPwChange ? { // Send new PW if changed
    email: email,
    display_name: display_name,
    password: new_password,
  } : { // Else send only contact info
    email: email,
    display_name: display_name,
  }

  const { error } = await supabase.auth.updateUser({data})

  if (error) {
    return { error: error.message }
  }

  return {
    success: 'Your profile has been updated.',
  }
}