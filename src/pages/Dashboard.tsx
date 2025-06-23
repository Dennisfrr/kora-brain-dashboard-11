
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { OverviewPage } from '@/components/dashboard/pages/OverviewPage';
import { LeadsPage } from '@/components/dashboard/pages/LeadsPage';
import { AnalyticsPage } from '@/components/dashboard/pages/AnalyticsPage';
import { KnowledgeBasePage } from '@/components/dashboard/pages/KnowledgeBasePage';
import { ConfigPage } from '@/components/dashboard/pages/ConfigPage';
import { LeadDetailPage } from '@/components/dashboard/pages/LeadDetailPage';
import { ThemeProvider } from '@/components/ThemeProvider';

const Dashboard = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="flex h-screen">
          <DashboardSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <DashboardHeader />
            <main className="flex-1 overflow-y-auto p-6">
              <Routes>
                <Route path="/" element={<OverviewPage />} />
                <Route path="/leads" element={<LeadsPage />} />
                <Route path="/leads/:id" element={<LeadDetailPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/knowledge" element={<KnowledgeBasePage />} />
                <Route path="/config" element={<ConfigPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
