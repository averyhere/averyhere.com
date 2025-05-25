'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export const enrollMFA = async () => {
    const supabase = await createClient()
    
    // assurance level before enrolling MFA
    // const assuranceLevel = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    // console.log("assuranceLevelBefore", assuranceLevel)
    
    // Unenroll any unverified factors
    const factors = await supabase.auth.mfa.listFactors()
    const unverifiedFactors = factors?.data?.all.filter(
        (factor) => factor.status === "unverified"
      );
    if (unverifiedFactors?.length) {
        for (const factor of unverifiedFactors) {
            const { error } = await supabase.auth.mfa.unenroll({factorId: factor.id});
            if (error) {
                // throw error
                redirect(`/error/?message=${encodeURIComponent(error.message)}`)
            }
        }
    }

    const { data, error } = await supabase.auth.mfa.enroll({
        factorType: 'totp',
    })

    if (error) {
        // console.log('error in enrolling MFA', error)
        // throw error
        redirect(`/error/?message=${encodeURIComponent(error.message)}`)
        // return { error: error?.message }
    }
    // console.log('factors', data)
    // console.log('dataID or factorId-->', data.id)



    // Now check the assurance level after enrolling MFA
    // const assuranceLevelAfter = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    // console.log("assuranceLevelAfter", assuranceLevelAfter)

    return data


}