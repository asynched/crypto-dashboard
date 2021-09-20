import React from 'react'
import CurrencyAboutSectionDescription from './CurrencyAboutSectionDescription'
import CurrencyAboutSectionLinks from './CurrencyAboutSectionLinks'

function CurrencyAboutSection({ currencyData }) {
  return (
    <section className="pb-8 container grid grid-cols-2">
      <CurrencyAboutSectionDescription currencyData={currencyData} />
      <CurrencyAboutSectionLinks currencyData={currencyData} />
    </section>
  )
}

export default CurrencyAboutSection
