import { getUSDFormatter } from '@utils/formatters'
import React, { useState } from 'react'

function ExchangeAccordion({ exchange }) {
  const [formatter] = useState(getUSDFormatter())

  return (
    <details
      className="bg-gray-100 rounded overflow-hidden shadow-xl"
      key={exchange.id}
    >
      <summary className="p-4 flex items-center justify-between">
        <img src={exchange.iconUrl} alt={exchange.name} className="w-8 h-8" />
        <h1>{exchange.name}</h1>
        <p>{formatter.format(exchange.volume)}</p>
        <p>{exchange.markets}</p>
      </summary>
      <div className="p-6 pb-8">
        <h2 className="title text-2xl">{exchange.name}</h2>
        <div
          className="prose"
          style={{
            maxWidth: 'none',
          }}
          dangerouslySetInnerHTML={{ __html: exchange.description }}
        ></div>
      </div>
    </details>
  )
}

export default ExchangeAccordion
