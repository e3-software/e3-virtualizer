import { UserButton } from "@clerk/nextjs";
import { BellIcon } from "@heroicons/react/24/outline";
import ThemeSwitch from "../themeSwitch";

const UserBlock = ({ setTheme }: { setTheme: Function }) => (
  <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
    <button
      type="button"
      className="-m-2.5 p-2.5 text-gray-300 hover:text-white"
    >
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>

    {/* Separator */}
    <div
      className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
      aria-hidden="true"
    />

    {/* User button */}
    <UserButton
      showName={true}
      appearance={{ variables: { colorText: "white" } }}
    />

    <div>
      <ThemeSwitch setTheme={setTheme} />
    </div>
  </div>
);

export default UserBlock;
