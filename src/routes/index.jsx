import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import IndexPage from '@pages/IndexPage'
import CurrencyPage from '@pages/CurrencyPage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/currencies/:currencyName" component={CurrencyPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
