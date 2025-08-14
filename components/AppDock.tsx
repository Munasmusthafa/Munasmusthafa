"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useAuth } from "../contexts/AuthContext"
import { cn } from "@/lib/utils"
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
  Home,
} from "lucide-react"

const appIcons = {
  dashboard: Home,
  bookings: Calendar,
  waitlist: Clock,
  crm: Users,
  reviews: Star,
  insights: BarChart3,
  ordering: UtensilsCrossed,
  users: UserCheck,
  communication: MessageCircle,
  settings: Settings,
  billing: CreditCard,
}

interface AppDockProps {
  currentApp: AppId
  onAppChange: (appId: AppId) => void
}

export function AppDock({ currentApp, onAppChange }: AppDockProps) {
  const { user } = useAuth()

  const availableApps = [
    {
      id: "dashboard",
      name: "Home",
      color: "#4CAF50",
      roles: [
        "host",
        "manager",
        "area-manager",
        "franchisee",
        "brand-manager",
        "owner",
        "group-marketing-director",
        "ops-director",
      ],
    },
    {
      id: "bookings",
      name: "Bookings",
      color: "#2196F3",
      badge: 12,
      roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "waitlist",
      name: "Waitlist",
      color: "#FF9800",
      badge: 8,
      roles: ["host", "manager", "area-manager", "franchisee"],
    },
    {
      id: "crm",
      name: "CRM",
      color: "#1DE9B6",
      roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner", "group-marketing-director"],
    },
    {
      id: "reviews",
      name: "Reviews",
      color: "#FFC107",
      badge: 3,
      roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "insights",
      name: "Insights",
      color: "#9C27B0",
      roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "ordering",
      name: "Ordering",
      color: "#4CAF50",
      roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "users",
      name: "Users",
      color: "#607D8B",
      roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "communication",
      name: "Chat",
      color: "#1DE9B6",
      badge: 5,
      roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "settings",
      name: "Settings",
      color: "#9E9E9E",
      roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
    },
    {
      id: "billing",
      name: "Billing",
      color: "#FF5722",
      roles: ["franchisee", "owner"],
    },
  ].filter((app) => user && app.roles.includes(user.role))

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-2xl">
        <TooltipProvider>
          <div className="flex items-center justify-center space-x-2">
            {availableApps.map((app) => {
              const IconComponent = appIcons[app.id as keyof typeof appIcons]
              const isActive = currentApp === app.id

              return (
                <Tooltip key={app.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={cn(
                        "relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 group",
                        isActive
                          ? "bg-white/20 shadow-lg scale-110 border border-white/30"
                          : "hover:bg-white/10 active:scale-95 border border-transparent",
                      )}
                      onClick={() => onAppChange(app.id as AppId)}
                    >
                      <div className="relative">
                        <IconComponent
                          className="w-5 h-5 transition-colors duration-200"
                          style={{ color: isActive ? "#ffffff" : app.color }}
                        />
                        {app.badge && (
                          <div className="absolute -top-1 -right-1 min-w-[16px] h-4 bg-red-500 border border-zinc-900 rounded-full flex items-center justify-center">
                            <span className="text-[9px] font-bold text-white px-1">
                              {app.badge > 99 ? "99+" : app.badge}
                            </span>
                          </div>
                        )}
                      </div>
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-zinc-800/90 backdrop-blur-xl border-zinc-700 text-white shadow-xl"
                    sideOffset={12}
                  >
                    <div className="text-center">
                      <p className="font-medium text-sm">{app.name}</p>
                      {app.badge && <p className="text-xs text-gray-400 mt-1">{app.badge} pending</p>}
                    </div>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </div>
        </TooltipProvider>
      </div>
    </div>
  )
}
