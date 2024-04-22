 import Sidebar from '@/app/ui/sidebar/sidebar';

/**
 * 
 * @param param0 Main dashboard page scaffolding
 * @returns 
 */
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-astral-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt="Your Company"
              />
            </div>
            <Sidebar />
          </div>
      </div>
      <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
      </main>
    </div>
  );
}

export default Layout;