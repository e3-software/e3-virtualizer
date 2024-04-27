import { UserButton } from "@clerk/nextjs"
import {
 Bars3Icon,
} from '@heroicons/react/24/outline'

/**
 * 
 * @param param Header component for main dashboard page
 * @returns 
 */
const Header = ({
  setSidebarOpen,
  sidebarIsOpen,
}: HeaderProps
) => {
  return (
    <header>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="ml-auto">
          <UserButton showName={true} />
        </div>
      </div>
    </header>
  )
}

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarIsOpen: boolean;
}

export default Header;