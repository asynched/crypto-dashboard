import React from 'react'

function CurrencyStatisticsSectionInfoContainer({ icon, title, data }) {
  return (
    <div className="flex justify-between p-4 border-b border-gray-300">
      <div className="flex gap-2 items-center flex-1">
        {icon}
        <span>{title}</span>
      </div>
      <span>{data}</span>
    </div>
  )
}

export default CurrencyStatisticsSectionInfoContainer
