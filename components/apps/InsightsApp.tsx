"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  FileText,
  Menu,
  X,
  LogOut,
  User,
  RotateCcw,
  Home,
  ShoppingCart,
  Star,
  Mail,
  Calendar,
  Building,
  Award,
  SlidersHorizontal,
  Settings,
  TrendingDown,
  TrendingUp,
} from "lucide-react"

const navigationItems = [
  { id: "dashboards", label: "Dashboards", icon: BarChart3, color: "text-blue-400" },
  { id: "reports", label: "Reports", icon: FileText, color: "text-blue-400" },
]

const dashboardSubPages = [
  { id: "main-dashboard", label: "Main Dashboard", icon: BarChart3 },
  { id: "order-dashboard", label: "Order Dashboard", icon: ShoppingCart },
  { id: "review-dashboard", label: "Review Dashboard", icon: Star },
  { id: "marketing-dashboard", label: "Marketing Dashboard", icon: Mail },
  { id: "events-dashboard", label: "Events Dashboard", icon: Calendar },
  { id: "branch-performance", label: "Branch Performance", icon: Building },
  { id: "brand-performance", label: "Brand Performance", icon: Award },
]

const reportsSubPages = [
  { id: "reports", label: "Reports" },
  { id: "generated-reports", label: "Generated Reports" },
]

const dashboardMetrics = [
  {
    title: "Total Bookings",
    value: "3",
    subtitle: "Since Last 30 days",
    change: "50%",
    trend: "down",
  },
  {
    title: "Total Successful Bookings",
    value: "2",
    subtitle: "Since Last 30 days",
    change: "50%",
    trend: "down",
  },
  {
    title: "Total Failed Bookings",
    value: "1",
    subtitle: "Since Last 30 days",
    change: "100%",
    trend: "up",
  },
  {
    title: "Total Successful Covers",
    value: "6",
    subtitle: "Since Last 30 days",
    change: "33%",
    trend: "down",
  },
  {
    title: "Successful Walk-In Covers",
    value: "0",
    subtitle: "Since Last 30 days",
    change: "",
    trend: null,
  },
  {
    title: "Successful Waitlist Covers",
    value: "3",
    subtitle: "Since Last 30 days",
    change: "33%",
    trend: "down",
  },
  {
    title: "Successful Reservations Covers",
    value: "3",
    subtitle: "Since Last 30 days",
    change: "33%",
    trend: "down",
  },
]

export function InsightsApp() {
  const [currentPage, setCurrentPage] = useState("dashboards")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dashboardSubPage, setDashboardSubPage] = useState("main-dashboard")
  const [reportsSubPage, setReportsSubPage] = useState("reports")

  const renderPageContent = () => {
    switch (currentPage) {
      case "dashboards":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Dashboards */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Dashboards</h3>
                <div className="space-y-1">
                  {dashboardSubPages.map((subPage) => {
                    const Icon = subPage.icon
                    return (
                      <button
                        key={subPage.id}
                        onClick={() => setDashboardSubPage(subPage.id)}
                        className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer flex items-center space-x-2 ${
                          dashboardSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">{subPage.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="flex-1 p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    {dashboardSubPages.find((p) => p.id === dashboardSubPage)?.label}
                  </h1>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    <Settings className="w-4 h-4 mr-2" />
                    Dashboard Cards
                  </Button>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {dashboardMetrics.map((metric, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-blue-400 text-sm font-medium mb-1">{metric.title}</h3>
                        <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                        <p className="text-gray-400 text-sm">{metric.subtitle}</p>
                      </div>
                      {metric.change && (
                        <div
                          className={`flex items-center text-sm ${
                            metric.trend === "up" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {metric.trend === "up" ? (
                            <TrendingUp className="w-4 h-4 mr-1" />
                          ) : (
                            <TrendingDown className="w-4 h-4 mr-1" />
                          )}
                          {metric.change}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-1">Total Covers</h3>
                      <p className="text-gray-400 text-sm">Date Range: Last 30 days</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-64 flex items-center justify-center border border-white/10 rounded-lg bg-white/5">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Chart visualization</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-white text-lg font-semibold mb-4">Summary</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-400">Total Covers</span>
                        <span className="text-white font-semibold">6</span>
                      </div>
                      <div className="flex items-center text-sm text-red-400">
                        <TrendingDown className="w-3 h-3 mr-1" />
                        33%
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-400">Covers per hour</span>
                        <span className="text-white font-semibold">0.0</span>
                      </div>
                      <div className="flex items-center text-sm text-red-400">
                        <TrendingDown className="w-3 h-3 mr-1" />
                        33%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "reports":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Reports */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Reports</h3>
                <div className="space-y-1">
                  {reportsSubPages.map((subPage) => (
                    <button
                      key={subPage.id}
                      onClick={() => setReportsSubPage(subPage.id)}
                      className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer ${
                        reportsSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
                      }`}
                    >
                      <span className="text-sm">{subPage.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">
                  {reportsSubPages.find((p) => p.id === reportsSubPage)?.label}
                </h1>
                <p className="text-muted">Generate and manage business reports</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Report Generation</h3>
                <p className="text-muted">Report generation tools coming soon...</p>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">
                {navigationItems.find((item) => item.id === currentPage)?.label}
              </h1>
              <p className="text-muted">Page content coming soon...</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <p className="text-muted">This page is under development...</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="h-screen bg-primary flex relative">
      {/* Overlay Sidebar */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)} />

          <div className="fixed left-0 top-0 h-full w-240 bg-white/5 backdrop-filter backdrop-blur-20 border-r border-white/10 z-50 transform transition-all duration-300 ease-in-out">
            {/* Sidebar Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white font-bold" />
                </div>
                <span className="text-lg font-semibold text-white">Insights</span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 p-5">
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id)
                        setSidebarOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-sm ${
                        currentPage === item.id
                          ? "bg-purple-500/10 text-purple-400 border-r-2 border-purple-400"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>

            <div className="p-5 border-t border-white/10">
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm">
                  <Home className="w-4 h-4" />
                  <span>Exit App</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm">
                  <RotateCcw className="w-4 h-4" />
                  <span>Switch App</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm">
                  <User className="w-4 h-4" />
                  <span>User Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm">
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="fixed top-0 left-0 right-0 h-14 bg-white/5 backdrop-blur-20 border-b border-white/10 flex items-center px-4 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white mr-4"
        >
          <Menu className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Insights</span>
          <span className="text-white/50">•</span>
          <span className="text-white/70">{navigationItems.find((item) => item.id === currentPage)?.label}</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto pt-14">{renderPageContent()}</div>
    </div>
  )
}
