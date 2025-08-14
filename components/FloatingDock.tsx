"use client"

import { useState, useEffect } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { mockApps } from "../data/mockData"
import { useAuth } from "../contexts/AuthContext"
import { cn } from "@/lib/utils"
import type { AppId } from "./AppRouter"
import {
  Calendar,
  Clock,
  Users,
  Star,
  Bot,
  BarChart3,
  UtensilsCrossed,
  UserCheck,
  MessageCircle,
  Settings,
  Globe,
  CreditCard,
  Wrench,
  Home,
  ChevronUp,
  ChevronDown,
} from "lucide-react"

const appIcons = {
  dashboard: Home,
  bookings: Calendar,
  waitlist: Clock,
  crm: Users,
  reviews: Star,
  remy: Bot,
  insights: BarChart3,
  ordering: UtensilsCrossed,
  users: UserCheck,
  communication: MessageCircle,
  utilities: Wrench,
  settings: Settings,
  web: Globe,
  billing: CreditCard,
}

interface FloatingDockProps {
  currentApp: AppId
  onAppChange: (appId: AppId) => void
}

export function FloatingDock({ currentApp, onAppChange }: FloatingDockProps) {
  const { user } = useAuth()
  const [isExpanded, setIsExpanded] = useState(false)
  const [autoHideTimer, setAutoHideTimer] = useState<NodeJS.Timeout | null>(null)

  const availableApps = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: "🏠",
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
    ...mockApps,
  ].filter((app) => user && app.roles.includes(user.role))

  useEffect(() => {
    if (isExpanded) {
      if (autoHideTimer) {
        clearTimeout(autoHideTimer)
      }
      const timer = setTimeout(() => {
        setIsExpanded(false)
      }, 3000)
      setAutoHideTimer(timer)
    }
    return () => {
      if (autoHideTimer) {
        clearTimeout(autoHideTimer)
      }
    }
  }, [isExpanded])

  const handleMouseEnter = () => {
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    if (autoHideTimer) {
      clearTimeout(autoHideTimer)
    }
    const timer = setTimeout(() => {
      setIsExpanded(false)
    }, 1000)
    setAutoHideTimer(timer)
  }

  const handleAppClick = (appId: AppId) => {
    onAppChange(appId)
    setIsExpanded(false)
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <div
        className={cn(
          "backdrop-blur-xl border border-default rounded-2xl shadow-2xl bg-zinc-900/90 transition-all duration-300 ease-in-out",
          isExpanded ? "p-3" : "p-2",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <TooltipProvider>
          {!isExpanded ? (
            <button
              className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10 text-white"
              onClick={() => setIsExpanded(true)}
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          ) : (
            <div className="flex flex-col space-y-2">
              {/* Collapse button */}
              <button
                className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10 text-white self-center"
                onClick={() => setIsExpanded(false)}
              >
                <ChevronDown className="w-6 h-6" />
              </button>

              {/* App icons */}
              <div className="flex flex-col space-y-1 max-h-[60vh] overflow-y-auto scrollbar-hide">
                {availableApps.map((app) => {
                  const IconComponent = appIcons[app.id as keyof typeof appIcons]
                  const isActive = currentApp === app.id

                  return (
                    <Tooltip key={app.id}>
                      <TooltipTrigger asChild>
                        <button
                          className={cn(
                            "relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110",
                            isActive ? "bg-white/20 shadow-lg scale-110" : "hover:bg-white/10",
                          )}
                          onClick={() => handleAppClick(app.id as AppId)}
                          style={{ color: isActive ? "#ffffff" : app.color }}
                        >
                          <IconComponent className="w-6 h-6" />
                          {app.badge && (
                            <div className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 border-2 border-gray-900 rounded-full flex items-center justify-center">
                              <span className="text-[10px] font-bold text-white px-1">
                                {app.badge > 99 ? "99+" : app.badge}
                              </span>
                            </div>
                          )}
                          {isActive && (
                            <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-full" />
                          )}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="left"
                        className="bg-gray-800 border-gray-700 text-white shadow-xl"
                        sideOffset={16}
                      >
                        <div className="text-center">
                          <p className="font-medium">{app.name}</p>
                          {app.badge && <p className="text-xs text-gray-400 mt-1">{app.badge} pending</p>}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          )}
        </TooltipProvider>
      </div>
    </div>
  )
}
