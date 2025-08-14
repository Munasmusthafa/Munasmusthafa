"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  Users,
  Target,
  Mail,
  Zap,
  Globe,
  Search,
  SlidersHorizontal,
  Upload,
  Download,
  Columns,
  Star,
  ArrowUpDown,
  ExternalLink,
} from "lucide-react"
import { AppSidebar } from "@/components/shared/AppSidebar"
import { AppHeader } from "@/components/shared/AppHeader"

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "text-teal-400" },
  { id: "customers", label: "Guests/Customers", icon: Users, color: "text-teal-400" },
  { id: "segments", label: "Customer Segments", icon: Target, color: "text-teal-400" },
  { id: "marketing", label: "Marketing", icon: Mail, color: "text-teal-400" },
  { id: "online-presence", label: "Online Presence", icon: Globe, color: "text-teal-400" },
  { id: "automations", label: "Automations", icon: Zap, color: "text-teal-400", badge: "Coming Soon" },
]

const customersData = [
  {
    name: "Ruben",
    phone: "+971543429429",
    email: "ruben@resto.guru",
    tags: ["Seafood", "VIP", "Regular Customer"],
    createdAt: "Nov 16 2021, 5:14 PM",
    lastVisit: "Jul 28, 3:22 PM",
    visits: 8,
    rating: 3,
  },
  // ... existing customer data ...
]

export function CRMApp() {
  const [currentPage, setCurrentPage] = useState("customers")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [marketingSubPage, setMarketingSubPage] = useState("automated-campaigns")
  const [onlinePresenceSubPage, setOnlinePresenceSubPage] = useState("web-dashboard")
  const [restaurantPageSubPage, setRestaurantPageSubPage] = useState("general")

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
        ))}
      </div>
    )
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">CRM Dashboard</h1>
              <p className="text-muted">Customer insights and marketing performance overview</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Customer Overview</h3>
                <p className="text-muted">Dashboard content coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "customers":
        return (
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">Customers</h1>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by name or phone"
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
                />
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Columns className="w-4 h-4 mr-2" />
                  Customize Columns
                </Button>
              </div>
            </div>

            {/* Customers Table */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-sm font-medium text-gray-400 uppercase tracking-wider">
                <div className="col-span-2">NAME</div>
                <div className="col-span-2">TAGS</div>
                <div className="col-span-2">CREATED AT</div>
                <div className="col-span-2 flex items-center">
                  LAST VISIT
                  <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
                <div className="col-span-1">VISITS</div>
                <div className="col-span-2">RATING</div>
                <div className="col-span-1"></div>
              </div>

              {customersData.map((customer, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <div className="col-span-2">
                    <div>
                      <h3 className="text-white font-medium">{customer.name}</h3>
                      <p className="text-gray-400 text-sm">{customer.phone}</p>
                      {customer.email && <p className="text-gray-400 text-sm">{customer.email}</p>}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="flex flex-wrap gap-1">
                      {customer.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className={`text-xs ${
                            tag === "VIP"
                              ? "bg-purple-500/20 text-purple-400"
                              : tag === "Regular Customer"
                                ? "bg-amber-500/20 text-amber-400"
                                : tag === "Seafood"
                                  ? "bg-red-500/20 text-red-400"
                                  : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-400">{customer.createdAt}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-400">{customer.lastVisit}</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-white">{customer.visits}</span>
                  </div>
                  <div className="col-span-2">{renderStars(customer.rating)}</div>
                  <div className="col-span-1 flex justify-end">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
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
      <AppSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        appName="CRM & Marketing"
        appIcon={<Users className="w-4 h-4 text-white font-bold" />}
        appColor="from-teal-400 to-emerald-400"
        navigationItems={navigationItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onExitApp={() => console.log("Exit app")}
        onSwitchApp={() => console.log("Switch app")}
        onUserSettings={() => console.log("User settings")}
        onSignOut={() => console.log("Sign out")}
      />

      <AppHeader
        appName="CRM & Marketing"
        currentPageName={navigationItems.find((item) => item.id === currentPage)?.label || ""}
        onMenuClick={() => setSidebarOpen(true)}
      />

      <div className="flex-1 overflow-auto pt-14">{renderPageContent()}</div>
    </div>
  )
}
