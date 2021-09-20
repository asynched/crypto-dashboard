import React from 'react'
import IndexCryptoSection from '@components/IndexCryptoSection'
import IndexTopCryptoSection from '@components/IndexTopCryptoSection'

function IndexPage() {
  return (
    <main className="pt-4 min-h-screen bg-gray-200">
      <IndexCryptoSection />
      <IndexTopCryptoSection />
    </main>
  )
}

export default IndexPage
