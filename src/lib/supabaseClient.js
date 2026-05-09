import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.com/dashboard/project/dppfnsdekspckurqbfud/settings/general'
const supabaseKey = 'sb_publishable_jh6QMc0IDa227w1GHMiVBg_eGYuWo3L'

export const supabase = createClient(supabaseUrl, supabaseKey)