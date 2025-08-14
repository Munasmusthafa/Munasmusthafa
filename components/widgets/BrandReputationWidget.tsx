"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, TrendingUp, MessageSquare, AlertTriangle } from "lucide-react"

export function BrandReputationWidget() {
  const reputationData = {
    overallRating: 4.6,
    totalReviews: 3247,
    reviewVolume: 156,
    sentimentScore: 82,
    responseRate: 91,
    brandHealthScore: 87,
  }

  const platformBreakdown = [
    { platform: "Google", rating: 4.7, reviews: 1456, sentiment: 85, color: "text-blue-400" },
    { platform: "Yelp", rating: 4.5, reviews: 892, sentiment: 78, color: "text-red-400" },
    { platform: "TripAdvisor", rating: 4.8, reviews: 634, sentiment: 89, color: "text-green-400" },
    { platform: "Facebook", rating: 4.4, reviews: 265, sentiment: 76, color: "text-purple-400" },
  ]

  const sentimentTrends = [
    { period: "This Week", positive: 89, neutral: 8, negative: 3 },
    { period: "Last Week", positive: 85, neutral: 11, negative: 4 },
    { period: "This Month", positive: 87, neutral: 9, negative: 4 },
    { period: "Last Month", positive: 83, neutral: 12, negative: 5 },
  ]

  const alerts = [
    {
      type: "critical",
      message: "Negative review spike detected on Yelp - 3 reviews in 2 hours",
      time: "2 hours ago",
    },
    {
      type: "warning",
      message: "Response time increased to 4.2 hours (target: <3h)",
      time: "6 hours ago",
    },
    {
      type: "positive",
      message: "Brand mention increased 23% this week",
      time: "1 day ago",
    },
  ]

  const getAlertColor = (type: string) => {
    switch (type) {
      case "critical":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      case "warning":
        return "text-amber-400 bg-amber-500/20 border-amber-500/30"
      case "positive":
        return "text-green-400 bg-green-500/20 border-green-500/30"
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-3 w-3" />
      case "warning":
        return <AlertTriangle className="h-3 w-3" />
      case "positive":
        return <TrendingUp className="h-3 w-3" />
      default:
        return <MessageSquare className="h-3 w-3" />
    }
  }

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-yellow-400 transition-colors duration-300">
          <Star className="mr-2 h-5 w-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
          Brand Reputation
          <Badge className="ml-auto bg-yellow-500/20 text-yellow-400 border-yellow-500/30 animate-pulse">
            Daily Update
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Brand Health Score */}
        <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-semibold text-primary">Brand Health Score</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-sm text-green-400">+3 points</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">{reputationData.brandHealthScore}</div>
            <Progress value={reputationData.brandHealthScore} className="h-3 mb-2" />
            <div className="text-sm text-muted">Excellent (80+ is target)</div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-muted">Overall Rating</span>
            </div>
            <div className="text-2xl font-bold text-primary">{reputationData.overallRating}</div>
            <div className="text-xs text-muted">{reputationData.totalReviews} total reviews</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-green-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <MessageSquare className="h-4 w-4 text-green-400" />
              <span className="text-sm text-muted">Response Rate</span>
            </div>
            <div className="text-2xl font-bold text-green-400">{reputationData.responseRate}%</div>
            <div className="text-xs text-muted">Target: 90%+</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">Review Volume</span>
            </div>
            <div className="text-2xl font-bold text-purple-400">{reputationData.reviewVolume}</div>
            <div className="text-xs text-muted">This month</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">Sentiment Score</span>
            </div>
            <div className="text-2xl font-bold text-teal-400">{reputationData.sentimentScore}%</div>
            <div className="text-xs text-muted">Positive sentiment</div>
          </div>
        </div>

        {/* Platform Breakdown */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Platform Performance</h4>
          <div className="space-y-2">
            {platformBreakdown.map((platform, index) => (
              <div
                key={platform.platform}
                className="flex items-center justify-between p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-left-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-medium ${platform.color} w-20`}>{platform.platform}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-sm text-primary">{platform.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{platform.reviews} reviews</div>
                  <div className="text-xs text-teal-400">{platform.sentiment}% positive</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sentiment Trends */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Sentiment Trends</h4>
          <div className="space-y-2">
            {sentimentTrends.map((trend, index) => (
              <div
                key={trend.period}
                className="bg-bg-quaternary/30 rounded-lg p-3 border border-border-default animate-in slide-in-from-right-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">{trend.period}</span>
                  <div className="flex items-center space-x-1">
                    {index === 0 && trend.positive > sentimentTrends[1]?.positive && (
                      <TrendingUp className="h-3 w-3 text-green-400" />
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-green-400 font-medium">{trend.positive}%</div>
                    <div className="text-muted">Positive</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-medium">{trend.neutral}%</div>
                    <div className="text-muted">Neutral</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-400 font-medium">{trend.negative}%</div>
                    <div className="text-muted">Negative</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Reputation Alerts</h4>
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <Badge className={`text-xs ${getAlertColor(alert.type)}`}>
                    {getAlertIcon(alert.type)}
                    <span className="ml-1 capitalize">{alert.type}</span>
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm text-secondary leading-relaxed">{alert.message}</p>
                    <div className="text-xs text-muted mt-1">{alert.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
