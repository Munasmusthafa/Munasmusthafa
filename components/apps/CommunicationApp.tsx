"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Inbox,
  MessageSquare,
  MessageCircle,
  FileText,
  Bell,
  BarChart3,
  Users,
  Menu,
  X,
  LogOut,
  User,
  RotateCcw,
  Home,
  Phone,
  Mail,
} from "lucide-react"

const navigationItems = [
  { id: "inbox", label: "Inbox", icon: Inbox, color: "text-teal-400" },
  { id: "message-templates", label: "Message Templates", icon: MessageSquare, color: "text-teal-400" },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, color: "text-teal-400" },
  { id: "logs", label: "Logs", icon: FileText, color: "text-teal-400" },
  { id: "notifications", label: "Notifications", icon: Bell, color: "text-teal-400" },
  { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "text-teal-400" },
  { id: "team-chat", label: "Team Chat", icon: Users, color: "text-teal-400", badge: "Coming Soon" },
]

const logsSubPages = [
  { id: "call-log", label: "Call Log", icon: Phone },
  { id: "sms-log", label: "SMS Log", icon: MessageSquare },
  { id: "email-log", label: "Email Log", icon: Mail },
]

export function CommunicationApp() {
  const [currentPage, setCurrentPage] = useState("inbox")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const [logsSubPage, setLogsSubPage] = useState("call-log")

  const renderPageContent = () => {
    switch (currentPage) {
      case "inbox":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Communication Inbox</h1>
              <p className="text-muted">Centralized messaging and communication hub</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Message Center</h3>
              <p className="text-muted">Inbox interface coming soon...</p>
            </div>
          </div>
        )
      case "message-templates":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Message Templates</h1>
              <p className="text-muted">Pre-configured message templates for common communications</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Template Library</h3>
              <p className="text-muted">Template management interface coming soon...</p>
            </div>
          </div>
        )
      case "whatsapp":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">WhatsApp Integration</h1>
              <p className="text-muted">WhatsApp Business messaging and automation</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">WhatsApp Business</h3>
              <p className="text-muted">WhatsApp integration coming soon...</p>
            </div>
          </div>
        )
      case "logs":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Logs */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Communication Logs</h3>
                <div className="space-y-1">
                  {logsSubPages.map((subPage) => {
                    const Icon = subPage.icon
                    return (
                      <button
                        key={subPage.id}
                        onClick={() => setLogsSubPage(subPage.id)}
                        className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer flex items-center space-x-2 ${
                          logsSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-teal-400" />
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
                  {logsSubPages.find((p) => p.id === logsSubPage)?.label}
                </h1>
                <p className="text-muted">Communication history and logs</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Communication History</h3>
                <p className="text-muted">Log viewer coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "notifications":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Notification Center</h1>
              <p className="text-muted">Manage system notifications and alerts</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Alert Management</h3>
              <p className="text-muted">Notification management interface coming soon...</p>
            </div>
          </div>
        )
      case "dashboard":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Communication Dashboard</h1>
              <p className="text-muted">Communication analytics and performance metrics</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Communication Metrics</h3>
              <p className="text-muted">Dashboard analytics coming soon...</p>
            </div>
          </div>
        )
      case "team-chat":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Team Chat</h1>
              <p className="text-muted">Internal team communication and collaboration</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
              <Badge className="bg-amber-500/20 text-amber-400 mb-4">Coming Soon</Badge>
              <h3 className="text-lg font-semibold text-white mb-4">Team Collaboration</h3>
              <p className="text-muted">Team chat features are in development...</p>
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
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-green-400 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-white">Communication</span>
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
