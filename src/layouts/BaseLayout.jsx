import React, { useEffect } from 'react'
import TheSidebar from '@components/TheSidebar'

function BaseLayout({ children, title }) {
  useEffect(() => {
    document.title = title ? 'BitDash | ' + title : 'BitDash'
  }, [])

  return (
    <main className="text-gray-700 h-screen bg-gray-200 flex">
      <TheSidebar />
      <div className="flex-1 overflow-auto">{children}</div>
    </main>
  )
}

export default BaseLayout
