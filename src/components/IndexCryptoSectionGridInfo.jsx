import React from 'react'

function IndexCryptoSectionGridInfo({ title, statistic }) {
  return (
    <div>
      <h3 className="text-gray-500">{title}</h3>
      <h2 className="text-2xl">{statistic}</h2>
    </div>
  )
}

export default IndexCryptoSectionGridInfo
