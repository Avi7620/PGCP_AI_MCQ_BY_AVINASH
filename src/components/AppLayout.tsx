'use client';

import React, { useState } from 'react';

import Topbar from './Topbar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen hero-bg mesh-bg">
      <Topbar
        onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        sidebarOpen={!sidebarCollapsed}
      />
 
      <main
        className={`
          transition-all duration-300 ease-in-out
          pt-16
          ${sidebarCollapsed ? 'lg:pl-16' : 'lg:pl-60'}
        `}
      >
        <div className="min-h-[calc(100vh-64px)] p-4 lg:p-6 xl:p-8 max-w-screen-2xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}