"use client"

import { useState } from "react"
import { TopBar } from "./TopBar"
import { AppDock } from "./AppDock"
import { RemyFloatingAssistant } from "./RemyFloatingAssistant"
import { Dashboard } from "./Dashboard"
import { ReviewsApp } from "./apps/ReviewsApp"
import { BookingsApp } from "./apps/BookingsApp"
import { WaitlistApp } from "./apps/WaitlistApp"
import { CRMApp } from "./apps/CRMApp"
import { InsightsApp } from "./apps/InsightsApp"
import { OrderingApp } from "./apps/OrderingApp"
import { UsersApp } from "./apps/UsersApp"
import { CommunicationApp } from "./apps/CommunicationApp"
import { SettingsApp } from "./apps/SettingsApp"
import { BillingApp } from "./apps/BillingApp"

export type AppId =
  | "dashboard"
  | "bookings"
  | "waitlist"
  | "crm"
  | "reviews"
  | "insights"
  | "ordering"
  | "users"
  | "communication"
  | "settings"
  | "billing"

interface AppRouterProps {
  onAppChange?: (appId: AppId) => void
}

// Coming Soon Component
const ComingSoonApp = ({ appName }: { appName: string }) => (
  <div className="min-h-screen bg-primary flex items-center justify-center">
    <div className="text-center animate-in fade-in-50 duration-700">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {appName}
        </h1>
        <p className="text-lg text-secondary mb-8">Coming Soon</p>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-teal-400 to-purple-400 rounded-full"></div>
      </div>
      <div className="max-w-md mx-auto">
        <p className="text-muted mb-6">We're working hard to bring you this feature. Stay tuned for updates!</p>
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  </div>
)

export function AppRouter({ onAppChange }: AppRouterProps) {
  const [currentApp, setCurrentApp] = useState<AppId>("dashboard")

  const handleAppChange = (appId: AppId) => {
    setCurrentApp(appId)
    onAppChange?.(appId)
  }

  const renderCurrentApp = () => {
    switch (currentApp) {
      case "dashboard":
        return <Dashboard onAppChange={handleAppChange} />
      case "bookings":
        return <BookingsApp />
      case "reviews":
        return <ReviewsApp />
      case "waitlist":
        return <WaitlistApp />
      case "crm":
        return <CRMApp />
      case "insights":
        return <InsightsApp />
      case "ordering":
        return <OrderingApp />
      case "users":
        return <UsersApp />
      case "communication":
        return <CommunicationApp />
      case "settings":
        return <SettingsApp />
      case "billing":
        return <BillingApp />
      default:
        return <Dashboard onAppChange={handleAppChange} />
    }
  }

  // Show TopBar only for dashboard
  const showTopBar = currentApp === "dashboard"

  return (
    <div className="min-h-screen bg-primary relative">
      {showTopBar && <TopBar currentApp={currentApp} onAppChange={handleAppChange} />}
      <div className="pb-20 md:pb-24">{renderCurrentApp()}</div>
      <AppDock currentApp={currentApp} onAppChange={handleAppChange} />
      <RemyFloatingAssistant />
    </div>
  )
}
