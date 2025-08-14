"use client"

import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { LogOut, User, RotateCcw, Home } from "lucide-react"

interface NavigationItem {
  id: string
  label: string
  icon: any
  color?: string
  badge?: string
}

interface AppSidebarProps {
  isOpen: boolean
  onClose: () => void
  appName: string
  appIcon: ReactNode
  appColor: string
  navigationItems: NavigationItem[]
  currentPage: string
  onPageChange: (pageId: string) => void
  onExitApp?: () => void
  onSwitchApp?: () => void
  onUserSettings?: () => void
  onSignOut?: () => void
}

export function AppSidebar({
  isOpen,
  onClose,
  appName,
  appIcon,
  appColor,
  navigationItems,
  currentPage,
  onPageChange,
  onExitApp,
  onSwitchApp,
  onUserSettings,
  onSignOut,
}: AppSidebarProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Blurred Background Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white/5 backdrop-filter backdrop-blur-xl border-r border-white/10 z-50 transform transition-all duration-300 ease-in-out">
        {/* Top Section - App Title */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 bg-gradient-to-br ${appColor} rounded-lg flex items-center justify-center`}>
              {appIcon}
            </div>
            <span className="text-lg font-semibold text-white">{appName}</span>
          </div>
        </div>

        {/* Middle Section - Main Navigation */}
        <div className="flex-1 p-5">
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id)
                    onClose()
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-sm ${
                    currentPage === item.id
                      ? `bg-${item.color?.replace("text-", "") || "teal"}-500/10 ${item.color || "text-teal-400"} border-r-2 border-${item.color?.replace("text-", "") || "teal"}-400`
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <div className="flex items-center justify-between w-full">
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded font-semibold">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Bottom Section - Actions */}
        <div className="p-5 border-t border-white/10">
          <div className="space-y-1">
            <button
              onClick={onExitApp}
              className="w-full flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm"
            >
              <Home className="w-4 h-4" />
              <span>Exit App</span>
            </button>
            <button
              onClick={onSwitchApp}
              className="w-full flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Switch App</span>
            </button>
            <button
              onClick={onUserSettings}
              className="w-full flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm"
            >
              <User className="w-4 h-4" />
              <span>User Settings</span>
            </button>
            <button
              onClick={onSignOut}
              className="w-full flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
