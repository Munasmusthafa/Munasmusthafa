'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, TrendingUp, TrendingDown } from 'lucide-react'
import { mockLocations } from '../../data/mockData'

export function LocationPerformanceWidget() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'border-green-500 bg-green-500/10'
      case 'warning': return 'border-amber-500 bg-amber-500/10'
      case 'critical': return 'border-red-500 bg-red-500/10'
      default: return 'border-gray-500 bg-gray-500/10'
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good': return <Badge className="bg-green-500 text-white">Good</Badge>
      case 'warning': return <Badge className="bg-amber-500 text-black">Warning</Badge>
      case 'critical': return <Badge className="bg-red-500 text-white">Critical</Badge>
      default: return <Badge className="bg-gray-500 text-white">Unknown</Badge>
    }
  }

  return (
    <Card className="bg-black/40 backdrop-blur-xl border-white/10">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-blue-400" />
          Location Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockLocations.map((location) => (
            <div 
              key={location.id} 
              className={`p-4 rounded-lg border-2 ${getStatusColor(location.status)} transition-all hover:scale-105 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">{location.name}</h3>
                {getStatusBadge(location.status)}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Revenue</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-green-400 font-medium">
                      ${location.revenue.toLocaleString()}
                    </span>
                    <TrendingUp className="h-3 w-3 text-green-400" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Occupancy</span>
                  <span className={`font-medium ${
                    location.occupancy > 80 ? 'text-green-400' : 
                    location.occupancy > 60 ? 'text-amber-400' : 'text-red-400'
                  }`}>
                    {location.occupancy}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400 font-medium">
                      {location.rating}
                    </span>
                    <span className="text-yellow-400">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
