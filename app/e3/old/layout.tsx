"use client";
 
import { useState } from 'react';
import Sidebar from '@/app/ui/sidebar/sidebar';
import Header from '@/app/ui/header/header';

/**
 * 
 * @param param0 Main dashboard page scaffolding
 * @returns 
 */
const Layout = ({ children }: { children: React.ReactNode }) => {
  // manage sidebar open/closed state for app in main layout
  const [ sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="lg:pl-72">        
        <Header setSidebarOpen={setSidebarOpen} sidebarIsOpen={sidebarOpen} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;