import React, { useState } from 'react'
import IndexCryptoSectionGridInfo from './IndexCryptoSectionGridInfo'

import coinsData from '../../coins.json'

function IndexCryptoSectionGrid() {
  const [formatter] = useState(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  )

  return (
    <div className="grid grid-cols-2 gap-4">
      <IndexCryptoSectionGridInfo
        title="Total cryptocurrencies"
        statistic={coinsData.data.stats.total}
      />
      <IndexCryptoSectionGridInfo
        title="Total exchanges"
        statistic={coinsData.data.stats.totalExchanges}
      />
      <IndexCryptoSectionGridInfo
        title="Total market cap"
        statistic={formatter.format(coinsData.data.stats.totalMarketCap)}
      />
      <IndexCryptoSectionGridInfo
        title="Total 24h volume"
        statistic={formatter.format(coinsData.data.stats.total24hVolume)}
      />
      <IndexCryptoSectionGridInfo
        title="Total cryptocurrencies"
        statistic={coinsData.data.stats.total}
      />
      <IndexCryptoSectionGridInfo
        title="Total markets"
        statistic={coinsData.data.stats.totalMarkets}
      />
    </div>
  )
}

export default IndexCryptoSectionGrid
