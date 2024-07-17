import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import UserBlock from "./userBlock";
import { NavButtons, NavButtonsMobile } from "./navButtons";

/**
 *
 * @param param Navigation component for main dashboard layout
 * @returns
 */
const Navigation = () => (
  <Disclosure as="nav" className="bg-astral-800 dark:bg-slate-900">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-astral-700">
            <div className="flex h-16 items-center justify-between px-4 sm:px-0">
              <NavButtons />
              <div className="hidden md:block">
                <UserBlock />
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-astral-800 p-2 text-astral-400 hover:bg-astral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-astral-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="border-b border-astral-700 md:hidden">
          <NavButtonsMobile />
          <div className="flex p-10 border-t border-astral-700 pb-3 pt-4">
            <UserBlock />
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default Navigation;
