'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, TrendingDown, Target, DollarSign, Users, Clock } from 'lucide-react'

export function PerformanceScorecardWidget() {
  const metrics = [
    { 
      label: 'Revenue vs Target', 
      value: 12450, 
      target: 15000, 
      percentage: 83, 
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-400'
    },
    { 
      label: 'Covers', 
      value: 234, 
      target: 280, 
      percentage: 84, 
      trend: 'up',
      icon: Users,
      color: 'text-blue-400'
    },
    { 
      label: 'Avg Check', 
      value: 53.20, 
      target: 55.00, 
      percentage: 97, 
      trend: 'down',
      icon: Target,
      color: 'text-purple-400'
    },
    { 
      label: 'Labor %', 
      value: 28.5, 
      target: 30.0, 
      percentage: 95, 
      trend: 'up',
      icon: Clock,
      color: 'text-amber-400'
    }
  ]

  return (
    <Card className="bg-black/40 backdrop-blur-xl border-white/10">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white flex items-center">
          <Target className="mr-2 h-5 w-5 text-green-400" />
          Performance Scorecard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
                <span className="text-sm text-gray-300">{metric.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${metric.color}`}>
                  {typeof metric.value === 'number' && metric.value > 100 
                    ? `$${metric.value.toLocaleString()}` 
                    : typeof metric.value === 'number' && metric.value < 100
                    ? `${metric.value}${metric.label.includes('%') ? '%' : metric.label.includes('Check') ? '' : ''}`
                    : metric.value
                  }
                </span>
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 text-green-400" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-400" />
                )}
              </div>
            </div>
            <Progress 
              value={metric.percentage} 
              className="h-2 bg-white/10"
            />
            <div className="text-xs text-gray-500 text-right">
              {metric.percentage}% of target
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
