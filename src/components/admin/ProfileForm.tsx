'use client'

import { useState } from "react"
import { updateProfile } from '@/lib/actions/admin-actions/profile'
import { enrollMFA } from "@/lib/actions/mfa/enrollMfa";
import { verifyMFA } from "@/lib/actions/mfa/verifyMfa";
import { unEnrollMFA } from "@/lib/actions/mfa/unEnrollMfa";
import buttonStyles from "@/components/ui/Button/button.module.css"
import { Toast } from '@/components/ui'
import Image from 'next/image'

// eslint-disable-next-line
export const ProfileForm = ({data}: {data: any}) => {
  const [isPasswordChange, setIsPasswordChange] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<null|string>(null);
  const [successMessage, setSuccessMessage] = useState<null|string>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const { error, success } = await updateProfile(formData);
    if (error) {
      setErrorMessage(error);
    } else if (success) {
      setSuccessMessage(success);
    }
  }

  const handleEnrollMfa = async () => {
    const mfa = await enrollMFA();
    // console.log("MFA-->", mfa);
    setQrCode(mfa.totp.qr_code);
  };

  // eslint-disable-next-line
  const checkIsPasswordChange = (e: any) => {
    if (e.target.value) {
      setIsPasswordChange(true)
    } else {
      setIsPasswordChange(false)
    }
  }

// eslint-disable-next-line
  const isMFAEnabled = data.factors?.filter((factor:any)=>factor.status === 'verified');

  return (
    <>
      <form className="w-full grid gap-4 md:grid-cols-2" action={handleSubmit}>
        <fieldset className='grid grid-col-1 gap-4 border border-purple p-4 pt-2'>
          <legend className="text-xl">Update contact info</legend>
          <div className="flex flex-col">
            <label>Display name</label>
            <input name="display_name" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={data.user_metadata.display_name} required />
          </div>

          <div className="flex flex-col">
            <label>Email Address</label>
            <input name="email" type="email" className="bg-purple/20 p-2 border border-purple" defaultValue={data.email} required />
          </div>

        </fieldset>

        <fieldset className='grid grid-col-1 gap-4 border border-purple p-4 pt-2'>
          <legend className="text-xl">Change password</legend>

          <div className="flex flex-col">
            <label>New Password</label>
            <input name="new_password" type="password" className="bg-purple/20 p-2 border border-purple" required={isPasswordChange} onChange={(e) => checkIsPasswordChange(e)}/>
          </div>

          <div className={`flex flex-col ${isPasswordChange ? 'opacity-100' : 'opacity-50'}`}>
            <label>Confirm Password</label>
            <input name="password_confirm" type="password" className="bg-purple/20 p-2 border border-purple" required={isPasswordChange} disabled={!isPasswordChange} />
          </div>

        </fieldset>

        <button type="submit" className={`${buttonStyles.button} col-start-2 justify-self-end`}>Update</button>
      </form>


      <form className="grid gap-4 mt-4 items-center">
        <fieldset className="grid grid-col-1 gap-4 border border-purple p-4 pt-2">
          <legend className="text-xl">Two factor authentication</legend>

          <div className="flex flex-col justify-center">
            {!isMFAEnabled && (
              <>
                <button 
                  type="button" 
                  className={`${buttonStyles.button}`}
                  onClick={() => handleEnrollMfa()}
                >
                  Enable 2FA
                </button>
                {qrCode && (
                  <>
                    <div className="flex flex-col md:flex-row">
                      <p>Scan the QR code with your authenticator app and enter the verification code below.</p>
                      <div className="inline-block border p-1 rounded-lg bg-white">
                        <Image
                          src={qrCode}
                          alt="MFA QR Code"
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 col-start-2 col-span-2 items-end">
                      <div className="flex flex-col w-full">
                        <label htmlFor="verificationCode">Verify code:</label>
                        <input 
                          name="verifyCode" 
                          id="verificationCode" 
                          type="text" 
                          className="bg-purple/20 p-2 border border-purple"
                          placeholder="Enter verification code"
                          required 
                        />
                      </div>

                      <div className="flex flex-col w-full">
                        <label htmlFor="friendlyName">Device name:</label>
                        <input 
                          name="friendlyName" 
                          id="friendlyName" 
                          type="text" 
                          className="bg-purple/20 p-2 border border-purple"
                          placeholder="Enter a unique device name"
                          required 
                        />
                      </div>

                      <button 
                        type="submit" 
                        className={`${buttonStyles.button}`}
                        style={{marginBottom: '0'}}
                        formAction={verifyMFA}
                      >
                        Verify
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

            {isMFAEnabled && (
              <button 
                type="button" 
                className={`${buttonStyles.button}`}
                onClick={() => unEnrollMFA()}
              >
                Disable 2FA
              </button>
            )}
          </div>
        </fieldset>
      </form>

      {errorMessage && (
        <Toast message={errorMessage} variant="error" />
      )}

      {successMessage && (
        <Toast message={successMessage} variant="success" />
      )}
    </>
  )
}