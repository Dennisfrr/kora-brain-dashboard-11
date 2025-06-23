
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  description: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  changeType,
  description
}) => {
  return (
    <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/60 hover:bg-slate-800/80 transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">{title}</p>
              <p className="text-2xl font-bold text-slate-100">{value}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span
            className={cn(
              "text-sm font-medium",
              changeType === 'positive' && "text-green-400",
              changeType === 'negative' && "text-red-400",
              changeType === 'neutral' && "text-slate-400"
            )}
          >
            {change}
          </span>
          <span className="text-xs text-slate-500">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
};
