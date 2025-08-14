"use client"

import { Calendar, Users, Star, AlertTriangle } from "lucide-react"

export function UpcomingReservationsWidget() {
  const reservations = [
    {
      id: 1,
      time: "7:00 PM",
      name: "Anderson Family",
      size: 4,
      requests: "Window table",
      isVip: false,
      isLargeParty: false,
    },
    {
      id: 2,
      time: "7:15 PM",
      name: "Wilson Group",
      size: 8,
      requests: "Birthday celebration",
      isVip: false,
      isLargeParty: true,
    },
    {
      id: 3,
      time: "7:30 PM",
      name: "Thompson",
      size: 2,
      requests: "Anniversary dinner",
      isVip: true,
      isLargeParty: false,
    },
    {
      id: 4,
      time: "8:00 PM",
      name: "Davis Party",
      size: 6,
      requests: "Quiet area",
      isVip: false,
      isLargeParty: false,
    },
  ]

  const stats = {
    totalBookings: 24,
    coversExpected: 86,
    specialRequests: 8,
  }

  return (
    <div className="backdrop-blur-sm border rounded-xl p-6 border-transparent bg-[rgba(28,28,28,1)]">
      <div className="flex items-center space-x-2 mb-6">
        <Calendar className="w-5 h-5 text-green-400" />
        <h3 className="text-lg font-semibold text-white">Upcoming Reservations</h3>
        <span className="text-sm text-gray-400">(Next 2 hours)</span>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{stats.totalBookings}</div>
          <div className="text-xs text-gray-400">Total Bookings</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{stats.coversExpected}</div>
          <div className="text-xs text-gray-400">Covers Expected</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.specialRequests}</div>
          <div className="text-xs text-gray-400">Special Requests</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-3">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="flex items-center justify-between p-3 rounded-lg border border-gray-600/30 bg-[rgba(44,44,44,1)]"
          >
            <div className="flex items-center space-x-3">
              <div className="text-center">
                <div className="text-sm font-bold text-white">{reservation.time}</div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-white">{reservation.name}</span>
                  {reservation.isVip && <Star className="w-4 h-4 text-yellow-400" />}
                  {reservation.isLargeParty && <AlertTriangle className="w-4 h-4 text-orange-400" />}
                </div>
                <div className="text-xs text-gray-400">{reservation.requests}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-white">{reservation.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
