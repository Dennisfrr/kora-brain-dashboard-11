
import React from 'react';
import { Bell, Search, User, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/hooks/useTheme';

export const DashboardHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input
              placeholder="Buscar leads, dados, configurações..."
              className="pl-10 bg-gray-900 border-gray-700 focus:bg-gray-800 text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleTheme}
            className="text-gray-300 hover:text-white hover:bg-gray-900"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          
          <Button variant="ghost" size="sm" className="relative text-gray-300 hover:text-white hover:bg-gray-900">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
          </Button>
          
          <div className="flex items-center space-x-3 pl-3 border-l border-gray-700">
            <div className="text-right">
              <p className="text-sm font-medium text-white">Admin</p>
              <p className="text-xs text-gray-400">Sistema BMA</p>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
