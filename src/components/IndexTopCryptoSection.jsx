import React, { useState } from 'react'
import coinsData from '../../coins.json'
import IndexTopCryptoSectionCard from './IndexTopCryptoSectionCard'

function IndexTopCryptoSection() {
  const [formatter] = useState(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  )

  return (
    <div className="container pb-8">
      <h1 className="mb-4 py-4 title text-4xl">
        Top 10 cryptocurrencies in the world
      </h1>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
        {coinsData.data.coins.map(coin => (
          <IndexTopCryptoSectionCard
            dailyChange={coin.change}
            marketCap={formatter.format(coin.marketCap)}
            iconURL={coin.iconUrl}
            name={coin.name}
            price={formatter.format(coin.price)}
            key={coin.id}
          />
        ))}
      </div>
    </div>
  )
}

export default IndexTopCryptoSection
