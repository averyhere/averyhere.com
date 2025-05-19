import { logout } from './actions'
import buttonStyles from "@/components/button/button.module.css"

export const LogoutButton = () => {
  
  return (
    <form className="inline">
      <button type="submit" className={`${buttonStyles.button} ${buttonStyles['button-sm']}`} formAction={logout}>Logout</button>
    </form>
  )
}