
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const mockLineData = [
  { name: 'Jan', value: 65 },
  { name: 'Fev', value: 72 },
  { name: 'Mar', value: 68 },
  { name: 'Abr', value: 78 },
  { name: 'Mai', value: 85 },
  { name: 'Jun', value: 82 },
];

const mockBarData = [
  { name: 'get_lead_profile', value: 120 },
  { name: 'analyze_profile', value: 85 },
  { name: 'case_studies', value: 65 },
  { name: 'knowledge_search', value: 45 },
];

const mockPieData = [
  { name: 'Positivo', value: 60, color: '#22c55e' },
  { name: 'Neutro', value: 30, color: '#64748b' },
  { name: 'Negativo', value: 10, color: '#ef4444' },
];

interface ChartProps {
  type: 'line' | 'bar' | 'pie';
  data?: any[];
}

export const Chart: React.FC<ChartProps> = ({ type, data }) => {
  const chartData = data || (type === 'line' ? mockLineData : type === 'bar' ? mockBarData : mockPieData);

  if (type === 'line') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
              color: '#ffffff'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#ffffff" 
            strokeWidth={3}
            dot={{ fill: '#ffffff', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#d1d5db' }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'bar') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
              color: '#ffffff'
            }} 
          />
          <Bar dataKey="value" fill="#ffffff" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
              color: '#ffffff'
            }} 
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
};
