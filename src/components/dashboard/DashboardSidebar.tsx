
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Users, 
  Database, 
  Settings, 
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: BarChart3 },
  { name: 'Leads', href: '/dashboard/leads', icon: Users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
  { name: 'Base de Conhecimento', href: '/dashboard/knowledge', icon: Database },
  { name: 'Configurações', href: '/dashboard/config', icon: Settings },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-black border-r border-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-center">
          <img 
            src="/images/bma-logo.png" 
            alt="BMA Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || 
            (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                isActive
                  ? "bg-white text-black shadow-lg"
                  : "text-white hover:text-gray-300 hover:bg-gray-900"
              )}
            >
              <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-black" : "text-gray-400")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Zap className="w-5 h-5 text-white mr-2" />
            <span className="text-sm font-medium text-white">Sistema Ativo</span>
          </div>
          <p className="text-xs text-gray-400">
            Agente funcionando perfeitamente
          </p>
        </div>
      </div>
    </div>
  );
};
