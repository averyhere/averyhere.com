"use client"

import { useState, useEffect } from "react"
import type { IconType } from "react-icons"
import { PiCheckFatDuotone, PiWarningDiamondDuotone } from "react-icons/pi"

export type ToastProps = {
  variant: 'success'|'error';
  title?: string;
  message?: string;
  icon?: IconType;
}

export const Toast = ({variant, title, message, icon}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const Icon = icon || variant === 'success' ? PiCheckFatDuotone : PiWarningDiamondDuotone;

  useEffect(() => {
    setTimeout(()=>{
      setIsVisible(false);
    }, 3500)

    return () => {

    }
  }, []);

  

  return (

      <aside className={`fixed transition-all duration-300 ease-in right-4 ${variant === 'success' ? 'bg-blue text-bright-purple' : 'bg-pink text-bright-purple'}  ${isVisible ? 'animate-bounce bottom-4' : '-bottom-full'}`}>
        <div className='flex items-center gap-2 p-4'>
          <Icon className='size-10' />
          <div>
            {title && (<h3 className="font-bold">{title}</h3>)}
            {message && (<p>{message}</p>)}
          </div>
        </div>
        <div className={`absolute top-1 left-1 w-full h-full -z-10 ${variant === 'success' ? 'bg-pink' : 'bg-blue'}`}></div>
      </aside>
  )
}