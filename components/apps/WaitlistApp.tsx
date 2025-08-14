"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, BarChart3, Settings, Menu, X, LogOut, User, RotateCcw, Home } from "lucide-react"

const navigationItems = [
  { id: "live-waitlist", label: "Live Waitlist", icon: Users, color: "text-amber-400" },
  { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "text-amber-400" },
  { id: "settings", label: "Settings", icon: Settings, color: "text-amber-400" },
]

export function WaitlistApp() {
  const [currentPage, setCurrentPage] = useState("live-waitlist")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  const renderPageContent = () => {
    switch (currentPage) {
      case "live-waitlist":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Live Waitlist</h1>
              <p className="text-muted">Real-time waitlist management and guest notifications</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Current Waitlist</h3>
                <p className="text-muted">Waitlist management interface coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "dashboard":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Waitlist Dashboard</h1>
              <p className="text-muted">Analytics and insights for waitlist performance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Analytics</h3>
                <p className="text-muted">Dashboard content coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "settings":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Settings */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Settings</h3>
                <div className="space-y-1">
                  <div className="p-2 rounded hover:bg-tertiary cursor-pointer">
                    <span className="text-sm text-secondary">Message Templates</span>
                  </div>
                  <div className="p-2 rounded hover:bg-tertiary cursor-pointer">
                    <span className="text-sm text-secondary">Seating Preferences</span>
                  </div>
                  <div className="p-2 rounded hover:bg-tertiary cursor-pointer">
                    <span className="text-sm text-secondary">Booking Tags</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">Waitlist Settings</h1>
                <p className="text-muted">Configure waitlist preferences and templates</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Message Templates</h3>
                <p className="text-muted">Settings content coming soon...</p>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-6">
            <p className="text-muted">Page not found</p>
          </div>
        )
    }
  }

  return (
    <div className="h-screen bg-primary flex">
      {/* Sidebar */}
      <div
        className={`bg-secondary border-r border-default transition-all duration-300 ${sidebarCollapsed ? "w-16" : "w-64"}`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-white">Waitlist</span>
              </div>
            )}
            <Button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="btn-secondary p-2">
              {sidebarCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </Button>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? "bg-tertiary text-white"
                      : "text-muted hover:text-secondary hover:bg-tertiary/50"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-default">
          <div className="space-y-2">
            <Button className="w-full btn-secondary justify-start">
              <Home className="w-4 h-4 mr-2" />
              {!sidebarCollapsed && "Exit App"}
            </Button>
            <Button className="w-full btn-secondary justify-start">
              <RotateCcw className="w-4 h-4 mr-2" />
              {!sidebarCollapsed && "Switch App"}
            </Button>
            <Button className="w-full btn-secondary justify-start">
              <User className="w-4 h-4 mr-2" />
              {!sidebarCollapsed && "User Settings"}
            </Button>
            <Button className="w-full btn-secondary justify-start">
              <LogOut className="w-4 h-4 mr-2" />
              {!sidebarCollapsed && "Sign Out"}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{renderPageContent()}</div>
    </div>
  )
}
