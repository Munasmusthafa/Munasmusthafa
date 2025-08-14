"use client"

import { Button } from "@/components/ui/button"
import { Clock, Plus, MessageSquare } from "lucide-react"

export function LiveWaitlistWidget() {
  const waitlistData = [
    { id: 1, name: "Johnson Party", size: 4, wait: 25, status: "waiting", isVip: false },
    { id: 2, name: "Smith Family", size: 6, wait: 35, status: "waiting", isVip: true },
    { id: 3, name: "Davis Couple", size: 2, wait: 15, status: "seating", isVip: false },
    { id: 4, name: "Wilson Group", size: 8, wait: 45, status: "waiting", isVip: false },
  ]

  const stats = {
    partiesWaiting: 12,
    avgWaitTime: 28,
    addedToday: 45,
    seatedToday: 38,
  }

  return (
    <div className="backdrop-blur-sm border rounded-xl p-6 border-transparent bg-[rgba(30,30,30,1)]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-semibold text-white">Live Waitlist</h3>
        </div>
        <Button className="hover:bg-blue-700 px-4 py-2 rounded-lg text-sm bg-white text-black">
          <Plus className="w-4 h-4 mr-1" />
          Add Walk-in
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{stats.partiesWaiting}</div>
          <div className="text-xs text-gray-400">Parties Waiting</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.avgWaitTime}m</div>
          <div className="text-xs text-gray-400">Est. Wait Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.addedToday - stats.seatedToday}</div>
          <div className="text-xs text-gray-400">Added vs Seated</div>
        </div>
      </div>

      {/* Waitlist Queue */}
      <div className="space-y-3">
        {waitlistData.map((party) => (
          <div
            key={party.id}
            className="flex items-center justify-between p-3 rounded-lg border bg-[rgba(44,44,44,1)] border-black"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
                <span className="text-sm font-bold text-white">{party.size}</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-white">{party.name}</span>
                  {party.isVip && <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">VIP</span>}
                </div>
                <div className="text-xs text-gray-400">{party.status === "seating" ? "Being seated" : "Waiting"}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-lg font-bold text-yellow-400">{party.wait}m</div>
                <div className="text-xs text-gray-400">wait time</div>
              </div>
              <Button className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded-lg">
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
