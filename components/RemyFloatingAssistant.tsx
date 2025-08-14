"use client"

import type React from "react"

import { useState } from "react"
import { Bot, X, Send, Minimize2, Maximize2, BarChart3, Users, Calendar, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface RemySubPage {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const remySubPages: RemySubPage[] = [
  { id: "analytics", name: "Analytics", icon: BarChart3, color: "#9C27B0" },
  { id: "customers", name: "Customers", icon: Users, color: "#1DE9B6" },
  { id: "bookings", name: "Bookings", icon: Calendar, color: "#2196F3" },
  { id: "settings", name: "Settings", icon: Settings, color: "#9E9E9E" },
]

export function RemyFloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [activeSubPage, setActiveSubPage] = useState("analytics")
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    setIsMinimized(false)
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 md:bottom-28 right-4 md:right-6 z-50 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <Bot className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
        </button>
      )}

      {isOpen && !isFullScreen && (
        <div
          className={cn(
            "fixed bottom-20 md:bottom-28 right-4 md:right-6 z-50 w-80 md:w-96 bg-zinc-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-300",
            isMinimized ? "h-16" : "h-96",
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Remy AI</h3>
                <p className="text-xs text-white/60">Your restaurant assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleFullScreen}
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
              >
                <Maximize2 className="w-4 h-4 text-white/60" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
              >
                <Minimize2 className="w-4 h-4 text-white/60" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="flex-1 p-4 h-64 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-white">
                        Hi! I'm Remy, your AI restaurant assistant. I can help you with bookings, analytics, staff
                        questions, and more. What would you like to know?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Remy anything..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="w-8 h-8 bg-purple-500 hover:bg-purple-600 disabled:bg-white/10 disabled:text-white/30 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Full Screen Mode */}
      {isOpen && isFullScreen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl">
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-64 bg-zinc-900/90 backdrop-blur-xl border-r border-white/10 flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Remy AI</h2>
                    <p className="text-xs text-white/60">Restaurant Assistant</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1 p-4">
                <nav className="space-y-2">
                  {remySubPages.map((page) => {
                    const Icon = page.icon
                    const isActive = activeSubPage === page.id
                    return (
                      <button
                        key={page.id}
                        onClick={() => setActiveSubPage(page.id)}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-left",
                          isActive
                            ? "bg-white/20 text-white border border-white/20"
                            : "text-white/70 hover:text-white hover:bg-white/10",
                        )}
                      >
                        <Icon className="w-5 h-5" style={{ color: isActive ? "#ffffff" : page.color }} />
                        <span className="font-medium">{page.name}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10">
                <button
                  onClick={toggleFullScreen}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Minimize2 className="w-5 h-5" />
                  <span className="font-medium">Minimize</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 mt-2"
                >
                  <X className="w-5 h-5" />
                  <span className="font-medium">Close</span>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Content Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-white capitalize">{activeSubPage}</h1>
                    <p className="text-white/60 mt-1">AI-powered insights and assistance</p>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                  {activeSubPage === "analytics" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                          <h3 className="text-white font-semibold mb-2">Revenue Insights</h3>
                          <p className="text-white/60 text-sm">AI analysis of your revenue patterns and trends</p>
                        </div>
                        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                          <h3 className="text-white font-semibold mb-2">Peak Hours</h3>
                          <p className="text-white/60 text-sm">Optimal staffing recommendations based on data</p>
                        </div>
                        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                          <h3 className="text-white font-semibold mb-2">Menu Performance</h3>
                          <p className="text-white/60 text-sm">Which dishes are performing best and why</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSubPage === "customers" && (
                    <div className="space-y-6">
                      <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                        <h3 className="text-white font-semibold mb-4">Customer Insights</h3>
                        <p className="text-white/60">AI-powered customer behavior analysis and recommendations</p>
                      </div>
                    </div>
                  )}

                  {activeSubPage === "bookings" && (
                    <div className="space-y-6">
                      <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                        <h3 className="text-white font-semibold mb-4">Booking Intelligence</h3>
                        <p className="text-white/60">Smart booking predictions and optimization suggestions</p>
                      </div>
                    </div>
                  )}

                  {activeSubPage === "settings" && (
                    <div className="space-y-6">
                      <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                        <h3 className="text-white font-semibold mb-4">AI Settings</h3>
                        <p className="text-white/60">Configure your AI assistant preferences and capabilities</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Chat Input at Bottom */}
              <div className="p-6 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask Remy anything about your restaurant..."
                      className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="w-12 h-12 bg-purple-500 hover:bg-purple-600 disabled:bg-white/10 disabled:text-white/30 rounded-xl flex items-center justify-center transition-colors duration-200"
                    >
                      <Send className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
