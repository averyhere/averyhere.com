import { verifyMFA } from "@/lib/actions/mfa/verifyMfa";
import buttonStyles from "@/components/ui/Button/button.module.css"

export default async function MfaVerification() {

  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        2FA Verification
      </h1>
      <form
        action={verifyMFA}
        className="grid grid-col-1 gap-4 w-full max-w-xs mx-auto"
      >
        <div className="flex flex-col">
          <label htmlFor="verifyCode" className="text-center">
            Enter your 6-digit verification code
          </label>
          <input
            className="bg-purple/20 p-2 border border-purple tracking-[1ch] text-center"
            type="text"
            name="verifyCode"
            id="verifyCode"
            placeholder="• • • • • •"
            required
            maxLength={6}
          />
        </div>
        <div>
          <button
            type="submit"
             className={`${buttonStyles.button} !justify-center !w-full`}
          >
            Verify
          </button>
        </div>
      </form>
    </>
  );
}