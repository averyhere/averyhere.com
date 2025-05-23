"use client"

import { loginAction } from '@/lib/actions/login'
import buttonStyles from "@/components/ui/Button/button.module.css"
import { useState } from "react"

export const LoginForm = ({ message }: { message?:string }) => {
  const [error, setError] = useState<null|string>(null);

  const handleSubmit = async (formData: FormData) => {
    const { error: loginError } = await loginAction(formData);
    if (loginError) {
      setError(loginError);
    }
  }
  
  return (
    <>
      <form className="grid grid-col-1 gap-4 w-full max-w-xs mx-auto" action={handleSubmit}>
        <div className="flex flex-col">
          <label>Email Address</label>
          <input name="email" type="email" className="bg-purple/20 p-2" required />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input name="password" type="password" className="bg-purple/20 p-2" required />
        </div>
        <button type="submit" className={`${buttonStyles.button} !justify-center !w-full`}>Login</button>
      </form>
      {error && (
        <p className="text-sm text-center rounded-md">
          {error}
        </p>
      )}
      {message && (
        <p className="text-sm text-center rounded-md">
          {message}
        </p>
      )}
    </>
  )
}