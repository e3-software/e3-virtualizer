"use client";
import Navigation from "@/app/ui/navigation";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const metaTheme = user?.publicMetadata?.theme;
    const themeClass = metaTheme == "dark" ? "dark" : "light";
    setTheme(themeClass);
  }, [user]);

  return (
    <div className={theme}>
      <div className="min-h-full bg-gray-50 dark:bg-slate-950 h-screen w-full transition-colors duration-500 ease-in-out">
        <div className="bg-astral-800 dark:bg-slate-900 pb-32">
          <Navigation setTheme={setTheme} />
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 dark:text-slate-200">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;
