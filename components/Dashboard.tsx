"use client"
import { useAuth } from "../contexts/AuthContext"
import type React from "react"

import type { AppId } from "./AppRouter"
import {
  Calendar,
  Clock,
  Users,
  Star,
  BarChart3,
  UtensilsCrossed,
  UserCheck,
  MessageCircle,
  Settings,
  CreditCard,
  ArrowRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

interface AppCardProps {
  id: AppId
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  insight?: {
    value: string | number
    label: string
    trend?: "up" | "down"
    percentage?: string
  }
  cta: string
  onAppChange: (appId: AppId) => void
}

function AppCard({ id, name, description, icon: Icon, color, insight, cta, onAppChange }: AppCardProps) {
  return (
    <button
      onClick={() => onAppChange(id)}
      className="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl text-left w-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}20`, color }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-sm text-white/60 leading-relaxed mb-4">{description}</p>

      {insight && (
        <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">{insight.value}</div>
              <div className="text-xs text-white/60">{insight.label}</div>
            </div>
            {insight.trend && insight.percentage && (
              <div
                className={`flex items-center gap-1 text-xs ${
                  insight.trend === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {insight.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {insight.percentage}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="text-sm font-medium" style={{ color }}>
        {cta} →
      </div>
    </button>
  )
}

interface DashboardProps {
  onAppChange?: (appId: AppId) => void
}

export function Dashboard({ onAppChange }: DashboardProps) {
  const { user } = useAuth()

  const handleAppChange = (appId: AppId) => {
    onAppChange?.(appId)
  }

  const availableApps = [
    {
      id: "bookings" as AppId,
      name: "Bookings",
      description: "Manage reservations, calendar slots, and table assignments",
      icon: Calendar,
      color: "#2196F3",
      insight: { value: 47, label: "Bookings Today", trend: "up" as const, percentage: "12%" },
      cta: "View Details",
      roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "waitlist" as AppId,
      name: "Waitlist",
      description: "Handle walk-ins, queue management, and real-time updates",
      icon: Clock,
      color: "#FF9800",
      insight: { value: 8, label: "Guests in Waitlist", trend: "down" as const, percentage: "5%" },
      cta: "Manage Queue",
      roles: ["host", "manager", "area-manager", "franchisee"],
    },
    {
      id: "crm" as AppId,
      name: "CRM & Marketing",
      description: "Customer data, campaigns, segments, and online presence",
      icon: Users,
      color: "#1DE9B6",
      insight: { value: "2.4k", label: "Active Customers", trend: "up" as const, percentage: "8%" },
      cta: "View Campaigns",
      roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner", "group-marketing-director"],
    },
    {
      id: "reviews" as AppId,
      name: "Reviews",
      description: "Aggregate feedback, responses, and reputation insights",
      icon: Star,
      color: "#FFC107",
      insight: { value: 3, label: "New Reviews", trend: "up" as const, percentage: "NEW" },
      cta: "Respond Now",
      roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "insights" as AppId,
      name: "Insights",
      description: "Analytics dashboards, reports, and performance comparisons",
      icon: BarChart3,
      color: "#9C27B0",
      insight: { value: "₹45k", label: "Today's Revenue", trend: "up" as const, percentage: "15%" },
      cta: "View Reports",
      roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "ordering" as AppId,
      name: "Ordering & Menu",
      description: "Menu items, modifiers, pricing, and order management",
      icon: UtensilsCrossed,
      color: "#4CAF50",
      insight: { value: 156, label: "Orders Today", trend: "up" as const, percentage: "22%" },
      cta: "Manage Menu",
      roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "users" as AppId,
      name: "Users",
      description: "Staff access, roles, permissions, and team management",
      icon: UserCheck,
      color: "#607D8B",
      insight: { value: 12, label: "Active Staff", trend: "up" as const, percentage: "2 new" },
      cta: "Manage Team",
      roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "communication" as AppId,
      name: "Communication Hub",
      description: "In-app messaging, system alerts, and team chat",
      icon: MessageCircle,
      color: "#1DE9B6",
      insight: { value: 5, label: "Unread Messages", trend: "up" as const, percentage: "NEW" },
      cta: "Open Chat",
      roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "settings" as AppId,
      name: "Settings",
      description: "Business settings, integrations, system tools, and advanced options",
      icon: Settings,
      color: "#9E9E9E",
      insight: { value: "2h 30m", label: "Until Shift Change" },
      cta: "Configure",
      roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "billing" as AppId,
      name: "Billing",
      description: "Subscription management, invoices, and usage tracking",
      icon: CreditCard,
      color: "#FF5722",
      insight: { value: "₹2,499", label: "Monthly Plan", trend: "up" as const, percentage: "Active" },
      cta: "View Invoice",
      roles: ["franchisee", "owner"],
    },
  ].filter((app) => user && app.roles.includes(user.role))

  return (
    <main className="px-4 md:px-6 py-6 md:py-8 pb-32 min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900/50 to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-in slide-in-from-top-5 duration-500">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                Hi, {user?.name?.split(" ")[0] || "User"}! 👋
              </h1>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Downtown Branch
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Shift 1 Active
                </span>
                <span className="flex items-center gap-2 text-teal-400 font-medium">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  08:02 PM
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => handleAppChange("bookings")}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              + New Booking
            </button>
            <button
              onClick={() => handleAppChange("waitlist")}
              className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              📋 Add to Waitlist
            </button>
            <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
              🚫 Block Table
            </button>
            <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
              📅 Create Event
            </button>
            <button
              onClick={() => handleAppChange("crm")}
              className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              📧 Send Campaign
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in-50 duration-700">
          {availableApps.map((app, index) => (
            <div
              key={app.id}
              className="animate-in slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AppCard
                id={app.id}
                name={app.name}
                description={app.description}
                icon={app.icon}
                color={app.color}
                insight={app.insight}
                cta={app.cta}
                onAppChange={handleAppChange}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
