import { logoutAction } from '@/lib/actions/logout'
import buttonStyles from "@/components/ui/Button/button.module.css"
import { cn } from '@/lib/utils'
import { PiSignOutDuotone } from "react-icons/pi";

export const LogoutButton = ({variant = 'button', className = '', icon}: { variant?: 'button'|'link', className?: string, icon?: boolean }) => {
  
  return (
    <form className="inline-flex items-center">
      {variant === 'button' && (
        <button 
          type="submit" 
          className={`${buttonStyles.button} ${buttonStyles['button-sm']} ${className}`} 
          formAction={logoutAction}
        >
          {icon && (<PiSignOutDuotone className='size-6' />)}
            Logout
        </button>
      )}
      {variant === 'link' && (
        <button 
          type="submit" 
          className={cn(['decoration-blue underline-offset-4 cursor-pointer text-xs hover:underline', className])} 
          formAction={logoutAction}
        >
          {icon && (<PiSignOutDuotone className='size-6' />)}
            Logout
        </button>
      )}
    </form>
  )
}