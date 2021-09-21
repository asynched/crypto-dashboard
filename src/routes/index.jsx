import LoadingContainer from '@components/LoadingContainer'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
const IndexPage = React.lazy(() => import('@pages/IndexPage'))
const CurrencyPage = React.lazy(() => import('@pages/CurrencyPage'))
const CurrenciesPage = React.lazy(() => import('@pages/CurrenciesPage'))
const ExchangesPage = React.lazy(() => import('@pages/ExchangesPage'))

function Routes() {
  return (
    <React.Suspense fallback={<LoadingContainer />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/currencies" component={CurrenciesPage} />
          <Route path="/currencies/:currencyName" component={CurrencyPage} />
          <Route path="/exchanges" component={ExchangesPage} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default Routes
