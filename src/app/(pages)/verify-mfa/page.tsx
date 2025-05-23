import type { Metadata } from 'next'
import { verifyMFA } from "@/lib/actions/mfa/verifyMfa";

export default function MfaVerification({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        2FA Verification
      </h1>
      <form
        action={verifyMFA}
        className="mt-8 space-y-6 animate-in flex-1 flex flex-col w-full justify-center gap-2 text-gray-100"
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="verifyCode"
          >
            Enter your 6-digit verification code
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            name="verifyCode"
            id="verifyCode"
            placeholder="••••••"
            required
            maxLength={6}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Verify
          </button>
        </div>

        {searchParams?.message && (
          <p className="mt-2 text-center text-sm text-gray-300 bg-gray-800 p-2 rounded-md">
            {searchParams.message}
          </p>
        )}
      </form>
    </>
  );
}