import React from 'react'

import BaseLayout from '@layouts/BaseLayout'
import IndexCryptoSection from '@components/IndexCryptoSection'
import IndexTopCryptoSection from '@components/IndexTopCryptoSection'

function IndexPage() {
  return (
    <BaseLayout>
      <IndexCryptoSection />
      <IndexTopCryptoSection />
    </BaseLayout>
  )
}

export default IndexPage
