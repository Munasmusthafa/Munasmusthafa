'use client'

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Users, DollarSign, UserX, UserPlus } from 'lucide-react'

export function QuickStatsWidget() {
  const stats = [
    { label: 'Occupancy', value: '78%', icon: Users, color: 'text-blue-400', trend: 'up' },
    { label: 'Covers', value: '234', icon: DollarSign, color: 'text-green-400', trend: 'up' },
    { label: 'No-shows', value: '3', icon: UserX, color: 'text-red-400', trend: 'down' },
    { label: 'Walk-ins', value: '45', icon: UserPlus, color: 'text-purple-400', trend: 'up' },
  ]

  return (
    <Card className="bg-black/40 backdrop-blur-xl border-white/10">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 text-green-400 ml-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-400 ml-1" />
                )}
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
