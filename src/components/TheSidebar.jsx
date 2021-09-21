import React from 'react'
import {
  HomeIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CodeIcon,
} from '@heroicons/react/outline'
import TheSidebarItem from './TheSidebarItem'

function TheSidebar() {
  const SIDEBAR_LINKS = [
    {
      path: '/',
      name: 'Home',
      icon: HomeIcon,
    },
    {
      path: '/currencies',
      name: 'Currencies',
      icon: ChartBarIcon,
    },
    {
      path: '/exchanges',
      name: 'Exchanges',
      icon: CurrencyDollarIcon,
    },
  ]

  // z-10 absolute hidden

  return (
    <nav className="pt-4 w-20 h-screen flex flex-col gap-6 items-center bg-gradient-to-b from-gray-800 to-gray-900">
      {SIDEBAR_LINKS.map(link => (
        <TheSidebarItem link={link} key={link.path} />
      ))}
      <div className="pb-4 mt-auto">
        <TheSidebarItem
          external
          link={{
            name: 'Repository',
            icon: CodeIcon,
            path: 'https://github.com/Nxrth-x/crypto-dashboard',
          }}
        />
      </div>
    </nav>
  )
}

export default TheSidebar
