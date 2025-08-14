'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { Loader2, Database, Wifi, WifiOff, Shield, ChevronRight } from 'lucide-react'

const demoUsers = [
  { email: 'host@restoguru.com', role: 'Host', description: 'Front-of-house operations', color: '#1DE9B6' },
  { email: 'manager@restoguru.com', role: 'Manager', description: 'Complete branch operations', color: '#2196F3' },
  { email: 'area@restoguru.com', role: 'Area Manager', description: 'Multi-location oversight', color: '#7C4DFF' },
  { email: 'franchisee@restoguru.com', role: 'Franchisee', description: 'Owned locations management', color: '#4CAF50' },
  { email: 'brand@restoguru.com', role: 'Brand Manager', description: 'Brand-wide operations', color: '#FF9800' },
  { email: 'owner@restoguru.com', role: 'Owner', description: 'Executive oversight', color: '#F44336' },
  { email: 'marketing@restoguru.com', role: 'Marketing Director', description: 'Cross-brand marketing', color: '#E91E63' },
  { email: 'ops@restoguru.com', role: 'Operations Director', description: 'Group-wide operations', color: '#9C27B0' }
]

export function Login() {
  const [email, setEmail] = useState('area@restoguru.com')
  const [password, setPassword] = useState('demo123')
  const [selectedUser, setSelectedUser] = useState('area@restoguru.com')
  const [supabaseConnected, setSupabaseConnected] = useState<boolean | null>(null)
  const { login, isLoading } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase
          .from('user_roles')
          .select('count')
          .limit(1)

        setSupabaseConnected(!error)
      } catch (error) {
        setSupabaseConnected(false)
      }
    }

    checkConnection()
  }, [])

  const handleUserSelect = (userEmail: string) => {
    setSelectedUser(userEmail)
    setEmail(userEmail)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await login(email, password)
    
    if (success) {
      const user = demoUsers.find(u => u.email === email)
      toast({
        title: "Welcome to Resto Guru OS",
        description: `Successfully signed in as ${user?.role}`,
      })
    } else {
      toast({
        title: "Login Failed",
        description: "User not found. Please select a demo user.",
        variant: "destructive"
      })
    }
  }

  const selectedUserInfo = demoUsers.find(u => u.email === selectedUser)

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-amber-500/10 rounded-full blur-3xl" />
      
      <Card className="w-full max-w-md bg-bg-secondary/80 backdrop-blur-xl border-border-default shadow-2xl relative z-10">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-bg-quaternary to-bg-dark rounded-2xl flex items-center justify-center shadow-lg border border-border-default">
            <span className="h1 font-bold text-primary">R</span>
          </div>
          <div>
            <CardTitle className="h1 font-bold text-primary mb-2">
              Resto Guru OS
            </CardTitle>
            <CardDescription className="text-muted body-large">
              Unified Restaurant Operating System
            </CardDescription>
          </div>
          
          {/* Connection Status */}
          <div className="flex items-center justify-center">
            {supabaseConnected === null ? (
              <div className="pill bg-bg-tertiary border-border-default">
                <Database className="w-3 h-3 mr-2" />
                <span>Checking connection...</span>
              </div>
            ) : supabaseConnected ? (
              <div className="pill bg-excellent/20 text-excellent border-excellent/30">
                <Wifi className="w-3 h-3 mr-2" />
                <span>Database Connected</span>
              </div>
            ) : (
              <div className="pill bg-average/20 text-average border-average/30">
                <WifiOff className="w-3 h-3 mr-2" />
                <span>Demo Mode Active</span>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="user-select" className="body font-medium text-secondary">
                Select Demo User
              </Label>
              <Select value={selectedUser} onValueChange={handleUserSelect}>
                <SelectTrigger className="h-12 bg-bg-tertiary border-border-default text-primary hover:bg-bg-quaternary transition-colors">
                  <SelectValue placeholder="Choose a user role" />
                </SelectTrigger>
                <SelectContent className="bg-bg-secondary border-border-default shadow-xl">
                  {demoUsers.map((user) => (
                    <SelectItem 
                      key={user.email} 
                      value={user.email}
                      className="text-primary hover:bg-bg-tertiary focus:bg-bg-tertiary py-3 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: user.color }}
                        />
                        <div className="flex flex-col">
                          <span className="font-medium">{user.role}</span>
                          <span className="micro text-muted">{user.description}</span>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="body font-medium text-secondary">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-bg-tertiary border-border-default text-primary placeholder:text-faint focus:border-border-active focus:bg-bg-quaternary transition-all"
                placeholder="Enter your email"
                required
                readOnly
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="password" className="body font-medium text-secondary">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-bg-tertiary border-border-default text-primary placeholder:text-faint focus:border-border-active focus:bg-bg-quaternary transition-all"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-bg-quaternary to-bg-dark hover:from-bg-dark hover:to-bg-quaternary border border-border-default text-primary font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <Shield className="mr-2 w-5 h-5" />
                  <span>Sign In as {selectedUserInfo?.role}</span>
                  <ChevronRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
          
          <div className="p-4 bg-bg-tertiary/50 rounded-xl border border-border-default backdrop-blur-sm">
            <div className="text-center body text-muted mb-3 font-medium">Demo Access Information</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="micro text-faint">Password:</span>
                <span className="body text-primary font-mono bg-bg-quaternary px-2 py-1 rounded">demo123</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="micro text-faint">Access Level:</span>
                <span className="body text-primary">Full Demo</span>
              </div>
              {!supabaseConnected && (
                <div className="micro text-average text-center mt-3 p-2 bg-average/10 rounded-lg border border-average/20">
                  Running in offline demo mode with sample data
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
