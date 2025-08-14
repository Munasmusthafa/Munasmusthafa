'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock } from 'lucide-react'

export function TodaysTimelineWidget() {
  const currentHour = new Date().getHours()
  const timeSlots = Array.from({ length: 12 }, (_, i) => i + 12) // 12pm to 11pm
  
  const reservations = [
    { time: 13, name: 'Anderson', size: 4, duration: 2 },
    { time: 14, name: 'Wilson', size: 2, duration: 1.5 },
    { time: 16, name: 'Brown', size: 6, duration: 2.5 },
    { time: 18, name: 'Taylor', size: 3, duration: 2 },
    { time: 19, name: 'Davis', size: 8, duration: 3 },
  ]

  return (
    <Card className="bg-black/40 backdrop-blur-xl border-white/10">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-blue-400" />
          Today's Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="flex justify-between mb-4">
            {timeSlots.map((hour) => (
              <div key={hour} className="text-xs text-gray-400 text-center">
                {hour > 12 ? `${hour - 12}pm` : hour === 12 ? '12pm' : `${hour}am`}
              </div>
            ))}
          </div>
          
          <div className="relative h-20 bg-white/5 rounded-lg overflow-hidden">
            {/* Current time marker */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-teal-400 z-10"
              style={{ left: `${((currentHour - 12) / 11) * 100}%` }}
            >
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            </div>
            
            {/* Reservation blocks */}
            {reservations.map((reservation, index) => (
              <div
                key={index}
                className="absolute top-2 bottom-2 bg-blue-500/60 rounded border-l-2 border-blue-400 flex items-center px-2"
                style={{
                  left: `${((reservation.time - 12) / 11) * 100}%`,
                  width: `${(reservation.duration / 11) * 100}%`
                }}
              >
                <div className="text-xs text-white font-medium truncate">
                  {reservation.name} ({reservation.size})
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center mt-2">
            <Clock className="h-4 w-4 text-teal-400 mr-1" />
            <span className="text-sm text-teal-400">
              Current: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
