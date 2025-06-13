'use client'

import { useState } from "react"
import { enrollMFA } from "@/lib/actions/mfa/enrollMfa";
import { unEnrollMFA } from "@/lib/actions/mfa/unEnrollMfa";
import buttonStyles from "@/components/ui/Button/button.module.css"
import { CustomToast } from "@/components/ui/Toast"
import MfaVerificationForm from "../auth/MfaForm";
import { toast } from "react-toastify"
import { PiPencilSimpleDuotone, PiXDuotone } from "react-icons/pi";

// eslint-disable-next-line
export const ProfileForm = ({data}: {data: any}) => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<string|null>();
  const [isMFAEnabled, setIsMFAEnabled] = useState<boolean>(data.factors?.filter((factor:any)=>factor.status === 'verified'));

  const handle2faToggle = async (isChecked: boolean) => {
    if (!isMFAEnabled) {
      // MFA currently disabled, show enable form
      const mfa = await enrollMFA();
      setQrCode(mfa.totp.qr_code);
      setShowForm('enable-mfa');
    } else {
      // MFA currently enabled, show confirm disable form
      setShowForm('disable-mfa');
    }
  }

  return (
    <main id="main-content">
      <div className="divide-y divide-purple divide-dashed">

        <section className="py-4 relative flex items-center">
          <div className="w-4/8">
            <label className="text-bright-purple dark:text-purple font-bold">Display Name</label>
            <p className="text-xs italic opacity-80">The name we should use to reference to you.</p>
          </div>
          <div className="w-3/8">
            {showForm === 'display_name' && (<ChangeDisplayNameForm closeModal={()=>setShowForm(null)} display_name={data.user_metadata.display_name} />)}
            {showForm !== 'display_name' && (<span>{data.user_metadata.display_name}</span>)}
          </div>
          <div className="w-1/8">
            {showForm === 'display_name' && (
              <button type="button" onClick={()=>setShowForm(null)} className="flex gap-1 items-center text-sm cursor-pointer hover:text-pink">
                Cancel
              </button>
            )}
            {showForm !== 'display_name' && (
              <button type="button" onClick={()=>setShowForm('display_name')} className="flex gap-1 items-center text-sm cursor-pointer hover:text-pink">
                <PiPencilSimpleDuotone className="size-3" />
                Edit
              </button>
            )}
          </div>
        </section>

        <section className="py-4 relative flex items-center">
          <div className="w-4/8">
            <label className="text-bright-purple dark:text-purple font-bold">Email address</label>
            <p className="text-xs italic opacity-80">Used to login and for communications.</p>
          </div>
          <div className="w-3/8">
            {showForm === 'email' && (<ChangeEmailForm closeModal={()=>setShowForm(null)} email={data.email} />)}
            {showForm !== 'email' && (<span>{data.email}</span>)}
          </div>
          <div className="w-1/8">
          {showForm === 'email' && (
            <button type="button" onClick={()=>setShowForm(null)} className="flex gap-1 items-center text-sm cursor-pointer hover:text-pink">
              Cancel
            </button>
          )}
          {showForm !== 'email' && (
            <button type="button" onClick={()=>setShowForm('email')} className="flex gap-1 items-center text-sm cursor-pointer hover:text-pink">
              <PiPencilSimpleDuotone className="size-3" />
              Edit
            </button>
          )}
          </div>
        </section>

        <section className="py-4 relative flex items-center">
          <div className="w-4/8">
            <label className="text-bright-purple dark:text-purple font-bold">Password</label>
            <p className="text-xs italic opacity-80">Used to login.</p>
          </div>
          <div className="w-3/8">
            
          </div>
          <div className="w-1/8">
            <button type="button" onClick={()=>setShowForm('password')} className="flex gap-1 items-center text-sm cursor-pointer hover:text-pink">
              <PiPencilSimpleDuotone className="size-3" />
              Change
            </button>
          </div>
        </section>

        <section className="py-4 relative flex items-center">
          <div className="w-4/8">
            <label className="text-bright-purple dark:text-purple font-bold">Two-factor Authentication</label>
            <p className="text-xs italic opacity-80"></p>
          </div>
          <div className="w-3/8">
            {isMFAEnabled ? (
              <em className="text-sm">Enabled</em>
            ) : (
              <em className="text-sm">Disabled</em>
            )}
          </div>
          <div className="w-1/8">
            <label htmlFor="2fa-enabled" className="toggle-field">
              <span></span>
              <input id="2fa-enabled" name="2fa-enabled" type="checkbox" defaultChecked={isMFAEnabled} onChange={(e) => handle2faToggle(e.target.checked)} />
            </label>
          </div>
        </section>

      </div>

      {showForm === 'password' && (<ChangePasswordForm closeModal={()=>setShowForm(null)} />)}
      {showForm === 'enable-mfa' && (<Enable2faForm qrCode={qrCode} closeModal={()=>setShowForm(null)} />)}
      {showForm === 'disable-mfa' && (<Disable2faForm closeModal={()=>setShowForm(null)} />)}
    </main>
  )
}

const ChangeDisplayNameForm = ({display_name, closeModal}: {display_name: string, closeModal: ()=>void}) => {
  const handleSubmit = (formData: FormData) => {

  }

  return (
    <form className="w-full flex items-center" action={handleSubmit}>
      <label htmlFor="display_name" className="sr-only">Display name</label>
      <input name="display_name" type="text" className="w-full bg-purple/20 p-1.5 border border-purple" defaultValue={display_name} required />
      <div className="flex flex-col items-center justify-center">
        <button className="hover:text-blue cursor-pointer px-2 text-bright-purple dark:text-pink" type="submit">Save</button>
      </div>
    </form>
  )
}

const ChangeEmailForm = ({email, closeModal}: {email: string, closeModal: ()=>void}) => {
  const handleSubmit = (formData: FormData) => {
    
  }

  return (
    <form className="w-full flex items-center" action={handleSubmit}>
      <label htmlFor="email" className="sr-only">Email</label>
      <input name="email" type="email" className="w-full bg-purple/20 p-1.5 border border-purple" defaultValue={email} required />
      <div className="flex flex-col items-center justify-center">
        <button className="hover:text-blue cursor-pointer px-2 text-bright-purple dark:text-pink" type="submit">Save</button>
      </div>
    </form>
  )
}

const ChangePasswordForm = ({closeModal}: {closeModal: ()=>void}) => {
  const handleSubmit = (formData: FormData) => {
    
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black/80 fixed top-0 left-0">
      <dialog className="relative p-4 w-sm z-0 border border-purple" open>
        <button className="absolute top-2 right-2 p-2 hover:text-blue cursor-pointer" onClick={closeModal} title="Close" type="button">
          <PiXDuotone />
          <span className="sr-only">Close</span>
        </button>
        <form className="w-full flex flex-col gap-4" action={handleSubmit}>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="current-pw">Current Password</label>
            <input name="current-pw" type="text" className="bg-purple/20 p-2 border border-purple" required />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="new-pw">New Password</label>
            <input name="new-pw" type="text" className="bg-purple/20 p-2 border border-purple" required />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="new-confirm-pw">Confirm new Password</label>
            <input name="new-confirm-pw" type="text" className="bg-purple/20 p-2 border border-purple" required />
          </div>
          <button className={`${buttonStyles.button} ${buttonStyles['button-sm']} self-end`} type="submit">Change Password</button>
        </form>
      </dialog>
    </div>
  )
}

const Enable2faForm = ({qrCode, closeModal}: {qrCode: string|null, closeModal: ()=>void}) => {

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black/80 fixed top-0 left-0">
      <dialog className="relative p-4 w-sm z-0 border border-purple" open>
        <button className="absolute top-2 right-2 p-2 hover:text-blue cursor-pointer" onClick={closeModal} title="Close" type="button">
          <PiXDuotone />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="flex flex-col md:flex-row">
          <p>Scan the QR code with your authenticator app and enter the verification code below.</p>
          <div className="inline-block border p-1 rounded-lg bg-white">
              <img
                src={(qrCode as string)}
                alt="MFA QR Code"
                width={200}
                height={200}
              />
          </div>
        </div>
        <MfaVerificationForm />
      </dialog>
    </div>
  )
}

const Disable2faForm = ({closeModal}: {closeModal: ()=>void}) => {
  const handleClick = async () => {
    const { data, error } = await unEnrollMFA();
    
    if (error) {
      toast.error(CustomToast, {
        data: {
          message: error
        }
      })
    } else {
      toast(CustomToast, {
        data: {
          message: '2FA Disabled'
        }
      })
    }

    closeModal();
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black/80 fixed top-0 left-0">
      <dialog className="relative p-4 w-sm z-0 border border-purple" open>
        <button className="absolute top-2 right-2 p-2 hover:text-blue cursor-pointer" onClick={closeModal} title="Close" type="button">
          <PiXDuotone />
          <span className="sr-only">Close</span>
        </button>
        <div className="w-full flex flex-col gap-1 items-center justify-center">
          <button 
            type="button" 
            className={`${buttonStyles.button}`}
            onClick={() => handleClick()}
          >
            Disable 2FA
          </button>
        </div>
      </dialog>
    </div>
  )
}
