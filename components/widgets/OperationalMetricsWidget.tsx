"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, BarChart3, Lightbulb, TrendingUp } from "lucide-react"

export function OperationalMetricsWidget() {
  const metrics = {
    avgLeadTime: 4.2,
    peakHours: "7:00-9:00 PM",
    tableUtilization: 78,
    avgPartySize: 3.4,
    turnoverRate: 2.3,
    noShowRate: 4.2,
  }

  const peakTimeData = [
    { time: "12:00 PM", utilization: 45, bookings: 12 },
    { time: "1:00 PM", utilization: 67, bookings: 18 },
    { time: "2:00 PM", utilization: 34, bookings: 9 },
    { time: "6:00 PM", utilization: 89, bookings: 24 },
    { time: "7:00 PM", utilization: 95, bookings: 28 },
    { time: "8:00 PM", utilization: 92, bookings: 26 },
    { time: "9:00 PM", utilization: 78, bookings: 21 },
  ]

  const aiInsights = [
    {
      type: "optimization",
      message: "Consider adding 30-min slots during 7-8 PM to increase capacity by 12%",
      impact: "High",
    },
    {
      type: "pattern",
      message: "Friday bookings show 23% higher no-show rate - implement confirmation calls",
      impact: "Medium",
    },
    {
      type: "opportunity",
      message: "2-3 PM slot has 40% availability - perfect for lunch promotions",
      impact: "Medium",
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      case "Medium":
        return "text-amber-400 bg-amber-500/20 border-amber-500/30"
      case "Low":
        return "text-green-400 bg-green-500/20 border-green-500/30"
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-blue-400 transition-colors duration-300">
          <BarChart3 className="mr-2 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
          Operational Metrics
          <Badge className="ml-auto bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse">Daily Update</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-muted">Avg Lead Time</span>
            </div>
            <div className="text-2xl font-bold text-primary">{metrics.avgLeadTime} days</div>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-xs text-green-400">+0.3 days</span>
            </div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-green-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <BarChart3 className="h-4 w-4 text-green-400" />
              <span className="text-sm text-muted">Table Utilization</span>
            </div>
            <div className="text-2xl font-bold text-primary">{metrics.tableUtilization}%</div>
            <div className="text-xs text-muted mt-1">Above target (75%)</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-muted">Turnover Rate</span>
            </div>
            <div className="text-2xl font-bold text-primary">{metrics.turnoverRate}x</div>
            <div className="text-xs text-muted mt-1">Per table/day</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-amber-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">No-Show Rate</span>
            </div>
            <div className="text-2xl font-bold text-primary">{metrics.noShowRate}%</div>
            <div className="text-xs text-amber-400 mt-1">Industry avg: 5.2%</div>
          </div>
        </div>

        {/* Peak Times Analysis */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Peak Time Analysis</h4>
          <div className="space-y-2">
            {peakTimeData.map((slot, index) => (
              <div
                key={slot.time}
                className="flex items-center justify-between p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-left-5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-primary w-20">{slot.time}</span>
                  <div className="flex-1 bg-bg-quaternary rounded-full h-2 w-24">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        slot.utilization > 85 ? "bg-red-400" : slot.utilization > 70 ? "bg-amber-400" : "bg-green-400"
                      }`}
                      style={{ width: `${slot.utilization}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{slot.utilization}%</div>
                  <div className="text-xs text-muted">{slot.bookings} bookings</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Powered Insights */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-4 w-4 text-amber-400" />
            <h4 className="text-sm font-medium text-secondary">AI-Powered Suggestions</h4>
          </div>
          <div className="space-y-2">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-right-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`text-xs ${getImpactColor(insight.impact)}`}>{insight.impact} Impact</Badge>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{insight.message}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
