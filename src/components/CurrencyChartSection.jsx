import React from 'react'
import { Line as LineChart } from 'react-chartjs-2'
import { filterCurrencyHistory } from '@utils/charts'

function CurrencyChartSection({ currencyData }) {
  const historyData = filterCurrencyHistory(currencyData.history)

  const chartData = {
    labels: historyData.map(item => item.label),
    datasets: [
      {
        label: currencyData.name,
        data: historyData.map(item => item.value),
        fill: true,
        backgroundColor: 'rgba(124, 58, 237, 0.5)',
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  }

  return (
    <div className="container mb-4">
      <LineChart data={chartData} />
    </div>
  )
}

export default CurrencyChartSection
