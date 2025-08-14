"use client"

import { MetricCard } from "../ui/metric-card"
import { BarChart3 } from "lucide-react"

export function TodaysSummaryWidget() {
  const todayStats = {
    totalBookings: 47,
    walkIns: 23,
    noShows: 3,
    cancellations: 5,
  }

  const lastWeekComparison = {
    totalBookings: "+12%",
    walkIns: "+8%",
    noShows: "-2%",
    cancellations: "+1%",
  }

  return (
    <div className="backdrop-blur-sm border rounded-xl p-6 border-transparent bg-[rgba(30,30,30,1)]">
      <div className="flex items-center space-x-2 mb-6">
        <BarChart3 className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">Today's Summary</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Bookings"
          value={todayStats.totalBookings}
          trend="up"
          trendValue={lastWeekComparison.totalBookings}
          trendColor="green"
          size="sm"
        />
        <MetricCard
          title="Walk-ins"
          value={todayStats.walkIns}
          trend="up"
          trendValue={lastWeekComparison.walkIns}
          trendColor="green"
          size="sm"
        />
        <MetricCard
          title="No-shows"
          value={todayStats.noShows}
          trend="down"
          trendValue={lastWeekComparison.noShows}
          trendColor="green"
          size="sm"
        />
        <MetricCard
          title="Cancellations"
          value={todayStats.cancellations}
          trend="up"
          trendValue={lastWeekComparison.cancellations}
          trendColor="red"
          size="sm"
        />
      </div>
    </div>
  )
}
