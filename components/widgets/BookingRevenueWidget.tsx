"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, TrendingDown, MapPin } from "lucide-react"

export function BookingRevenueWidget() {
  const locations = [
    {
      id: "downtown",
      name: "Downtown",
      prepayments: 8450,
      deposits: 3200,
      cancellationFees: 180,
      trend: "up",
      trendValue: "+12%",
    },
    {
      id: "mall",
      name: "Mall Plaza",
      prepayments: 6780,
      deposits: 2850,
      cancellationFees: 95,
      trend: "up",
      trendValue: "+8%",
    },
    {
      id: "airport",
      name: "Airport",
      prepayments: 5920,
      deposits: 2100,
      cancellationFees: 145,
      trend: "down",
      trendValue: "-3%",
    },
    {
      id: "beachfront",
      name: "Beachfront",
      prepayments: 7340,
      deposits: 2950,
      cancellationFees: 120,
      trend: "up",
      trendValue: "+15%",
    },
  ]

  const totalPrepayments = locations.reduce((sum, loc) => sum + loc.prepayments, 0)
  const totalDeposits = locations.reduce((sum, loc) => sum + loc.deposits, 0)
  const totalFees = locations.reduce((sum, loc) => sum + loc.cancellationFees, 0)

  return (
    <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-border-default backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-primary flex items-center group-hover:text-green-400 transition-colors duration-300">
          <DollarSign className="mr-2 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
          Booking Revenue
          <Badge className="ml-auto bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">
            Daily Update
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-green-400/30 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">${totalPrepayments.toLocaleString()}</div>
              <div className="text-xs text-muted">Total Prepayments</div>
            </div>
          </div>
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">${totalDeposits.toLocaleString()}</div>
              <div className="text-xs text-muted">Deposits Held</div>
            </div>
          </div>
          <div className="bg-bg-quaternary/50 rounded-lg p-4 border border-border-default hover:border-amber-400/30 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">${totalFees.toLocaleString()}</div>
              <div className="text-xs text-muted">Cancellation Fees</div>
            </div>
          </div>
        </div>

        {/* Location Breakdown */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-secondary">Revenue by Location</h4>
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="bg-bg-quaternary/30 rounded-lg p-4 border border-border-default hover:border-border-hover transition-all duration-300 hover:bg-bg-quaternary/50 animate-in slide-in-from-left-5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="font-medium text-primary">{location.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {location.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-400" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-400" />
                  )}
                  <span
                    className={`text-sm font-medium ${location.trend === "up" ? "text-green-400" : "text-red-400"}`}
                  >
                    {location.trendValue}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-muted">Prepayments</div>
                  <div className="font-semibold text-primary">${location.prepayments.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-muted">Deposits</div>
                  <div className="font-semibold text-primary">${location.deposits.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-muted">Fees</div>
                  <div className="font-semibold text-primary">${location.cancellationFees}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
