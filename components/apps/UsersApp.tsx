"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, UserCheck, Bike, Activity, Menu, X, LogOut, User, RotateCcw, Home } from "lucide-react"

const navigationItems = [
  { id: "users", label: "Users", icon: Users, color: "text-indigo-400" },
  { id: "roles", label: "Roles", icon: Shield, color: "text-indigo-400" },
  { id: "server-management", label: "Server Management", icon: UserCheck, color: "text-indigo-400" },
  { id: "rider-management", label: "Rider Management", icon: Bike, color: "text-indigo-400" },
  { id: "activity-log", label: "Activity/Login Log", icon: Activity, color: "text-indigo-400", badge: "Coming Soon" },
]

export function UsersApp() {
  const [currentPage, setCurrentPage] = useState("users")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  const renderPageContent = () => {
    switch (currentPage) {
      case "users":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">User Management</h1>
              <p className="text-muted">Manage staff accounts and permissions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Staff Directory</h3>
              <p className="text-muted">User management interface coming soon...</p>
            </div>
          </div>
        )
      case "roles":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Role Management</h1>
              <p className="text-muted">Configure user roles and permissions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Permission System</h3>
              <p className="text-muted">Role configuration interface coming soon...</p>
            </div>
          </div>
        )
      case "server-management":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Server Management</h1>
              <p className="text-muted">Manage restaurant servers and waitstaff</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Server Operations</h3>
              <p className="text-muted">Server management tools coming soon...</p>
            </div>
          </div>
        )
      case "rider-management":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Rider Management</h1>
              <p className="text-muted">Manage delivery riders and logistics</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Delivery Operations</h3>
              <p className="text-muted">Rider management interface coming soon...</p>
            </div>
          </div>
        )
      case "activity-log":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Activity & Login Log</h1>
              <p className="text-muted">Monitor user activity and system access</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
              <Badge className="bg-amber-500/20 text-amber-400 mb-4">Coming Soon</Badge>
              <h3 className="text-lg font-semibold text-white mb-4">Activity Monitoring</h3>
              <p className="text-muted">Activity logging features are in development...</p>
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
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-white">Users</span>
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
                  {!sidebarCollapsed && (
                    <div className="flex items-center justify-between w-full">
                      <span>{item.label}</span>
                      {item.badge && <Badge className="bg-amber-500/20 text-amber-400 text-xs">{item.badge}</Badge>}
                    </div>
                  )}
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
