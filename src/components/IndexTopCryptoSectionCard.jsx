import React from 'react'

function IndexTopCryptoSectionCard({
  name,
  iconURL,
  price,
  marketCap,
  dailyChange,
}) {
  return (
    <div class="bg-white rounded transition duration-300 hover:shadow-xl">
      <div className="p-4 flex items-center justify-between border-b">
        <h4 className="text-lg font-semibold">{name}</h4>
        <img src={iconURL} alt={`${name}'s icon`} className="w-8 h-8" />
      </div>
      <div className="p-8 text-gray-600">
        <p>Price: {price}</p>
        <p>Market cap: {marketCap}</p>
        <p>Daily change: {dailyChange}%</p>
      </div>
    </div>
  )
}

export default IndexTopCryptoSectionCard
