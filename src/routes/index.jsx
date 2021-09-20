import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import IndexPage from '@pages/IndexPage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
