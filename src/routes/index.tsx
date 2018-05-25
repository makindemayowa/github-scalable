import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeLayout from 'layouts/HomeLayout'
import 'assets/css/core.min.css'
import 'assets/css/thesaas.min.css'
import 'assets/css/style.css'

export default () => (
  <Switch>
    <Route component={HomeLayout} />
  </Switch>
)
