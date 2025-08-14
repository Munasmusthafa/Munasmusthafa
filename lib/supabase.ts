import { createClient } from '@supabase/supabase-js'

// Check if environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabase: any = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.warn('Supabase environment variables not found. Using fallback authentication.')
  // Create a mock client that will always fail gracefully
  supabase = {
    from: () => ({
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
        })
      })
    })
  }
}

export { supabase }

export type Database = {
  public: {
    Tables: {
      user_roles: {
        Row: {
          id: string
          email: string
          name: string
          role: string
          avatar_url: string | null
          locations: string[]
          brands: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          role: string
          avatar_url?: string | null
          locations?: string[]
          brands?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: string
          avatar_url?: string | null
          locations?: string[]
          brands?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
