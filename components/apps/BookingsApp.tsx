"use client"

import { useState } from "react"
import {
  Calendar,
  Menu,
  Bell,
  MessageSquare,
  Grid,
  TrendingUp,
  TrendingDown,
  Info,
  Settings,
  BarChart,
  Book,
} from "react-feather"
import { AppSidebar } from "../shared/AppSidebar"

const BookingsApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart },
    { id: "bookings", label: "Bookings", icon: Book },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />
      case "bookings":
        return <div>Bookings Page</div>
      case "settings":
        return <div>Settings Page</div>
      default:
        return <div>Dashboard</div>
    }
  }

  const DashboardPage = () => (
    <div className="p-6 space-y-6">
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Bookings */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm">Total Bookings</h3>
            <div className="flex items-center text-red-400 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              183%
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">47</div>
          <div className="text-gray-500 text-xs">Since Custom</div>
        </div>

        {/* Total Successful Covers */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm">Total Successful Covers</h3>
            <div className="flex items-center text-red-400 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              292%
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">124</div>
          <div className="text-gray-500 text-xs">Since Custom</div>
        </div>

        {/* Average Party Size */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm">Average Party Size</h3>
            <div className="flex items-center text-green-400 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              38%
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">3.2</div>
          <div className="text-gray-500 text-xs">Since Custom</div>
        </div>

        {/* Successful Waitlist Entries */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm">Successful Waitlist Entries</h3>
            <div className="flex items-center text-red-400 text-xs">
              <TrendingDown className="w-3 h-3 mr-1" />
              200%
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">8</div>
          <div className="text-gray-500 text-xs">Since Custom</div>
        </div>

        {/* Successful Walk-In Entries */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm">Successful Walk-In Entries</h3>
            <div className="flex items-center text-green-400 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              100%
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">15</div>
          <div className="text-gray-500 text-xs">Since Custom</div>
        </div>

        {/* Best Rated Experience */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm">Best Rated Experience</h3>
            <div className="flex items-center text-green-400 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              38%
            </div>
          </div>
          <div className="text-xl font-bold text-white mb-1">Fine Dining</div>
          <div className="text-gray-500 text-xs">Since Custom</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                Total Bookings
                <Info className="w-4 h-4 text-gray-400" />
              </h3>
              <p className="text-gray-400 text-sm">Date Range: Aug 1, 2025 - Aug 14, 2025</p>
            </div>
            <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          </div>

          {/* Chart Area */}
          <div className="h-64 flex items-end justify-between px-4 border-b border-gray-700">
            {[0, 0, 0, 0, 0, 0, 0, 0, 12, 8, 15, 18, 0, 0].map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="bg-gradient-to-t from-cyan-400 to-teal-300 rounded-t-sm mb-2 transition-all hover:opacity-80"
                  style={{
                    height: `${Math.max(value * 10, 4)}px`,
                    width: "24px",
                  }}
                />
                <span className="text-xs text-gray-500 transform -rotate-45 origin-center">
                  {String(index).padStart(2, "0")}:00
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Side Metrics */}
        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <h3 className="text-white text-lg font-semibold mb-2">Total Covers</h3>
            <div className="text-3xl font-bold text-white mb-1">124</div>
            <div className="flex items-center text-red-400 text-sm">
              <TrendingDown className="w-4 h-4 mr-1" />
              292%
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <h3 className="text-white text-lg font-semibold mb-2">Covers per hour</h3>
            <div className="text-3xl font-bold text-white mb-1">8.7</div>
            <div className="flex items-center text-red-400 text-sm">
              <TrendingDown className="w-4 h-4 mr-1" />
              292%
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="h-screen bg-primary flex relative">
      <AppSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        appName="Bookings"
        appIcon={<Calendar className="w-4 h-4 text-white font-bold" />}
        appColor="from-blue-400 to-cyan-400"
        navigationItems={navigationItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onExitApp={() => console.log("Exit app")}
        onSwitchApp={() => console.log("Switch app")}
        onUserSettings={() => console.log("User settings")}
        onSignOut={() => console.log("Sign out")}
      />

      <div className="flex-1 flex flex-col">
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Menu className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-xl font-semibold text-white">
              {navigationItems.find((item) => item.id === currentPage)?.label || "Dashboard"}
            </h1>
            <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm">
              <option value="downtown">Downtown Branch</option>
              <option value="uptown">Uptown Branch</option>
              <option value="mall">Mall Location</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
              <MessageSquare className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Grid className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">{renderCurrentPage()}</div>
      </div>
    </div>
  )
}

export { BookingsApp }

export default BookingsApp
