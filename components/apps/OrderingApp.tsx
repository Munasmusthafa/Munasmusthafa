"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  ShoppingCart,
  History,
  MenuIcon,
  Percent,
  Settings,
  Menu,
  X,
  LogOut,
  User,
  RotateCcw,
  Home,
  UtensilsCrossed,
  Package,
  DollarSign,
  Plus,
  Search,
  List,
  Grid3X3,
  MoreHorizontal,
} from "lucide-react"

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "text-orange-400" },
  { id: "orders", label: "Orders", icon: ShoppingCart, color: "text-orange-400" },
  { id: "order-history", label: "Order History", icon: History, color: "text-orange-400" },
  { id: "menu", label: "Menu", icon: MenuIcon, color: "text-orange-400" },
  { id: "discounts", label: "Discounts", icon: Percent, color: "text-orange-400" },
  { id: "settings", label: "Settings", icon: Settings, color: "text-orange-400" },
]

const menuSubPages = [
  { id: "menus", label: "Menus", icon: UtensilsCrossed },
  { id: "all-items", label: "All Items", icon: Package },
  { id: "modifiers", label: "Modifiers", icon: Settings },
  { id: "taxes", label: "Taxes", icon: DollarSign },
]

const settingsSubPages = [
  { id: "online-orders", label: "Online Orders Settings" },
  { id: "delivery-hours", label: "Delivery Hours" },
  { id: "notifications", label: "Notifications" },
  { id: "message-templates", label: "Message Templates" },
]

const menusData = [
  {
    name: "Deliveryss",
    datesActive: "Jul 9, 2017 - Jul 10, 2025",
    status: "Active",
    timesActive: "5:14 - 6:14 PM",
    categories: 1,
    menuItems: 0,
  },
  {
    name: "Delivery 2",
    datesActive: "Aug 6 - Sep 10, 2025",
    status: "Active",
    timesActive: "2:09 - 7:09 PM",
    categories: 10,
    menuItems: 2,
  },
  {
    name: "Imported Menu",
    datesActive: "Every Day",
    status: "Active",
    timesActive: "All Day",
    categories: 9,
    menuItems: 20,
  },
]

export function OrderingApp() {
  const [currentPage, setCurrentPage] = useState("menu")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [menuSubPage, setMenuSubPage] = useState("menus")
  const [settingsSubPage, setSettingsSubPage] = useState("online-orders")

  const renderPageContent = () => {
    switch (currentPage) {
      case "menu":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Menu */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Menu Management</h3>
                <div className="space-y-1">
                  {menuSubPages.map((subPage) => {
                    const Icon = subPage.icon
                    return (
                      <button
                        key={subPage.id}
                        onClick={() => setMenuSubPage(subPage.id)}
                        className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer flex items-center space-x-2 ${
                          menuSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-orange-400" />
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
                  <h1 className="text-2xl font-bold text-white mb-2">Menus</h1>
                </div>
                <Button className="bg-white text-black hover:bg-gray-100">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Menu
                </Button>
              </div>

              {/* Search and View Options */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by name"
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
                  />
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <List className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Menus Table */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-sm font-medium text-gray-400 uppercase tracking-wider">
                  <div className="col-span-2">NAME</div>
                  <div className="col-span-3">DATES ACTIVE</div>
                  <div className="col-span-2">STATUS</div>
                  <div className="col-span-2">TIMES ACTIVE</div>
                  <div className="col-span-1">CATEGORIES</div>
                  <div className="col-span-1">MENU ITEMS</div>
                  <div className="col-span-1"></div>
                </div>

                {menusData.map((menu, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <div className="col-span-2">
                      <h3 className="text-white font-medium">{menu.name}</h3>
                    </div>
                    <div className="col-span-3">
                      <span className="text-gray-400">{menu.datesActive}</span>
                    </div>
                    <div className="col-span-2">
                      <Badge className="bg-green-500/20 text-green-400">{menu.status}</Badge>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-400">{menu.timesActive}</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-white">{menu.categories}</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-white">{menu.menuItems}</span>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case "dashboard":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Ordering Dashboard</h1>
              <p className="text-muted">Real-time order management and kitchen operations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Order Overview</h3>
                <p className="text-muted">Dashboard content coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "orders":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Active Orders</h1>
              <p className="text-muted">Manage current orders and kitchen workflow</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Order Management</h3>
              <p className="text-muted">Order management interface coming soon...</p>
            </div>
          </div>
        )
      case "order-history":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Order History</h1>
              <p className="text-muted">View past orders and transaction history</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Historical Orders</h3>
              <p className="text-muted">Order history interface coming soon...</p>
            </div>
          </div>
        )
      case "discounts":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Discounts & Promotions</h1>
              <p className="text-muted">Manage promotional offers and discount codes</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Promotion Management</h3>
              <p className="text-muted">Discount management interface coming soon...</p>
            </div>
          </div>
        )
      case "settings":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Settings */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Settings</h3>
                <div className="space-y-1">
                  {settingsSubPages.map((subPage) => (
                    <button
                      key={subPage.id}
                      onClick={() => setSettingsSubPage(subPage.id)}
                      className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer ${
                        settingsSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
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
                  {settingsSubPages.find((p) => p.id === settingsSubPage)?.label}
                </h1>
                <p className="text-muted">Configure ordering system preferences</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Configuration</h3>
                <p className="text-muted">Settings configuration coming soon...</p>
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
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-white font-bold" />
                </div>
                <span className="text-lg font-semibold text-white">Ordering</span>
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
                          ? "bg-green-500/10 text-green-400 border-r-2 border-green-400"
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
          <span className="text-white font-medium">Ordering</span>
          <span className="text-white/50">•</span>
          <span className="text-white/70">{navigationItems.find((item) => item.id === currentPage)?.label}</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto pt-14">{renderPageContent()}</div>
    </div>
  )
}
