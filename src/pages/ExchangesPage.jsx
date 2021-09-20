import React, { useEffect, useState } from 'react'
import BaseLayout from '@layouts/BaseLayout'

import exchangesData from '../../exchanges.json'
import { getUSDFormatter } from '@utils/formatters'

function ExchangesPage() {
  const exchanges = exchangesData.data.exchanges
  const [formatter] = useState(getUSDFormatter())

  useEffect(() => console.log(exchanges), [exchanges])

  return (
    <BaseLayout title="Exchanges">
      <section className="container">
        <h1 className="py-4 title text-4xl">Exchanges list</h1>
        <div class="grid gap-4">
          {exchanges.map(exchange => (
            <details
              className="bg-gray-100 rounded overflow-hidden shadow-xl"
              key={exchange.id}
            >
              <summary className="p-4 flex items-center justify-between">
                <img
                  src={exchange.iconUrl}
                  alt={exchange.name}
                  className="w-8 h-8"
                />
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
          ))}
        </div>
      </section>
    </BaseLayout>
  )
}

export default ExchangesPage
