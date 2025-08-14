"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, UserPlus, Crown, TrendingUp, Mail, Phone } from "lucide-react"

export function CustomerDatabaseWidget() {
  const customerData = {
    totalGuests: 12847,
    newGuests: 1234,
    returningGuests: 11613,
    vipGuests: 456,
    contactQuality: 87,
    monthlyGrowth: 12.5,
    emailContacts: 89,
    phoneContacts: 76,
  }

  const segments = [
    { name: "VIP Customers", count: 456, percentage: 3.5, color: "text-purple-400", bgColor: "bg-purple-500/20" },
    { name: "Regular Diners", count: 3421, percentage: 26.6, color: "text-blue-400", bgColor: "bg-blue-500/20" },
    { name: "Occasional Visitors", count: 5847, percentage: 45.5, color: "text-green-400", bgColor: "bg-green-500/20" },
    { name: "New Customers", count: 3123, percentage: 24.4, color: "text-amber-400", bgColor: "bg-amber-500/20" },
  ]

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-teal-400 transition-colors duration-300">
          <Users className="mr-2 h-5 w-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
          Customer Database
          <Badge className="ml-auto bg-teal-500/20 text-teal-400 border-teal-500/30 animate-pulse">Daily Update</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-4 w-4 text-teal-400" />
              <span className="text-sm text-muted">Total Guests</span>
            </div>
            <div className="text-2xl font-bold text-primary">{customerData.totalGuests.toLocaleString()}</div>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-xs text-green-400">+{customerData.monthlyGrowth}% MoM</span>
            </div>
          </div>

          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-muted">VIP Guests</span>
            </div>
            <div className="text-2xl font-bold text-primary">{customerData.vipGuests}</div>
            <div className="text-xs text-muted mt-1">High-value customers</div>
          </div>
        </div>

        {/* New vs Returning */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Guest Composition</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-bg-quaternary/30 rounded-lg p-3 border border-border-default">
              <div className="flex items-center space-x-2 mb-2">
                <UserPlus className="h-4 w-4 text-green-400" />
                <span className="text-sm text-muted">New Guests</span>
              </div>
              <div className="text-xl font-bold text-green-400">{customerData.newGuests.toLocaleString()}</div>
              <div className="text-xs text-muted">
                {((customerData.newGuests / customerData.totalGuests) * 100).toFixed(1)}% of total
              </div>
            </div>
            <div className="bg-bg-quaternary/30 rounded-lg p-3 border border-border-default">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-muted">Returning</span>
              </div>
              <div className="text-xl font-bold text-blue-400">{customerData.returningGuests.toLocaleString()}</div>
              <div className="text-xs text-muted">
                {((customerData.returningGuests / customerData.totalGuests) * 100).toFixed(1)}% of total
              </div>
            </div>
          </div>
        </div>

        {/* Contact Quality */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Contact Information Quality</h4>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-muted">Email Contacts</span>
                </div>
                <span className="text-sm font-medium text-primary">{customerData.emailContacts}%</span>
              </div>
              <Progress value={customerData.emailContacts} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-muted">Phone Contacts</span>
                </div>
                <span className="text-sm font-medium text-primary">{customerData.phoneContacts}%</span>
              </div>
              <Progress value={customerData.phoneContacts} className="h-2" />
            </div>
          </div>
        </div>

        {/* Customer Segments */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Customer Segments</h4>
          <div className="space-y-2">
            {segments.map((segment, index) => (
              <div
                key={segment.name}
                className="flex items-center justify-between p-2 rounded-lg bg-bg-quaternary/30 border border-border-default hover:border-border-hover transition-all duration-300 animate-in slide-in-from-right-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${segment.bgColor}`} />
                  <span className="text-sm text-primary">{segment.name}</span>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${segment.color}`}>{segment.count.toLocaleString()}</div>
                  <div className="text-xs text-muted">{segment.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
