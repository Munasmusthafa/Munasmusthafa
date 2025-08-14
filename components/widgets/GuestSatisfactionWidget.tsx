"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, MessageSquare, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

export function GuestSatisfactionWidget() {
  const satisfactionData = {
    overallRating: 4.7,
    totalReviews: 1247,
    npsScore: 72,
    responseRate: 87,
    avgResponseTime: 2.4,
  }

  const feedbackThemes = [
    { theme: "Service Excellence", mentions: 234, sentiment: "positive", percentage: 89 },
    { theme: "Food Quality", mentions: 189, sentiment: "positive", percentage: 92 },
    { theme: "Ambiance", mentions: 156, sentiment: "positive", percentage: 85 },
    { theme: "Wait Time", mentions: 78, sentiment: "negative", percentage: 23 },
    { theme: "Value for Money", mentions: 145, sentiment: "positive", percentage: 78 },
  ]

  const locationComparison = [
    { location: "Downtown", rating: 4.8, reviews: 456, nps: 78 },
    { location: "Mall Plaza", rating: 4.6, reviews: 342, nps: 68 },
    { location: "Airport", rating: 4.9, reviews: 289, nps: 82 },
    { location: "Beachfront", rating: 4.5, reviews: 160, nps: 65 },
  ]

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-400 bg-green-500/20"
      case "negative":
        return "text-red-400 bg-red-500/20"
      case "neutral":
        return "text-amber-400 bg-amber-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <CheckCircle className="h-3 w-3" />
      case "negative":
        return <AlertTriangle className="h-3 w-3" />
      default:
        return <MessageSquare className="h-3 w-3" />
    }
  }

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-yellow-400 transition-colors duration-300">
          <Star className="mr-2 h-5 w-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
          Guest Satisfaction
          <Badge className="ml-auto bg-yellow-500/20 text-yellow-400 border-yellow-500/30 animate-pulse">
            Daily Update
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-muted">Overall Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">{satisfactionData.overallRating}</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.floor(satisfactionData.overallRating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs text-muted">{satisfactionData.totalReviews} reviews</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">NPS Score</span>
            </div>
            <div className="text-2xl font-bold text-blue-400">{satisfactionData.npsScore}</div>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-xs text-green-400">+5 points</span>
            </div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-green-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <MessageSquare className="h-4 w-4 text-green-400" />
              <span className="text-sm text-muted">Response Rate</span>
            </div>
            <div className="text-2xl font-bold text-green-400">{satisfactionData.responseRate}%</div>
            <div className="text-xs text-muted">Target: 90%</div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-muted">Avg Response Time</span>
            </div>
            <div className="text-2xl font-bold text-purple-400">{satisfactionData.avgResponseTime}h</div>
            <div className="text-xs text-muted">Target: &lt;3h</div>
          </div>
        </div>

        {/* Feedback Themes */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Feedback Themes</h4>
          <div className="space-y-2">
            {feedbackThemes.map((theme, index) => (
              <div
                key={theme.theme}
                className="bg-bg-quaternary/30 rounded-lg p-3 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-left-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge className={`text-xs ${getSentimentColor(theme.sentiment)}`}>
                      {getSentimentIcon(theme.sentiment)}
                      <span className="ml-1 capitalize">{theme.sentiment}</span>
                    </Badge>
                    <span className="text-sm font-medium text-primary">{theme.theme}</span>
                  </div>
                  <span className="text-xs text-muted">{theme.mentions} mentions</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">Positive sentiment</span>
                    <span className="text-xs text-primary">{theme.percentage}%</span>
                  </div>
                  <Progress value={theme.percentage} className="h-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Comparison */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Location Benchmark</h4>
          <div className="space-y-2">
            {locationComparison.map((location, index) => (
              <div
                key={location.location}
                className="flex items-center justify-between p-3 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-right-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-primary w-20">{location.location}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-sm text-primary">{location.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-blue-400">NPS {location.nps}</div>
                  <div className="text-xs text-muted">{location.reviews} reviews</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
