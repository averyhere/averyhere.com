"use client"

import { useState, useEffect } from "react"
import type { IconType } from "react-icons"
import { PiCheckFatDuotone, PiWarningDiamondDuotone, PiWarningDuotone, PiInfoDuotone } from "react-icons/pi"
import { ToastContainer, type ToastContentProps } from "react-toastify"

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

type CustomNotificationProps = ToastContentProps<{
  title?: string;
  message?: string;
}>;

export const CustomToast = ({ data  }: CustomNotificationProps ) => {
  return (
    <div className="toast-container">
      {data.title && (<div className="toast-title">{data.title}</div>)}
      {data.message && (<div className="toast-message">{data.message}</div>)}
    </div>
  )
}

export const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="bottom-right"
      theme="colored"
      icon={({ type, theme }) => {
          switch (type) {
            case 'info':
              return <PiInfoDuotone className="size-6 text-blue" />;
            case 'error':
              return <PiWarningDiamondDuotone className="size-6 text-red-500" />;
            case 'success':
              return <PiCheckFatDuotone className="size-6 text-green-500" />;
            case 'warning':
              return <PiWarningDuotone className="size-6 text-yellow-500" />;
            default:
              return null;
          }
        }}
    />
  )
}