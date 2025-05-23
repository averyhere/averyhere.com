import { logoutAction } from '@/lib/actions/logout'
import buttonStyles from "@/components/ui/Button/button.module.css"

export const LogoutButton = ({variant = 'button'}: { variant?: 'button'|'link' }) => {
  
  return (
    <form className="inline">
      {variant === 'button' && (<button type="submit" className={`${buttonStyles.button} ${buttonStyles['button-sm']}`} formAction={logoutAction}>Logout</button>)}
      {variant === 'link' && (<button type="submit" className='nav-item cursor-pointer text-sm hover:underline' formAction={logoutAction}>Logout</button>)}
    </form>
  )
}