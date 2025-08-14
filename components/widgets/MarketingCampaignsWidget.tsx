"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Target, Play, Pause, Eye, Users, Calendar, TrendingUp } from "lucide-react"

export function MarketingCampaignsWidget() {
  const campaignMetrics = {
    activeCampaigns: 8,
    totalReach: 45678,
    totalEngagement: 12.4,
    bookingsGenerated: 234,
    campaignROI: 287,
  }

  const activeCampaigns = [
    {
      id: 1,
      name: "Summer Dining Special",
      status: "active",
      reach: 12456,
      engagement: 8.7,
      bookings: 89,
      budget: 2500,
      spent: 1847,
      endDate: "Jul 31",
      performance: "excellent",
    },
    {
      id: 2,
      name: "Weekend Brunch Promotion",
      status: "active",
      reach: 8934,
      engagement: 12.3,
      bookings: 67,
      budget: 1800,
      spent: 1234,
      endDate: "Aug 15",
      performance: "good",
    },
    {
      id: 3,
      name: "Happy Hour Campaign",
      status: "paused",
      reach: 5678,
      engagement: 6.2,
      bookings: 34,
      budget: 1200,
      spent: 890,
      endDate: "Aug 30",
      performance: "needs-attention",
    },
    {
      id: 4,
      name: "Date Night Package",
      status: "active",
      reach: 15432,
      engagement: 15.8,
      bookings: 123,
      budget: 3200,
      spent: 2456,
      endDate: "Sep 15",
      performance: "excellent",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "paused":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "excellent":
        return "text-green-400"
      case "good":
        return "text-blue-400"
      case "needs-attention":
        return "text-amber-400"
      case "poor":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case "excellent":
      case "good":
        return <TrendingUp className="h-3 w-3" />
      default:
        return <TrendingUp className="h-3 w-3 rotate-180" />
    }
  }

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-purple-400 transition-colors duration-300">
          <Target className="mr-2 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          Marketing Campaigns
          <Badge className="ml-auto bg-purple-500/20 text-purple-400 border-purple-500/30 animate-pulse">
            Real-time
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Campaign Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-muted">Active Campaigns</span>
            </div>
            <div className="text-2xl font-bold text-primary">{campaignMetrics.activeCampaigns}</div>
            <div className="text-xs text-muted">Running now</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-muted">Total Reach</span>
            </div>
            <div className="text-2xl font-bold text-blue-400">{campaignMetrics.totalReach.toLocaleString()}</div>
            <div className="text-xs text-muted">This month</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-green-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-4 w-4 text-green-400" />
              <span className="text-sm text-muted">Engagement Rate</span>
            </div>
            <div className="text-2xl font-bold text-green-400">{campaignMetrics.totalEngagement}%</div>
            <div className="text-xs text-muted">Avg across campaigns</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-teal-400" />
              <span className="text-sm text-muted">Bookings Generated</span>
            </div>
            <div className="text-2xl font-bold text-teal-400">{campaignMetrics.bookingsGenerated}</div>
            <div className="text-xs text-muted">From campaigns</div>
          </div>
        </div>

        {/* Active Campaigns List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-secondary">Campaign Performance</h4>
            <Button className="btn-secondary text-xs">
              <Target className="w-3 h-3 mr-1" />
              Create Campaign
            </Button>
          </div>
          <div className="space-y-3">
            {activeCampaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className="bg-bg-quaternary/30 rounded-lg p-4 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-left-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-primary">{campaign.name}</span>
                    <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`flex items-center space-x-1 ${getPerformanceColor(campaign.performance)}`}>
                      {getPerformanceIcon(campaign.performance)}
                      <span className="text-xs capitalize">{campaign.performance}</span>
                    </div>
                    <div className="flex space-x-1">
                      {campaign.status === "active" ? (
                        <Button className="btn-secondary p-1">
                          <Pause className="w-3 h-3" />
                        </Button>
                      ) : (
                        <Button className="btn-secondary p-1">
                          <Play className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-3 text-sm">
                  <div>
                    <div className="text-muted">Reach</div>
                    <div className="font-medium text-primary">{campaign.reach.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted">Engagement</div>
                    <div className="font-medium text-primary">{campaign.engagement}%</div>
                  </div>
                  <div>
                    <div className="text-muted">Bookings</div>
                    <div className="font-medium text-primary">{campaign.bookings}</div>
                  </div>
                  <div>
                    <div className="text-muted">Ends</div>
                    <div className="font-medium text-primary">{campaign.endDate}</div>
                  </div>
                </div>

                {/* Budget Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">Budget Usage</span>
                    <span className="text-xs text-primary">
                      ${campaign.spent} / ${campaign.budget}
                    </span>
                  </div>
                  <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign ROI Summary */}
        <div className="bg-bg-quaternary/30 rounded-lg p-4 border border-border-default">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-secondary">Overall Campaign ROI</h4>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-sm text-green-400">+23% vs last month</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">{campaignMetrics.campaignROI}%</div>
            <div className="text-sm text-muted">Return on marketing investment</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
