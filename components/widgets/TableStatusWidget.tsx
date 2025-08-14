'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Utensils } from 'lucide-react'

export function TableStatusWidget() {
  const tables = [
    { id: 1, status: 'available', seats: 2 },
    { id: 2, status: 'occupied', seats: 4 },
    { id: 3, status: 'turning', seats: 6 },
    { id: 4, status: 'available', seats: 2 },
    { id: 5, status: 'occupied', seats: 4 },
    { id: 6, status: 'available', seats: 8 },
    { id: 7, status: 'occupied', seats: 2 },
    { id: 8, status: 'turning', seats: 4 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500 hover:bg-green-600'
      case 'occupied': return 'bg-red-500 hover:bg-red-600'
      case 'turning': return 'bg-amber-500 hover:bg-amber-600'
      default: return 'bg-gray-500'
    }
  }

  return (
    <Card className="bg-black/40 backdrop-blur-xl border-white/10">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white flex items-center">
          <Utensils className="mr-2 h-5 w-5 text-green-400" />
          Table Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-3">
          {tables.map((table) => (
            <Button
              key={table.id}
              className={`h-16 flex flex-col items-center justify-center ${getStatusColor(table.status)} text-white font-medium`}
              onClick={() => {/* Handle table status change */}}
            >
              <span className="text-lg">T{table.id}</span>
              <span className="text-xs opacity-80">{table.seats} seats</span>
            </Button>
          ))}
        </div>
        
        <div className="flex justify-between mt-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
            <span className="text-gray-300">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2" />
            <span className="text-gray-300">Turning</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
            <span className="text-gray-300">Occupied</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
