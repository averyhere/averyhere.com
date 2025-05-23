'use server'

import { createClient } from "@/utils/supabase/server"

export const checkAssurance = async () => {
    const supabase = await createClient()

    const assuranceLevel = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    console.log("assuranceLevel>>>>>>>>>>", assuranceLevel)

}