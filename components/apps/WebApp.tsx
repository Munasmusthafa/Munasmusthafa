"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Globe,
  Users,
  Building,
  Code,
  Settings,
  Menu,
  X,
  LogOut,
  User,
  RotateCcw,
  Home,
  Calendar,
  ShoppingCart,
  List,
} from "lucide-react"

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "text-cyan-400" },
  { id: "restaurant-page", label: "Restaurant Page", icon: Globe, color: "text-cyan-400" },
  { id: "group-page", label: "Group Page", icon: Users, color: "text-cyan-400" },
  { id: "brands-pages", label: "Brands Pages", icon: Building, color: "text-cyan-400" },
  { id: "widgets", label: "Widgets", icon: Code, color: "text-cyan-400" },
  { id: "settings", label: "Settings", icon: Settings, color: "text-cyan-400" },
]

const restaurantPageSubPages = [
  { id: "general", label: "General", icon: Globe },
  { id: "reservations", label: "Reservations", icon: Calendar },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "waitlist", label: "Waitlist", icon: List },
]

export function WebApp() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const [restaurantPageSubPage, setRestaurantPageSubPage] = useState("general")

  const renderPageContent = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Web Dashboard</h1>
              <p className="text-muted">Manage your online presence and web integrations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Web Analytics</h3>
                <p className="text-muted">Dashboard content coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "restaurant-page":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Restaurant Page */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Restaurant Page</h3>
                <div className="space-y-1">
                  {restaurantPageSubPages.map((subPage) => {
                    const Icon = subPage.icon
                    return (
                      <button
                        key={subPage.id}
                        onClick={() => setRestaurantPageSubPage(subPage.id)}
                        className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer flex items-center space-x-2 ${
                          restaurantPageSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{subPage.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">
                  Restaurant Page - {restaurantPageSubPages.find((p) => p.id === restaurantPageSubPage)?.label}
                </h1>
                <p className="text-muted">Configure your public restaurant page settings</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Page Configuration</h3>
                <p className="text-muted">Restaurant page settings coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "group-page":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Group Page</h1>
              <p className="text-muted">Manage multi-location group website</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Group Website</h3>
              <p className="text-muted">Group page management coming soon...</p>
            </div>
          </div>
        )
      case "brands-pages":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Brand Pages</h1>
              <p className="text-muted">Manage individual brand websites and pages</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Brand Management</h3>
              <p className="text-muted">Brand pages interface coming soon...</p>
            </div>
          </div>
        )
      case "widgets":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Embeddable Widgets</h1>
              <p className="text-muted">Create and manage embeddable booking widgets</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Widget Builder</h3>
              <p className="text-muted">Widget creation tools coming soon...</p>
            </div>
          </div>
        )
      case "settings":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Web Settings</h1>
              <p className="text-muted">Configure web integration settings and preferences</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Configuration</h3>
              <p className="text-muted">Web settings interface coming soon...</p>
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
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-white">Web & Widgets</span>
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
