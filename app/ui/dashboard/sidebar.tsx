"use client";

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Team', href: '/dashboard/team', icon: UsersIcon },
  { name: 'Projects', href: '#', icon: FolderIcon },
  { name: 'Calendar', href: '#', icon: CalendarIcon },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon },
  { name: 'Reports', href: '#', icon: ChartPieIcon },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

/**
 * 
 * @returns main naviagation links
 */
const Links = () => {
  const pathname = usePathname()
  return (
    <ul role="list" className="-mx-2 space-y-1">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
              {
                'bg-astral-700 text-white': pathname === item.href,
                'text-astral-200 hover:text-white hover:bg-astral-700': pathname !== item.href,
              }
            )}
          >
            <item.icon
              className={clsx(
                'h-6 w-6 shrink-0',
                pathname === item.href ? 'text-white' : 'text-astral-200 group-hover:text-white'
              )}
              aria-hidden="true"
            />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

/**
 * 
 * @returns Team Links, This section probably won't be used and is currently a placeholder show show functionaility
 */
const Teams = () => {
  return (
    <>
      <div className="text-xs font-semibold leading-6 text-astral-200">Your teams</div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {teams.map((team) => (
          <li key={team.name}>
            <Link
              href={team.href}
              className={clsx(
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                {
                  'bg-astral-700 text-white': team.current,
                  'text-astral-200 hover:text-white hover:bg-astral-700': !team.current,
                }
              )}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-astral-400 bg-astral-500 text-[0.625rem] font-medium text-white">
                {team.initial}
              </span>
              <span className="truncate">{team.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

/**
 * 
 * @returns Profile popover link at bottom of sidebar
 */
const Profile = () => {
  return (
    <Link
      href="#"
      className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-astral-700"
    >
      <img
        className="h-8 w-8 rounded-full bg-astral-700"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <span className="sr-only">Your profile</span>
      <span aria-hidden="true">Tom Cook</span>
    </Link>
  )
}


/**
 * This is a stock component from https://tailwindui.com/components/application-ui/application-shells/sidebar and will be customized 
 * later after framing
 * Main Sidebar container.
 */
const Sidebar = () => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <Links />
        </li>
        <li>
          <Teams />
        </li>
        <li className="-mx-6 mt-auto">
          <Profile />
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;
