import React from 'react'

function CurrencyHeadingSection({ currencyData }) {
  return (
    <section className="pt-4 mb-8 container">
      <h1 className="mb-2 text-center title text-4xl">
        {currencyData.name} - {currencyData.symbol}
      </h1>
      <p className="text-center">
        {currencyData.name} live price in US dollars (USD). View value
        statistics, market cap and supply.
      </p>
    </section>
  )
}

export default CurrencyHeadingSection
