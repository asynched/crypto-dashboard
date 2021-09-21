import React from 'react'
import { Link } from 'react-router-dom'

function TheSidebarItem({ link, external }) {
  const LINK_CLASS_NAME =
    'group bg-gray-700 w-12 h-12 grid place-items-center rounded shadow-lg transition-all hover:bg-gray-300'
  const ICON_CLASS_NAME =
    'w-6 h-6 text-gray-300 transition-all group-hover:text-gray-700'

  if (external)
    return (
      <a className={LINK_CLASS_NAME} target="_blank" href={link.path}>
        <link.icon className={ICON_CLASS_NAME} />
      </a>
    )

  return (
    <Link className={LINK_CLASS_NAME} to={link.path}>
      <link.icon className={ICON_CLASS_NAME} />
    </Link>
  )
}

export default TheSidebarItem
