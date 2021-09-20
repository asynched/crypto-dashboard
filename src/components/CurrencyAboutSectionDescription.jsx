import React from 'react'

function CurrencyAboutSectionDescription({ currencyData }) {
  return (
    <div>
      <h2 className="mb-6 title text-2xl">What is {currencyData.name}?</h2>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: currencyData.description }}
      ></div>
    </div>
  )
}

export default CurrencyAboutSectionDescription
