"use client"

import { Bell, ChevronDown, Search, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "../contexts/AuthContext"
import type { AppId } from "./AppRouter"

interface TopBarProps {
  currentApp: AppId
  onAppChange: (appId: AppId) => void
}

const appTitles = {
  dashboard: "Dashboard",
  bookings: "Bookings",
  waitlist: "Waitlist",
  crm: "CRM & Marketing",
  reviews: "Reviews",
  remy: "Remy AI",
  insights: "Insights",
  ordering: "Ordering & Menu",
  users: "Users",
  communication: "Communication Hub",
  utilities: "Utilities & Tools",
  settings: "Settings",
  web: "Web & Widgets",
  billing: "Billing",
}

export function TopBar({ currentApp, onAppChange }: TopBarProps) {
  const { user, logout } = useAuth()

  return (
    <div className="h-16 bg-secondary border-b border-default flex items-center justify-between px-6 sticky top-0 z-40 backdrop-blur-xl">
      <div className="flex items-center space-x-6">
        <button
          onClick={() => onAppChange("dashboard")}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-quaternary to-tertiary rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-lg font-semibold text-primary">R</span>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-primary">Resto Guru OS</h1>
            <p className="text-xs text-faint">{appTitles[currentApp] || "Dashboard"}</p>
          </div>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="btn-secondary flex items-center">
              <span className="text-sm font-medium">Downtown Location</span>
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-quaternary border-hover min-w-[200px] shadow-xl">
            <DropdownMenuItem className="text-primary hover:bg-tertiary focus:bg-tertiary">
              <div className="flex items-center justify-between w-full">
                <span>Downtown</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Active</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-tertiary focus:bg-tertiary">Mall Plaza</DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-tertiary focus:bg-tertiary">Airport</DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-tertiary focus:bg-tertiary">Beachfront</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-faint" />
          <Input placeholder="Search..." className="input pl-10 w-64 bg-quaternary border-transparent" />
        </div>

        <button className="btn-secondary relative p-2">
          <Bell className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 border-2 border-secondary rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">3</span>
          </div>
        </button>

        <button className="btn-secondary p-2">
          <Settings className="w-5 h-5" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="btn-secondary flex items-center space-x-3 px-3 py-2">
              <Avatar className="w-8 h-8 border-2 border-default">
                <AvatarImage src={user?.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-quaternary text-primary text-sm font-medium">
                  {user?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <div className="text-sm font-medium text-primary">{user?.name}</div>
                <div className="text-xs text-muted capitalize">{user?.role?.replace("-", " ")}</div>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-quaternary border-hover min-w-[200px] shadow-xl">
            <DropdownMenuItem className="text-primary hover:bg-tertiary focus:bg-tertiary">
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-tertiary focus:bg-tertiary">
              Account Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-tertiary focus:bg-tertiary">
              Preferences
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-default" />
            <DropdownMenuItem className="text-red-400 hover:bg-red-500/10 focus:bg-red-500/10" onClick={logout}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
