import Navigation from "@/app/ui/navigation";
import React from 'react'

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-full bg-gray-50 dark:bg-slate-950 h-screen w-full transition-colors duration-500 ease-in-out">
        <div className="bg-astral-800 dark:bg-slate-900 pb-32">
          <Navigation />
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 dark:text-slate-200">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default BaseLayout;
