'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { User } from '../types'
import { supabase } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Fallback user data in case Supabase table doesn't exist yet
const fallbackUsers: Record<string, User> = {
  'host@restoguru.com': {
    id: '1',
    email: 'host@restoguru.com',
    name: 'Sarah Johnson',
    role: 'host',
    avatar: '/placeholder.svg?height=40&width=40&text=SJ',
    locations: ['downtown'],
    brands: ['brand1']
  },
  'manager@restoguru.com': {
    id: '2',
    email: 'manager@restoguru.com',
    name: 'Mike Chen',
    role: 'manager',
    avatar: '/placeholder.svg?height=40&width=40&text=MC',
    locations: ['downtown'],
    brands: ['brand1']
  },
  'area@restoguru.com': {
    id: '3',
    email: 'area@restoguru.com',
    name: 'Lisa Rodriguez',
    role: 'area-manager',
    avatar: '/placeholder.svg?height=40&width=40&text=LR',
    locations: ['downtown', 'mall-plaza', 'airport'],
    brands: ['brand1']
  },
  'franchisee@restoguru.com': {
    id: '4',
    email: 'franchisee@restoguru.com',
    name: 'David Kim',
    role: 'franchisee',
    avatar: '/placeholder.svg?height=40&width=40&text=DK',
    locations: ['downtown', 'mall-plaza', 'airport', 'beachfront'],
    brands: ['brand1']
  },
  'brand@restoguru.com': {
    id: '5',
    email: 'brand@restoguru.com',
    name: 'Emma Thompson',
    role: 'brand-manager',
    avatar: '/placeholder.svg?height=40&width=40&text=ET',
    locations: [],
    brands: ['brand1']
  },
  'owner@restoguru.com': {
    id: '6',
    email: 'owner@restoguru.com',
    name: 'Robert Wilson',
    role: 'owner',
    avatar: '/placeholder.svg?height=40&width=40&text=RW',
    locations: [],
    brands: ['brand1', 'brand2', 'brand3']
  },
  'marketing@restoguru.com': {
    id: '7',
    email: 'marketing@restoguru.com',
    name: 'Jennifer Davis',
    role: 'group-marketing-director',
    avatar: '/placeholder.svg?height=40&width=40&text=JD',
    locations: [],
    brands: ['brand1', 'brand2', 'brand3']
  },
  'ops@restoguru.com': {
    id: '8',
    email: 'ops@restoguru.com',
    name: 'Alex Martinez',
    role: 'ops-director',
    avatar: '/placeholder.svg?height=40&width=40&text=AM',
    locations: [],
    brands: ['brand1', 'brand2', 'brand3']
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('resto-guru-user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For demo purposes, we'll accept any password for existing users
      // First try to get from Supabase
      let userData: User | null = null
      
      try {
        const { data, error } = await supabase
          .from('user_roles')
          .select('*')
          .eq('email', email)
          .single()

        if (!error && data) {
          userData = {
            id: data.id,
            email: data.email,
            name: data.name,
            role: data.role as User['role'],
            avatar: data.avatar_url || '/placeholder.svg?height=40&width=40&text=U',
            locations: data.locations || [],
            brands: data.brands || []
          }
        }
      } catch (supabaseError) {
        console.log('Supabase not available, using fallback data')
      }

      // If Supabase fails, use fallback data
      if (!userData) {
        userData = fallbackUsers[email]
      }

      if (!userData) {
        console.error('User not found in both Supabase and fallback data')
        setIsLoading(false)
        return false
      }

      setUser(userData)
      localStorage.setItem('resto-guru-user', JSON.stringify(userData))
      setIsLoading(false)
      return true
    } catch (error) {
      console.error('Login error:', error)
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('resto-guru-user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
