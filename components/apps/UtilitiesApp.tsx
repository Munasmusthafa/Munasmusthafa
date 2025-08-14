"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Zap,
  Link,
  FolderOpen,
  Download,
  FileText,
  Smartphone,
  Menu,
  X,
  LogOut,
  User,
  RotateCcw,
  Home,
  Play,
  Archive,
  Plus,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
} from "lucide-react"

const navigationItems = [
  { id: "automations", label: "Automations", icon: Zap, color: "text-gray-400" },
  { id: "referral-links", label: "Referral Links", icon: Link, color: "text-gray-400" },
  { id: "file-manager", label: "File Manager", icon: FolderOpen, color: "text-gray-400" },
  { id: "downloads", label: "Downloads", icon: Download, color: "text-gray-400" },
  { id: "forms", label: "Forms", icon: FileText, color: "text-gray-400" },
  { id: "devices", label: "Devices", icon: Smartphone, color: "text-gray-400", badge: "Coming Soon" },
]

const automationsSubPages = [
  { id: "active-automations", label: "Active Automations", icon: Play },
  { id: "library", label: "Library", icon: Archive },
]

const formsData = [
  {
    name: "Reservation template 222",
    description: "Template form for reservations",
    type: "Custom",
    tags: ["Bookings"],
    added: "Jul 1st, 5:24pm",
  },
  {
    name: "Reservation template",
    description: "Template form for reservations",
    type: "Custom",
    tags: [],
    added: "Jun 17th, 1:42pm",
  },
  {
    name: "Review template test",
    description: "Template form for reviews",
    type: "Custom",
    tags: [],
    added: "Apr 22nd, 11:17...",
  },
  {
    name: "Review Form",
    description: "Default form for reviews",
    type: "System",
    tags: ["Feedback"],
    added: "Mar 15th, 11:27...",
  },
  {
    name: "Review template",
    description: "Template form for reviews",
    type: "Custom",
    tags: [],
    added: "Mar 10th, 6:54pm",
  },
  {
    name: "Waitlist Form - Copy",
    description: "Form for waitlist on RP",
    type: "Custom",
    tags: ["Waitlist"],
    added: "Mar 3rd, 2:50pm",
  },
  {
    name: "Widget Form",
    description: "Form for widgets",
    type: "Custom",
    tags: ["Widgets"],
    added: "Feb 28th, 4:15pm",
  },
]

export function UtilitiesApp() {
  const [currentPage, setCurrentPage] = useState("forms")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [automationsSubPage, setAutomationsSubPage] = useState("active-automations")

  const renderPageContent = () => {
    switch (currentPage) {
      case "forms":
        return (
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">Forms</h1>
                <p className="text-gray-400">Create forms to collect information from your customers.</p>
              </div>
              <Button className="bg-white text-black hover:bg-gray-100">
                <Plus className="w-4 h-4 mr-2" />
                Create Form
              </Button>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center space-x-6 mb-6">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg text-white">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white">
                <FileText className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search"
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
                />
              </div>
              <Button variant="outline" className="ml-4 border-white/20 text-white hover:bg-white/10 bg-transparent">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Forms Table */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-sm font-medium text-gray-400 uppercase tracking-wider">
                <div className="col-span-4">NAME</div>
                <div className="col-span-2">TYPE</div>
                <div className="col-span-3">ADDED</div>
                <div className="col-span-3"></div>
              </div>

              {formsData.map((form, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <div className="col-span-4">
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-white font-medium">{form.name}</h3>
                          {form.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              className={`text-xs ${
                                tag === "Bookings"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : tag === "Feedback"
                                    ? "bg-amber-500/20 text-amber-400"
                                    : tag === "Waitlist"
                                      ? "bg-green-500/20 text-green-400"
                                      : tag === "Widgets"
                                        ? "bg-purple-500/20 text-purple-400"
                                        : "bg-gray-500/20 text-gray-400"
                              }`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{form.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Badge
                      className={`${
                        form.type === "System" ? "bg-amber-500/20 text-amber-400" : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {form.type}
                    </Badge>
                  </div>
                  <div className="col-span-3">
                    <span className="text-gray-400">{form.added}</span>
                  </div>
                  <div className="col-span-3 flex justify-end">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "automations":
        return (
          <div className="flex h-full">
            {/* Secondary Sidebar for Automations */}
            <div className="w-64 bg-secondary border-r border-default">
              <div className="p-4">
                <h3 className="text-sm font-medium text-disabled uppercase tracking-wider mb-4">Automations</h3>
                <div className="space-y-1">
                  {automationsSubPages.map((subPage) => {
                    const Icon = subPage.icon
                    return (
                      <button
                        key={subPage.id}
                        onClick={() => setAutomationsSubPage(subPage.id)}
                        className={`w-full text-left p-2 rounded hover:bg-tertiary cursor-pointer flex items-center space-x-2 ${
                          automationsSubPage === subPage.id ? "bg-tertiary text-white" : "text-secondary"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-gray-400" />
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
                  {automationsSubPages.find((p) => p.id === automationsSubPage)?.label}
                </h1>
                <p className="text-muted">Workflow automation and process management</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Automation Engine</h3>
                <p className="text-muted">Automation management coming soon...</p>
              </div>
            </div>
          </div>
        )
      // ... existing code for other cases ...
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
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)} />

          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-64 bg-secondary border-r border-default z-50 transform transition-transform duration-300">
            <div className="p-4">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-slate-400 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-white">Utilities</span>
                </div>
                <Button onClick={() => setSidebarOpen(false)} className="btn-secondary p-2">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id)
                        setSidebarOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        currentPage === item.id
                          ? "bg-tertiary text-white"
                          : "text-muted hover:text-secondary hover:bg-tertiary/50"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${item.color}`} />
                      <div className="flex items-center justify-between w-full">
                        <span>{item.label}</span>
                        {item.badge && <Badge className="bg-amber-500/20 text-amber-400 text-xs">{item.badge}</Badge>}
                      </div>
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
                  Exit App
                </Button>
                <Button className="w-full btn-secondary justify-start">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Switch App
                </Button>
                <Button className="w-full btn-secondary justify-start">
                  <User className="w-4 h-4 mr-2" />
                  User Settings
                </Button>
                <Button className="w-full btn-secondary justify-start">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Menu Button */}
      <Button onClick={() => setSidebarOpen(true)} className="fixed top-4 left-4 z-30 btn-secondary p-2">
        <Menu className="w-4 h-4" />
      </Button>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{renderPageContent()}</div>
    </div>
  )
}
