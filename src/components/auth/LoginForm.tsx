"use client"

import { loginAction } from '@/lib/actions/login'
import buttonStyles from "@/components/ui/Button/button.module.css"
import { CustomToast } from "@/components/ui/Toast"
import { toast } from "react-toastify"

export const LoginForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const { error: loginError } = await loginAction(formData);
    if (loginError) {
      toast.error(CustomToast,{
        data: {
          message: loginError
        }
      })
    }
  }
  
  return (
    <>
      <form className="grid grid-col-1 gap-4 w-full max-w-xs mx-auto" action={handleSubmit}>
        <div className="flex flex-col">
          <label>Email Address</label>
          <input name="email" type="email" className="bg-purple/20 p-2 border border-purple" required />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input name="password" type="password" className="bg-purple/20 p-2 border border-purple" required />
        </div>
        <button type="submit" className={`${buttonStyles.button} !justify-center !w-full`}>Login</button>
      </form>
    </>
  )
}