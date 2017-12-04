/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Route } from 'react-router-dom'

import PageWrapper from './components/page-wrapper';

import Home from './pages/home';
import Clock from './pages/clock';

export default () => (
  <PageWrapper>
    <Route exact path="/" component={Home}/>
    <Route exact path="/clock" component={Clock}/>
  </PageWrapper>
);
