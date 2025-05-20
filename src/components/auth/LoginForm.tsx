import { login } from './actions'
import buttonStyles from "@/components/button/button.module.css"

export const LoginForm = () => {
  
  return (
    <form className="grid grid-col-1 gap-4 w-full max-w-xs mx-auto">
      <h1 className='text-3xl text-center font-bold'>Please login</h1>
      <div className="flex flex-col">
        <label>Email Address</label>
        <input name="email" type="email" className="bg-purple/20 p-2" required />
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <input name="password" type="password" className="bg-purple/20 p-2" required />
      </div>
      <button type="submit" className={`${buttonStyles.button} !justify-center !w-full`} formAction={login}>Login</button>
    </form>
  )
}