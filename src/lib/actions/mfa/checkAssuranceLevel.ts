'use server'

import { createClient } from "@/utils/supabase/server"

export const checkAssurance = async () => {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()

    if (error) {
        return { error: error.message }
    }

    if (data.currentLevel === "aal2") {
        return { success: true }
    }

}