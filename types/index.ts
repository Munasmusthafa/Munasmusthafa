export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar: string
  locations: string[]
  brands: string[]
}

export type UserRole = 
  | 'host' 
  | 'manager' 
  | 'area-manager' 
  | 'franchisee' 
  | 'brand-manager' 
  | 'owner' 
  | 'group-marketing-director'
  | 'ops-director'

export interface App {
  id: string
  name: string
  icon: string
  color: string
  badge?: number
  roles: UserRole[]
}

export interface Widget {
  id: string
  title: string
  type: string
  size: 'small' | 'medium' | 'large'
  data: any
  roles: UserRole[]
}

export interface Location {
  id: string
  name: string
  occupancy: number
  revenue: number
  covers: number
  rating: number
  status: 'good' | 'warning' | 'critical'
}
