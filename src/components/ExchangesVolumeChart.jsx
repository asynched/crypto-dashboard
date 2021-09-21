import React from 'react'
import { Bar as BarChart } from 'react-chartjs-2'
import { filterExchangeVolume } from '@utils/charts'

function ExchangesVolumeChart({ exchanges }) {
  const chartData = filterExchangeVolume(exchanges)

  return (
    <div className="mt-4 mb-8">
      <BarChart
        data={{
          labels: chartData.map(item => item.name),
          datasets: [
            {
              label: 'Volume',
              backgroundColor: 'rgba(124, 58, 237, 0.5)',
              data: chartData.map(item => +item.volume),
            },
          ],
        }}
      />
    </div>
  )
}

export default ExchangesVolumeChart
