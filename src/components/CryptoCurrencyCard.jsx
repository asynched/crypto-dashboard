import React from 'react'
import { Link } from 'react-router-dom'

function CryptoCurrencyCard({ name, iconURL, price, marketCap, dailyChange }) {
  return (
    <Link
      to={`/currencies/${name}`}
      className="bg-white rounded transition duration-300 hover:shadow-xl"
    >
      <div className="p-4 flex items-center justify-between border-b">
        <h4 className="title text-lg">{name}</h4>
        <img src={iconURL} alt={`${name}'s icon`} className="w-8 h-8" />
      </div>
      <div className="p-8">
        <p>Price: {price}</p>
        <p>Market cap: {marketCap}</p>
        <p>Daily change: {dailyChange}%</p>
      </div>
    </Link>
  )
}

export default CryptoCurrencyCard
