"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Calendar, BarChart3, Zap } from "lucide-react"

export function BookingTrendsWidget() {
  const trendData = {
    weeklyGrowth: 12.5,
    monthlyGrowth: 8.3,
    seasonalTrend: "increasing",
    peakSeason: "Summer",
    nextPeakDate: "Valentine's Day",
  }

  const weeklyPattern = [
    { day: "Mon", bookings: 45, trend: "stable" },
    { day: "Tue", bookings: 52, trend: "up" },
    { day: "Wed", bookings: 48, trend: "down" },
    { day: "Thu", bookings: 67, trend: "up" },
    { day: "Fri", bookings: 89, trend: "up" },
    { day: "Sat", bookings: 95, trend: "up" },
    { day: "Sun", bookings: 78, trend: "down" },
  ]

  const specialDates = [
    { date: "Feb 14", event: "Valentine's Day", forecast: 156, confidence: 92 },
    { date: "Mar 17", event: "St. Patrick's Day", forecast: 134, confidence: 87 },
    { date: "May 12", event: "Mother's Day", forecast: 189, confidence: 95 },
    { date: "Jun 16", event: "Father's Day", forecast: 145, confidence: 89 },
  ]

  const monthlyForecast = [
    { month: "Jan", actual: 1247, forecast: 1289, confidence: 89 },
    { month: "Feb", actual: null, forecast: 1456, confidence: 92 },
    { month: "Mar", actual: null, forecast: 1378, confidence: 87 },
    { month: "Apr", actual: null, forecast: 1523, confidence: 85 },
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

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "text-green-400"
    if (confidence >= 80) return "text-amber-400"
    return "text-red-400"
  }

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-teal-400 transition-colors duration-300">
          <BarChart3 className="mr-2 h-5 w-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
          Booking Trends
          <Badge className="ml-auto bg-teal-500/20 text-teal-400 border-teal-500/30 animate-pulse">Weekly Update</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Growth Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-sm text-muted">Weekly Growth</span>
            </div>
            <div className="text-2xl font-bold text-green-400">+{trendData.weeklyGrowth}%</div>
            <div className="text-xs text-muted">vs last week</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-muted">Monthly Growth</span>
            </div>
            <div className="text-2xl font-bold text-blue-400">+{trendData.monthlyGrowth}%</div>
            <div className="text-xs text-muted">vs last month</div>
          </div>
        </div>

        {/* Weekly Pattern */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Weekly Booking Pattern</h4>
          <div className="grid grid-cols-7 gap-2">
            {weeklyPattern.map((day, index) => (
              <div
                key={day.day}
                className="bg-bg-quaternary/30 rounded-lg p-3 border border-border-default hover:border-border-hover transition-all duration-300 text-center animate-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-xs text-muted mb-1">{day.day}</div>
                <div className="text-lg font-bold text-primary">{day.bookings}</div>
                <div className="flex items-center justify-center mt-1">{getTrendIcon(day.trend)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Dates Forecast */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-amber-400" />
            <h4 className="text-sm font-medium text-secondary">Special Dates Forecast</h4>
          </div>
          <div className="space-y-2">
            {specialDates.map((special, index) => (
              <div
                key={special.date}
                className="flex items-center justify-between p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-left-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-center">
                    <div className="text-sm font-medium text-primary">{special.date}</div>
                    <div className="text-xs text-muted">{special.event}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-teal-400">{special.forecast}</div>
                  <div className={`text-xs ${getConfidenceColor(special.confidence)}`}>
                    {special.confidence}% confidence
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 30-Day Forecast */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Next 30 Days Prediction</h4>
          <div className="space-y-2">
            {monthlyForecast.map((month, index) => (
              <div
                key={month.month}
                className="flex items-center justify-between p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-right-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-primary w-12">{month.month}</span>
                  {month.actual && (
                    <div className="text-sm text-secondary">
                      Actual: <span className="text-primary">{month.actual}</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{month.forecast}</div>
                  <div className={`text-xs ${getConfidenceColor(month.confidence)}`}>
                    {month.confidence}% confidence
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonality Insight */}
        <div className="bg-bg-quaternary/30 rounded-lg p-4 border border-border-default">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-secondary">Seasonality Insights</h4>
            <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30">{trendData.seasonalTrend}</Badge>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted">Peak Season</div>
              <div className="font-medium text-primary">{trendData.peakSeason}</div>
            </div>
            <div>
              <div className="text-muted">Next Peak</div>
              <div className="font-medium text-primary">{trendData.nextPeakDate}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
