'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from 'next/navigation'

export const unEnrollMFA = async () => {
    const supabase = await createClient()

    // find the factorId first before unenrolling
    const factors = await supabase.auth.mfa.listFactors()
    if (factors.error) {
        // throw factors.error
        redirect(`/error/?message=${encodeURIComponent(factors.error.message)}`)
    }

    // console.log('factors', factors.data.all)


    if (factors) {
        const factorId = factors.data.all[0].id
        // console.log("factorId", factorId)

        // now we'll unenroll the factor
        const { error } = await supabase.auth.mfa.unenroll({
            factorId
        })
        if (error) {
            // console.log('error in enrolling MFA', error)
            // throw error
            redirect(`/error/?message=${encodeURIComponent(error.message)}`)
        }
        // console.log('factors', data)
        // console.log('dataID or factorIdUnenrolled-->', data.id)


    }

    // console.log('No TOTP factors found!')
    

}