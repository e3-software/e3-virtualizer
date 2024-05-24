import clsx from "clsx";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/e3/dashboard", current: true },
  { name: "Team", href: "/e3/team", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

export const NavButtons = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={clsx("rounded-md px-3 py-2 text-sm font-medium", {
                "bg-astral-900 text-white": pathname === item.href,
                "text-astral-300 hover:bg-astral-700 hover:text-white":
                  pathname !== item.href,
              })}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const NavButtonsMobile = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-1 px-2 py-3 sm:px-3">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={clsx("rounded-md px-3 py-2 text-sm font-medium", {
            "bg-astral-900 text-white": pathname === item.href,
            "text-astral-300 hover:bg-astral-700 hover:text-white":
              pathname !== item.href,
          })}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
};
