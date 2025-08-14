"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  History,
  Wrench,
  Menu,
  X,
  LogOut,
  User,
  RotateCcw,
  Home,
  Calendar,
  Users,
  BarChart3,
  Settings,
} from "lucide-react"

const navigationItems = [
  { id: "new-chat", label: "New Chat", icon: MessageSquare, color: "text-purple-400" },
  { id: "chat-history", label: "Chat History", icon: History, color: "text-purple-400" },
  { id: "tools", label: "Tools", icon: Wrench, color: "text-purple-400" },
]

const toolsData = [
  { id: "event-builder", title: "Event Builder", icon: Calendar, description: "Create and manage restaurant events" },
  { id: "shift-manager", title: "Shift Manager", icon: Users, description: "Manage staff shifts and schedules" },
  { id: "analytics-helper", title: "Analytics Helper", icon: BarChart3, description: "Generate insights and reports" },
  { id: "settings-wizard", title: "Settings Wizard", icon: Settings, description: "Configure restaurant settings" },
]

export function RemyApp() {
  const [currentPage, setCurrentPage] = useState("new-chat")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  const renderPageContent = () => {
    switch (currentPage) {
      case "new-chat":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">New Chat with Remy</h1>
              <p className="text-muted">Start a conversation with your AI restaurant assistant</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Remy AI Assistant</h3>
                  <p className="text-sm text-muted">Ready to help with your restaurant operations</p>
                </div>
              </div>
              <p className="text-muted">Chat interface coming soon...</p>
            </div>
          </div>
        )
      case "chat-history":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Chat History</h1>
              <p className="text-muted">Previous conversations with Remy AI</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Conversations</h3>
              <p className="text-muted">Chat history interface coming soon...</p>
            </div>
          </div>
        )
      case "tools":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">AI Tools</h1>
              <p className="text-muted">Specialized tools powered by Remy AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolsData.map((tool) => {
                const Icon = tool.icon
                return (
                  <div
                    key={tool.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-400 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                    </div>
                    <p className="text-muted">{tool.description}</p>
                  </div>
                )
              })}
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
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-violet-400 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-white">Remy AI</span>
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
