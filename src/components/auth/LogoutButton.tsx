import { logout } from './actions'
import buttonStyles from "@/components/button/button.module.css"

export const LogoutButton = ({variant = 'button'}: { variant?: 'button'|'link' }) => {
  
  return (
    <form className="inline">
      {variant === 'button' && (<button type="submit" className={`${buttonStyles.button} ${buttonStyles['button-sm']}`} formAction={logout}>Logout</button>)}
      {variant === 'link' && (<button type="submit" className='nav-item cursor-pointer text-sm hover:underline' formAction={logout}>logout</button>)}
    </form>
  )
}