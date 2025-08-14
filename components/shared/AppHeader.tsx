"use client"

import { Menu } from "lucide-react"

interface AppHeaderProps {
  appName: string
  currentPageName: string
  onMenuClick: () => void
}

export function AppHeader({ appName, currentPageName, onMenuClick }: AppHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-white/5 backdrop-blur-xl border-b border-white/10 flex items-center px-4 z-30">
      <button onClick={onMenuClick} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white mr-4">
        <Menu className="w-4 h-4" />
      </button>
      <div className="flex items-center gap-2">
        
        
        <span className="text-white/70">{currentPageName}</span>
      </div>
    </div>
  )
}
