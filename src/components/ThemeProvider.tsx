
import React from 'react';
import { ThemeProvider as Theme } from '@/hooks/useTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <Theme>{children}</Theme>;
};
