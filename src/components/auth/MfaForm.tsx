"use client"

import { useState } from "react"
import { verifyMFA } from "@/lib/actions/mfa/verifyMfa";
import { CustomToast } from "@/components/ui/Toast"
import MfaInputField from "../ui/MfaInputField";
import { toast } from 'react-toastify';

export default function MfaVerificationForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeSubmit = async (code: string) => {
    setIsLoading(true);
    const res = await verifyMFA(code);

    if (res.error) {
      toast.error(CustomToast, {
        data: {
          message: res.error,
        },
        autoClose: false
      });
    }
  }

  return (
    <>
      <form className="grid grid-col-1 gap-4 w-full max-w-xs mx-auto">
        <div className="flex flex-col gap-4">
          <label htmlFor="verifyCode-0" className="text-center">
            Enter your 6-digit verification code
          </label>
          <MfaInputField isLoading={isLoading} callback={handleCodeSubmit} />
        </div>
      </form>
    </>
  );
}
