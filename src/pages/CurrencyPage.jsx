import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import CurrencyAboutSection from '@components/CurrencyAboutSection'
import CurrencyHeadingSection from '@components/CurrencyHeadingSection'

import coinsData from '../../coins.json'
import CurrencyChartSection from '@components/CurrencyChartSection'
import CurrencyStatisticsSection from '@components/CurrencyStatisticsSection'

function CurrencyPage() {
  const { currencyName } = useParams()
  const [currencyData] = useState(
    coinsData.data.coins.find(({ name }) => name === currencyName)
  )

  useEffect(() => console.log(currencyData), [currencyData])

  return (
    <main className="min-h-screen bg-gray-200">
      <CurrencyHeadingSection currencyData={currencyData} />
      <CurrencyChartSection currencyData={currencyData} />
      <CurrencyStatisticsSection currencyData={currencyData} />
      <CurrencyAboutSection currencyData={currencyData} />
    </main>
  )
}

export default CurrencyPage
