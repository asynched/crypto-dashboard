import React from 'react'
import { Link } from 'react-router-dom'

function TheSidebarItem({ link }) {
  return (
    <Link
      className="group bg-gray-700 relative w-12 h-12 grid place-items-center rounded shadow-lg transition hover:bg-gray-300"
      to={link.path}
      target={link.path.startsWith('https://') && '_blank'}
    >
      <link.icon className="w-6 h-6 text-gray-300 transition group-hover:text-gray-700" />
    </Link>
  )
}

export default TheSidebarItem
