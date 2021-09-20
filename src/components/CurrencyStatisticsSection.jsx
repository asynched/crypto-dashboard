import React, { useState } from 'react'
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  HashtagIcon,
  InformationCircleIcon,
  LightningBoltIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline'
import { getUSDFormatter } from '@utils/formatters'

import CurrencyStatisticsSectionInfoContainer from './CurrencyStatisticsSectionInfoContainer'

function CurrencyStatisticsSection({ currencyData }) {
  const [formatter] = useState(getUSDFormatter())

  return (
    <section className="my-8 container grid grid-cols-2 gap-4">
      <div className="">
        <h1 className="mb-4 title text-4xl">
          {currencyData.name} value statistics
        </h1>
        <p className="mb-2">
          An overview showing the statistics of {currencyData.name} such as base
          and quote currency, the rank and the trading volume.
        </p>
        <div>
          <CurrencyStatisticsSectionInfoContainer
            title="Price to USD"
            data={formatter.format(currencyData.price)}
            icon={<CurrencyDollarIcon className="w-6 h-6 text-gray-800" />}
          />
          <CurrencyStatisticsSectionInfoContainer
            title="Rank"
            data={currencyData.rank}
            icon={<HashtagIcon className="w-6 h-6 text-gray-800" />}
          />
          <CurrencyStatisticsSectionInfoContainer
            title="24 hour volume"
            data={formatter.format(currencyData.volume)}
            icon={<LightningBoltIcon className="w-6 h-6 text-gray-800" />}
          />
          <CurrencyStatisticsSectionInfoContainer
            title="Market cap"
            data={formatter.format(currencyData.marketCap)}
            icon={<CurrencyDollarIcon className="w-6 h-6 text-gray-800" />}
          />
          <CurrencyStatisticsSectionInfoContainer
            title="All time high"
            data={formatter.format(currencyData.allTimeHigh.price)}
            icon={<TrendingUpIcon className="w-6 h-6 text-gray-800" />}
          />
        </div>
      </div>
      <div>
        <h1 className="mb-4 title text-4xl">Other statistics info</h1>
        <p className="mb-2">
          An overview showing the statistics of {currencyData.name} such as base
          and quote currency, the rank and the trading volume.
        </p>
        <div>
          <CurrencyStatisticsSectionInfoContainer
            title="Number of markets"
            data={currencyData.numberOfMarkets}
            icon={<ChartBarIcon className="w-6 h-6 text-gray-800" />}
          />
          <CurrencyStatisticsSectionInfoContainer
            title="Number of exchanges"
            data={currencyData.numberOfExchanges}
            icon={<CurrencyDollarIcon className="w-6 h-6 text-gray-800" />}
          />
          <CurrencyStatisticsSectionInfoContainer
            title="Approved supply"
            data={currencyData.approvedSupply ? 'Yes' : 'No'}
            icon={<InformationCircleIcon className="w-6 h-6 text-gray-800" />}
          />
          <CurrencyStatisticsSectionInfoContainer
            title="Total supply"
            data={formatter.format(currencyData.totalSupply)}
            icon={<InformationCircleIcon className="w-6 h-6 text-gray-800" />}
          />
          <CurrencyStatisticsSectionInfoContainer
            title="Circulating supply"
            data={formatter.format(currencyData.circulatingSupply)}
            icon={<InformationCircleIcon className="w-6 h-6 text-gray-800" />}
          />
        </div>
      </div>
    </section>
  )
}

export default CurrencyStatisticsSection
