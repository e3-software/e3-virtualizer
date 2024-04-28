import { UserButton } from "@clerk/nextjs"
import {
 Bars3Icon,
 BellIcon
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
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-gray-100 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

          {/* User button */}
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