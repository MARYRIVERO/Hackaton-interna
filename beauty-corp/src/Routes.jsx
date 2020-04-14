import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </HashRouter>
  )};

export default Routes;