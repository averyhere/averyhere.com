import Link, { LinkProps } from "next/link"
import { IconType } from "react-icons"
import styles from "./button.module.css"

interface ButtonProps extends LinkProps {
  className?: string,
  children?: React.ReactNode,
  external?: boolean,
  size?: 'xs'|'sm'|'md'|'lg',
  icon?: IconType,
  iconPosition?: 'start'|'end',
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  external, 
  size = 'md',
  icon, 
  iconPosition = 'start', 
  className, 
  ...props 
}) => {
  
  if (icon){
    const Icon:IconType = icon;
    const sizeClass = size === 'md' ? 'size-8' : size === 'sm' ? 'size-4' : size === 'xs' ? 'size-3' : 'size-10';
    return (
      <Link href={href} className={`${styles.button} ${size !== 'md' ? styles[`button-${size}`] : ''} ${styles[`button-icon-${iconPosition}`]} ${className}`} {... (external ? { target: "_blank" } : {} )} {...props}>
        {iconPosition === 'start' && (<Icon className={sizeClass} />)} 
        {children}
        {iconPosition === 'end' && (<Icon className={sizeClass} />)} 
      </Link>
    )
  }

  return (
    <Link href={href} className={`${styles.button} ${size !== 'md' ? styles[`button-${size}`] : ''} ${className}`} {... (external ? { target: "_blank" } : {} )} {...props}>
      {children}
    </Link>
  )
}
