"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Star,
  TrendingUp,
  Search,
  Download,
  Bot,
  Bell,
  Settings,
  MessageSquare,
  Sparkles,
  Send,
  MoreHorizontal,
} from "lucide-react"

const reviewsData = [
  {
    id: 1,
    customer: "Sarah Mitchell",
    avatar: "SM",
    platform: "Google",
    location: "Bella Vista - Downtown",
    rating: 5,
    time: "2 hours ago",
    text: "Absolutely phenomenal experience! Jake was our server and he made the evening truly special. The seafood risotto was cooked to perfection, and the wine pairing recommendations were spot on. The ambiance was romantic and sophisticated. Will definitely return!",
    photos: 3,
    sentiment: "Positive",
    tone: "Thankful",
    similarReviews: 12,
    tags: ["Service Excellence", "Food Quality", "Wine Selection", "Ambiance"],
    needsResponse: true,
    isNew: true,
  },
  {
    id: 2,
    customer: "Michael Chen",
    avatar: "MC",
    platform: "TripAdvisor",
    location: "Urban Bite",
    rating: 2,
    time: "3 hours ago",
    text: "Disappointed with our visit last night. We waited 45 minutes despite having a reservation. The pasta was overcooked and the service was inattentive.",
    photos: 0,
    sentiment: "Negative",
    tone: "Frustrated",
    similarReviews: 3,
    tags: ["Wait Time", "Food Quality", "Service"],
    needsResponse: true,
    isNew: false,
  },
  {
    id: 3,
    customer: "Emily Rodriguez",
    avatar: "ER",
    platform: "Yelp",
    location: "Coastal Kitchen",
    rating: 4,
    time: "1 day ago",
    text: "Great lunch spot! The fish tacos were fresh and flavorful. Lisa at the bar made excellent cocktails. Only minor complaint - the music was a bit loud.",
    photos: 0,
    sentiment: "Positive",
    tone: "Satisfied",
    similarReviews: 8,
    tags: ["Food Quality", "Service", "Atmosphere"],
    needsResponse: false,
    isNew: false,
  },
]

const metricsData = [
  { title: "Overall Rating", value: "4.7", subtitle: "/5.0", trend: "+0.2", color: "text-white" },
  { title: "Response Rate", value: "87", subtitle: "%", trend: "+5%", color: "text-green-400" },
  { title: "Response Time", value: "2.4", subtitle: "hrs", trend: "-0.6 hrs", color: "text-blue-400" },
  { title: "Review Volume", value: "1,247", subtitle: "", trend: "+156", color: "text-white" },
  { title: "Sentiment Score", value: "8.2", subtitle: "/10", trend: "+0.5", color: "text-green-400" },
  { title: "Revenue Impact", value: "$47K", subtitle: "", trend: "+$8.5K", color: "text-green-400" },
]

export function ReviewsApp() {
  const [activeTab, setActiveTab] = useState("feed")
  const [viewMode, setViewMode] = useState("inbox")
  const [selectedReview, setSelectedReview] = useState(reviewsData[0])
  const [responseText, setResponseText] = useState("")

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
    ))
  }

  return (
    <div className="h-screen bg-primary flex flex-col">
      {/* Header */}
      <div className="bg-secondary border-b border-default px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold text-primary">Review Center</h1>

            <div className="flex items-center space-x-4">
              <Select defaultValue="all-platforms">
                <SelectTrigger className="w-40 bg-quaternary border-hover text-secondary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-quaternary border-hover">
                  <SelectItem value="all-platforms">All Platforms</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="yelp">Yelp</SelectItem>
                  <SelectItem value="tripadvisor">TripAdvisor</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-locations">
                <SelectTrigger className="w-40 bg-quaternary border-hover text-secondary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-quaternary border-hover">
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="mall">Mall Plaza</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="this-month">
                <SelectTrigger className="w-32 bg-quaternary border-hover text-secondary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-quaternary border-hover">
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button className="btn-primary">
              <MessageSquare className="w-4 h-4 mr-2" />
              Respond to Reviews
              <Badge className="ml-2 bg-red-500 text-white">23</Badge>
            </Button>
            <Button className="btn-secondary">
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button className="btn-secondary">
              <Bot className="w-4 h-4 mr-2" />
              AI Assistant
            </Button>
            <Button className="btn-secondary p-2">
              <Bell className="w-4 h-4" />
            </Button>
            <Button className="btn-secondary p-2">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="bg-secondary px-6 py-4 border-b border-default">
        <div className="grid grid-cols-6 gap-4">
          {metricsData.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="caption text-disabled">{metric.title}</p>
                  <div className="flex items-center space-x-1 text-green-400">
                    <TrendingUp className="w-3 h-3" />
                    <span className="micro">{metric.trend}</span>
                  </div>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                  {metric.subtitle && <span className="text-sm text-muted">{metric.subtitle}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-secondary px-6 border-b border-default">
        <div className="flex items-center space-x-8">
          {["feed", "analytics", "automation", "locations", "team"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-1 border-b-2 transition-colors capitalize ${
                activeTab === tab
                  ? "border-blue-400 text-primary"
                  : "border-transparent text-muted hover:text-secondary"
              }`}
            >
              {tab === "feed" && <MessageSquare className="w-4 h-4 mr-2 inline" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-secondary px-6 py-3 border-b border-default">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex bg-quaternary rounded-lg p-1">
              <button
                onClick={() => setViewMode("inbox")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewMode === "inbox" ? "bg-tertiary text-primary" : "text-muted"
                }`}
              >
                Inbox View
              </button>
              <button
                onClick={() => setViewMode("feed")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewMode === "feed" ? "bg-tertiary text-primary" : "text-muted"
                }`}
              >
                Feed View
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted">
            <span>
              Pending: <span className="text-yellow-400">4</span>
            </span>
            <span>
              Today: <span className="text-blue-400">12</span>
            </span>
            <span>
              This Week: <span className="text-green-400">47</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Filters */}
        <div className="w-80 bg-secondary border-r border-default p-4 overflow-y-auto">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-faint" />
              <Input placeholder="Search reviews..." className="pl-10 bg-quaternary border-hover" />
            </div>

            {/* Smart Filters */}
            <div>
              <h3 className="caption text-disabled mb-3">Smart Filters</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded hover:bg-tertiary cursor-pointer">
                  <span className="text-sm text-secondary">Needs Response</span>
                  <Badge className="bg-red-500/20 text-red-400">147</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded hover:bg-tertiary cursor-pointer">
                  <span className="text-sm text-secondary">Negative Mentions</span>
                  <Badge className="bg-yellow-500/20 text-yellow-400">23</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded hover:bg-tertiary cursor-pointer">
                  <span className="text-sm text-secondary">VIP/Influencer</span>
                  <Badge className="bg-purple-500/20 text-purple-400">8</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded hover:bg-tertiary cursor-pointer">
                  <span className="text-sm text-secondary">Contains Questions</span>
                  <Badge className="bg-blue-500/20 text-blue-400">45</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded hover:bg-tertiary cursor-pointer">
                  <span className="text-sm text-secondary">Competitor Mentions</span>
                  <Badge className="bg-orange-500/20 text-orange-400">12</Badge>
                </div>
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <h3 className="caption text-disabled mb-3">Location</h3>
              <Select defaultValue="all-locations">
                <SelectTrigger className="bg-quaternary border-hover">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-quaternary border-hover">
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="mall">Mall Plaza</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Center - Review Feed */}
        <div className="flex-1 bg-primary overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-primary">Review Feed</h2>
                <span className="text-sm text-muted">Showing 3 of 1247 reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button className="btn-secondary">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Insights
                </Button>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-40 bg-quaternary border-hover">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-quaternary border-hover">
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="rating-high">Rating: High to Low</SelectItem>
                    <SelectItem value="rating-low">Rating: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {reviewsData.map((review) => (
                <div
                  key={review.id}
                  onClick={() => setSelectedReview(review)}
                  className={`elevated-card cursor-pointer transition-all hover:bg-tertiary ${
                    selectedReview.id === review.id ? "ring-2 ring-blue-400" : ""
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-xs text-muted">{review.platform}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-primary">{review.location}</span>
                          {review.isNew && <Badge className="bg-blue-500 text-white text-xs">NEW</Badge>}
                        </div>
                        <span className="text-xs text-muted">{review.time}</span>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-quaternary text-primary text-xs">
                            {review.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-primary">{review.customer}</span>
                            <div className="flex">{renderStars(review.rating)}</div>
                          </div>
                          <p className="text-sm text-secondary leading-relaxed">{review.text}</p>
                          {review.photos > 0 && (
                            <div className="flex items-center space-x-1 mt-2">
                              <span className="text-xs text-muted">{review.photos} photos</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Review Details */}
        <div className="w-96 bg-secondary border-l border-default overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-primary">{selectedReview.customer}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="btn-secondary p-2">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-quaternary border-hover">
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>Flag</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted">{selectedReview.platform} •</span>
                <span className="text-sm text-muted">{selectedReview.location} •</span>
                <span className="text-sm text-muted">{selectedReview.time}</span>
              </div>

              <div className="flex">{renderStars(selectedReview.rating)}</div>

              <p className="text-sm text-secondary leading-relaxed">{selectedReview.text}</p>

              {selectedReview.photos > 0 && (
                <div className="text-sm text-muted">{selectedReview.photos} photos attached</div>
              )}

              {/* Contact Information */}
              <div className="sidebar-card">
                <h4 className="caption text-disabled mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-secondary">sarah.johnson@email.com</div>
                  <div className="text-secondary">+1 (555) 123-4567</div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="sidebar-card">
                <h4 className="caption text-disabled mb-2">AI Insights</h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {selectedReview.tags.map((tag) => (
                      <Badge key={tag} className="bg-blue-500/20 text-blue-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted">
                    <div>
                      Sentiment: <span className="text-green-400">{selectedReview.sentiment}</span>
                    </div>
                    <div>
                      Suggested tone: <span className="text-blue-400">{selectedReview.tone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Section */}
              <div className="sidebar-card">
                <h4 className="caption text-disabled mb-3">Write Your Response</h4>
                <Textarea
                  placeholder="Type your response here..."
                  value={responseText}
                  onChange={(e) => setResponseText(e.target.value)}
                  className="bg-quaternary border-hover text-secondary min-h-[100px] mb-3"
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{responseText.length} characters</span>
                  <div className="flex space-x-2">
                    <Button className="btn-secondary text-xs">Save as Draft</Button>
                    <Button className="btn-primary text-xs">
                      <Send className="w-3 h-3 mr-1" />
                      Send Response
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
