"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  CreditCard,
  FileText,
  Settings,
  Receipt,
  Menu,
  X,
  LogOut,
  User,
  RotateCcw,
  Home,
  DollarSign,
} from "lucide-react"

const navigationItems = [
  { id: "overview", label: "Overview", icon: BarChart3, color: "text-emerald-400" },
  { id: "subscriptions", label: "Subscriptions", icon: CreditCard, color: "text-emerald-400" },
  { id: "invoices", label: "Invoices", icon: FileText, color: "text-emerald-400" },
  { id: "settings", label: "Settings", icon: Settings, color: "text-emerald-400" },
  { id: "transactions", label: "Transactions", icon: Receipt, color: "text-emerald-400" },
]

const invoicesSubPages = [
  { id: "invoices", label: "Invoices", icon: FileText },
  { id: "payments", label: "Payments", icon: DollarSign },
]

const settingsSubPages = [
  { id: "billing-details", label: "Billing Details" },
  { id: "payment-integrations", label: "Payment Integrations", badge: "Coming Soon" },
]

export function BillingApp() {
  const [currentPage, setCurrentPage] = useState("overview")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const [invoicesSubPage, setInvoicesSubPage] = useState("invoices")
  const [settingsSubPage, setSettingsSubPage] = useState("billing-details")

  const renderPageContent = () => {
    switch (currentPage) {
      case "overview":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Billing Overview</h1>
              <p className="text-muted">Subscription status and billing summary</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Current Plan</h3>
                <p className="text-muted">Billing overview coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "subscriptions":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Subscriptions</h1>
              <p className="text-muted">Manage your subscription plans and billing cycles</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Active Subscriptions</h3>
              <p className="text-muted">Subscription management coming soon...</p>
            </div>
          </div>
        )
      case "invoices":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Invoices */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Invoices & Payments</h3>
                <div className="space-y-1">
                  {invoicesSubPages.map((subPage) => {
                    const Icon = subPage.icon
                    return (
                      <button
                        key={subPage.id}
                        onClick={() => setInvoicesSubPage(subPage.id)}
                        className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer flex items-center space-x-2 ${
                          invoicesSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm">{subPage.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">
                  {invoicesSubPages.find((p) => p.id === invoicesSubPage)?.label}
                </h1>
                <p className="text-muted">View and manage billing documents</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Billing History</h3>
                <p className="text-muted">Invoice management coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "settings":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Settings */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Billing Settings</h3>
                <div className="space-y-1">
                  {settingsSubPages.map((subPage) => (
                    <button
                      key={subPage.id}
                      onClick={() => setSettingsSubPage(subPage.id)}
                      className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer flex items-center justify-between ${
                        settingsSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
                      }`}
                    >
                      <span className="text-sm">{subPage.label}</span>
                      {subPage.badge && (
                        <Badge className="bg-amber-500/20 text-amber-400 text-xs">{subPage.badge}</Badge>
                      )}
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
                <p className="text-muted">Configure billing preferences and payment methods</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Configuration</h3>
                <p className="text-muted">Billing settings coming soon...</p>
              </div>
            </div>
          </div>
        )
      case "transactions":
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Transaction History</h1>
              <p className="text-muted">View all billing transactions and payment history</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Payment History</h3>
              <p className="text-muted">Transaction history coming soon...</p>
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
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-white">Billing</span>
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
