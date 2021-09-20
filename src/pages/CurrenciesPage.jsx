import React, { useEffect, useState } from 'react'
import BaseLayout from '@layouts/BaseLayout'
import { getUSDFormatter } from '@utils/formatters'

import CryptoCurrencyCard from '@components/CryptoCurrencyCard'

import coinsData from '../../coins.json'

function CurrenciesPage() {
  const [formatter] = useState(getUSDFormatter())
  const currencies = coinsData.data.coins

  return (
    <BaseLayout title="Currencies">
      <section className="container">
        <h1 className="mb-4 py-4 title text-4xl">Crypto currencies list</h1>
        <div className="pb-8 grid grid-cols-2 xl:grid-cols-4 gap-8">
          {currencies.map(currency => (
            <CryptoCurrencyCard
              dailyChange={currency.change}
              marketCap={formatter.format(currency.marketCap)}
              iconURL={currency.iconUrl}
              name={currency.name}
              price={formatter.format(currency.price)}
              key={currency.id}
            />
          ))}
        </div>
      </section>
    </BaseLayout>
  )
}

export default CurrenciesPage
