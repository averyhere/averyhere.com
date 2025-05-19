'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const pw_data = {
    new_password: formData.get('new_password') as string,
    password_confirm: formData.get('password_confirm') as string,
  }

  let data = {
    email: formData.get('email') as string,
    display_name: formData.get('display_name') as string,
  } as {
    [key: string]: string
  }

  // Add new password to data only if password is changing & meets requirements
  if (
    (pw_data.new_password && pw_data.password_confirm) && // Both new & confirm provided
    (pw_data.new_password === pw_data.password_confirm)   // New & confirm match
    // TODO: validate pw requirements
  ) {
    data['password'] = pw_data.new_password;
  }

  const { error } = await supabase.auth.updateUser({data})

  // console.log("🚀 ~ login ~ error:", error)
  if (error) {
    redirect('/error/')
  }

  revalidatePath('/admin/profile/', 'layout')
  redirect('/admin/profile/')
}
