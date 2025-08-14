"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, DollarSign, Users, TrendingUp, Calendar } from "lucide-react"

export function MarketingROIWidget() {
  const campaigns = [
    {
      name: "Weekend Special",
      cost: 1200,
      bookingsGenerated: 89,
      revenue: 4250,
      roi: 254,
      status: "active",
      cac: 13.48,
      ltv: 187,
    },
    {
      name: "Valentine's Day",
      cost: 2500,
      bookingsGenerated: 156,
      revenue: 8900,
      roi: 256,
      status: "completed",
      cac: 16.03,
      ltv: 195,
    },
    {
      name: "Mother's Day",
      cost: 1800,
      bookingsGenerated: 124,
      revenue: 6200,
      roi: 244,
      status: "active",
      cac: 14.52,
      ltv: 178,
    },
  ]

  const totalMetrics = {
    totalSpent: campaigns.reduce((sum, c) => sum + c.cost, 0),
    totalBookings: campaigns.reduce((sum, c) => sum + c.bookingsGenerated, 0),
    totalRevenue: campaigns.reduce((sum, c) => sum + c.revenue, 0),
    avgROI: campaigns.reduce((sum, c) => sum + c.roi, 0) / campaigns.length,
    avgCAC: campaigns.reduce((sum, c) => sum + c.cac, 0) / campaigns.length,
    avgLTV: campaigns.reduce((sum, c) => sum + c.ltv, 0) / campaigns.length,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "paused":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-purple-400 transition-colors duration-300">
          <Target className="mr-2 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          Marketing ROI
          <Badge className="ml-auto bg-purple-500/20 text-purple-400 border-purple-500/30 animate-pulse">
            Campaign Update
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="h-4 w-4 text-green-400" />
              <span className="text-sm text-muted">Total ROI</span>
            </div>
            <div className="text-2xl font-bold text-green-400">{totalMetrics.avgROI.toFixed(0)}%</div>
            <div className="text-xs text-muted">Avg across campaigns</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-muted">Bookings Generated</span>
            </div>
            <div className="text-2xl font-bold text-blue-400">{totalMetrics.totalBookings}</div>
            <div className="text-xs text-muted">From marketing</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-amber-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">Avg CAC</span>
            </div>
            <div className="text-2xl font-bold text-amber-400">${totalMetrics.avgCAC.toFixed(2)}</div>
            <div className="text-xs text-muted">Customer acquisition</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">Avg LTV</span>
            </div>
            <div className="text-2xl font-bold text-teal-400">${totalMetrics.avgLTV.toFixed(0)}</div>
            <div className="text-xs text-muted">Lifetime value</div>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Campaign Performance</h4>
          <div className="space-y-3">
            {campaigns.map((campaign, index) => (
              <div
                key={campaign.name}
                className="bg-bg-quaternary/30 rounded-lg p-4 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-left-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="font-medium text-primary">{campaign.name}</span>
                  </div>
                  <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-muted">Campaign Cost</div>
                    <div className="text-lg font-semibold text-primary">${campaign.cost.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Revenue Generated</div>
                    <div className="text-lg font-semibold text-green-400">${campaign.revenue.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-muted">Bookings</div>
                    <div className="font-medium text-primary">{campaign.bookingsGenerated}</div>
                  </div>
                  <div>
                    <div className="text-muted">ROI</div>
                    <div className="font-medium text-green-400">{campaign.roi}%</div>
                  </div>
                  <div>
                    <div className="text-muted">CAC</div>
                    <div className="font-medium text-amber-400">${campaign.cac}</div>
                  </div>
                </div>

                {/* ROI Progress Bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted">ROI Progress</span>
                    <span className="text-xs text-green-400">{campaign.roi}%</span>
                  </div>
                  <Progress value={Math.min(campaign.roi, 300)} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LTV vs CAC Ratio */}
        <div className="bg-bg-quaternary/30 rounded-lg p-4 border border-border-default">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-secondary">LTV:CAC Ratio</h4>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-sm text-green-400">Healthy</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">
              {(totalMetrics.avgLTV / totalMetrics.avgCAC).toFixed(1)}:1
            </div>
            <div className="text-xs text-muted mt-1">Target: 3:1 or higher</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
