import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import IndexPage from '@pages/IndexPage'
import CurrencyPage from '@pages/CurrencyPage'
import CurrenciesPage from '@pages/CurrenciesPage'
import ExchangesPage from '@pages/ExchangesPage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/currencies" component={CurrenciesPage} />
        <Route path="/currencies/:currencyName" component={CurrencyPage} />
        <Route path="/exchanges" component={ExchangesPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
