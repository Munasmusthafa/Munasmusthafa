"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, TrendingUp, BarChart3 } from "lucide-react"

export function BookingPatternsWidget() {
  const patternData = {
    totalBookings: 8947,
    weeklyGrowth: 15.2,
    peakHour: "7:30 PM",
    peakDay: "Saturday",
    avgBookingWindow: 4.2,
  }

  const locationDistribution = [
    { location: "Downtown", bookings: 2847, percentage: 32, trend: "up" },
    { location: "Mall Plaza", bookings: 2234, percentage: 25, trend: "up" },
    { location: "Airport", bookings: 1956, percentage: 22, trend: "stable" },
    { location: "Beachfront", bookings: 1910, percentage: 21, trend: "down" },
  ]

  const hourlyPattern = [
    { hour: "12 PM", bookings: 45, utilization: 67 },
    { hour: "1 PM", bookings: 67, utilization: 78 },
    { hour: "2 PM", bookings: 34, utilization: 45 },
    { hour: "6 PM", bookings: 89, utilization: 89 },
    { hour: "7 PM", bookings: 124, utilization: 95 },
    { hour: "8 PM", bookings: 118, utilization: 92 },
    { hour: "9 PM", bookings: 87, utilization: 78 },
  ]

  const seasonalTrends = [
    { period: "Spring", bookings: 2156, growth: 12.3, color: "text-green-400" },
    { period: "Summer", bookings: 2847, growth: 18.7, color: "text-amber-400" },
    { period: "Fall", bookings: 2234, growth: 8.9, color: "text-orange-400" },
    { period: "Winter", bookings: 1710, growth: -5.2, color: "text-blue-400" },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-3 w-3 text-green-400" />
      case "down":
        return <TrendingUp className="h-3 w-3 text-red-400 rotate-180" />
      default:
        return <div className="h-3 w-3 bg-gray-400 rounded-full" />
    }
  }

  const getUtilizationColor = (utilization: number) => {
    if (utilization >= 90) return "bg-red-400"
    if (utilization >= 75) return "bg-amber-400"
    return "bg-green-400"
  }

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-blue-400 transition-colors duration-300">
          <BarChart3 className="mr-2 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
          Booking Patterns
          <Badge className="ml-auto bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse">Hourly Update</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Pattern Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-muted">Total Bookings</span>
            </div>
            <div className="text-2xl font-bold text-primary">{patternData.totalBookings.toLocaleString()}</div>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-xs text-green-400">+{patternData.weeklyGrowth}% this week</span>
            </div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-muted">Peak Hour</span>
            </div>
            <div className="text-2xl font-bold text-primary">{patternData.peakHour}</div>
            <div className="text-xs text-muted">Highest demand</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-green-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">Peak Day</span>
            </div>
            <div className="text-2xl font-bold text-green-400">{patternData.peakDay}</div>
            <div className="text-xs text-muted">Best performing day</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-amber-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">Booking Window</span>
            </div>
            <div className="text-2xl font-bold text-amber-400">{patternData.avgBookingWindow} days</div>
            <div className="text-xs text-muted">Average lead time</div>
          </div>
        </div>

        {/* Location Distribution */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-blue-400" />
            <h4 className="text-sm font-medium text-secondary">Booking Distribution</h4>
          </div>
          <div className="space-y-2">
            {locationDistribution.map((location, index) => (
              <div
                key={location.location}
                className="flex items-center justify-between p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-left-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-primary w-24">{location.location}</span>
                  <div className="flex-1 bg-bg-quaternary rounded-full h-2 w-32">
                    <div
                      className="h-2 bg-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${location.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{location.bookings.toLocaleString()}</div>
                    <div className="text-xs text-muted">{location.percentage}%</div>
                  </div>
                  {getTrendIcon(location.trend)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hourly Heat Map */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Peak Time Analysis</h4>
          <div className="space-y-2">
            {hourlyPattern.map((slot, index) => (
              <div
                key={slot.hour}
                className="flex items-center justify-between p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-right-5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-primary w-16">{slot.hour}</span>
                  <div className="flex-1 bg-bg-quaternary rounded-full h-3 w-24">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${getUtilizationColor(
                        slot.utilization,
                      )}`}
                      style={{ width: `${slot.utilization}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{slot.bookings} bookings</div>
                  <div className="text-xs text-muted">{slot.utilization}% capacity</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Trends */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Seasonal Patterns</h4>
          <div className="grid grid-cols-2 gap-3">
            {seasonalTrends.map((season, index) => (
              <div
                key={season.period}
                className="bg-bg-quaternary/30 rounded-lg p-3 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${season.color}`}>{season.period}</span>
                  <div className="flex items-center space-x-1">
                    {season.growth > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-400" />
                    ) : (
                      <TrendingUp className="h-3 w-3 text-red-400 rotate-180" />
                    )}
                    <span className={`text-xs ${season.growth > 0 ? "text-green-400" : "text-red-400"}`}>
                      {season.growth > 0 ? "+" : ""}
                      {season.growth}%
                    </span>
                  </div>
                </div>
                <div className="text-lg font-bold text-primary">{season.bookings.toLocaleString()}</div>
                <div className="text-xs text-muted">bookings</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
