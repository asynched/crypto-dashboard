import React from 'react'

import BaseLayout from '@layouts/BaseLayout'

import ExchangeAccordion from '@components/ExchangeAccordion'
import ExchangesVolumeChart from '@components/ExchangesVolumeChart'

import exchangesData from '../../exchanges.json'

function ExchangesPage() {
  const exchanges = exchangesData.data.exchanges

  return (
    <BaseLayout title="Exchanges">
      <section className="container">
        <h1 className="py-4 title text-4xl">Exchanges list</h1>
        <p>Check out the information about some of the exchanges</p>
        <ExchangesVolumeChart exchanges={exchanges} />
        <div className="grid gap-4">
          {exchanges.map(exchange => (
            <ExchangeAccordion key={exchange.id} exchange={exchange} />
          ))}
        </div>
      </section>
    </BaseLayout>
  )
}

export default ExchangesPage
