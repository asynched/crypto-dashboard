import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import CurrencyAboutSection from '@components/CurrencyAboutSection'
import CurrencyHeadingSection from '@components/CurrencyHeadingSection'
import CurrencyChartSection from '@components/CurrencyChartSection'
import CurrencyStatisticsSection from '@components/CurrencyStatisticsSection'
import BaseLayout from '@layouts/BaseLayout'

import coinsData from '../../coins.json'

function CurrencyPage() {
  const { currencyName } = useParams()
  const [currencyData] = useState(
    coinsData.data.coins.find(({ name }) => name === currencyName)
  )

  useEffect(() => console.log(currencyData), [currencyData])

  return (
    <BaseLayout title={currencyData.name}>
      <CurrencyHeadingSection currencyData={currencyData} />
      <CurrencyChartSection currencyData={currencyData} />
      <CurrencyStatisticsSection currencyData={currencyData} />
      <CurrencyAboutSection currencyData={currencyData} />
    </BaseLayout>
  )
}

export default CurrencyPage
