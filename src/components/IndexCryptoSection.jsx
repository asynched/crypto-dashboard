import React from 'react'
import IndexCryptoSectionGrid from './IndexCryptoSectionGrid'

function IndexCryptoSection() {
  return (
    <section className="container mb-8">
      <h1 className="py-4 title text-4xl">Global crypto statistics</h1>
      <IndexCryptoSectionGrid />
    </section>
  )
}

export default IndexCryptoSection
