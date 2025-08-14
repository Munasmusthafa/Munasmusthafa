"use client"
import { Utensils } from "lucide-react"

export function CurrentSeatingStatusWidget() {
  const seatingData = {
    available: 12,
    occupied: 28,
    turning: 6,
    total: 46,
    capacity: 87, // percentage
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500"
      case "occupied":
        return "bg-red-500"
      case "turning":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="backdrop-blur-sm border rounded-xl p-6 bg-[rgba(30,30,30,1)] border-transparent">
      <div className="flex items-center space-x-2 mb-6">
        <Utensils className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Current Seating Status</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Donut Chart Area */}
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-700"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${seatingData.capacity * 2.51} 251`}
                className="text-blue-400"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{seatingData.capacity}%</div>
                <div className="text-xs text-gray-400">Capacity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Available</span>
            </div>
            <span className="text-lg font-semibold text-white">{seatingData.available}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Occupied</span>
            </div>
            <span className="text-lg font-semibold text-white">{seatingData.occupied}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Turning Soon</span>
            </div>
            <span className="text-lg font-semibold text-white">{seatingData.turning}</span>
          </div>

          <div className="pt-2 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Total Tables</span>
              <span className="text-lg font-bold text-white">{seatingData.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
