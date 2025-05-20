'use client'

import { useState } from "react"
import { updateProfile } from './actions'
import buttonStyles from "@/components/button/button.module.css"

// eslint-disable-next-line
export const ProfileForm = ({data}: {data: any}) => {
  const [isPasswordChange, setIsPasswordChange] = useState<boolean>(false)

  // eslint-disable-next-line
  const checkIsasswordChange = (e: any) => {
    if (e.target.value) {
      setIsPasswordChange(true)
    } else {
      setIsPasswordChange(false)
    }
  }

  return (
    <form className="w-full grid gap-4 md:grid-cols-2">
      <fieldset className='grid grid-col-1 gap-4 border border-purple p-2'>
        <legend className="text-xl">Update contact info</legend>
        <div className="flex flex-col">
          <label>Display name</label>
          <input name="display_name" type="text" className="bg-purple/20 p-2" defaultValue={data.user_metadata.display_name} required />
        </div>

        <div className="flex flex-col">
          <label>Email Address</label>
          <input name="email" type="email" className="bg-purple/20 p-2" defaultValue={data.email} required />
        </div>

      </fieldset>

      <fieldset className='grid grid-col-1 gap-4 border border-purple p-2'>
        <legend className="text-xl">Change password</legend>

        <div className="flex flex-col">
          <label>New Password</label>
          <input name="password" type="new_password" className="bg-purple/20 p-2" required={isPasswordChange} onChange={(e) => checkIsasswordChange(e)}/>
        </div>

        <div className={`flex flex-col ${isPasswordChange ? 'opacity-100' : 'opacity-50'}`}>
          <label>Confirm Password</label>
          <input name="password" type="password_confirm" className="bg-purple/20 p-2" required={isPasswordChange} disabled={!isPasswordChange} />
        </div>

      </fieldset>

      <button type="submit" className={`${buttonStyles.button} col-start-2 justify-self-end`} formAction={updateProfile}>Update</button>

    </form>
  )
}