"use client"

import { AuthProvider, useAuth } from "../contexts/AuthContext"
import { Login } from "../components/Login"
import { AppRouter } from "../components/AppRouter"
import { RemyFloatingAssistant } from "../components/RemyFloatingAssistant"
import { Toaster } from "@/components/ui/toaster"

function AppContent() {
  const { user } = useAuth()

  return (
    <>
      {user ? <AppRouter /> : <Login />}
      {user && <RemyFloatingAssistant />}
    </>
  )
}

export default function Page() {
  return (
    <AuthProvider>
      <AppContent />
      <Toaster />
    </AuthProvider>
  )
}
