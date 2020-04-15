import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/ShoppingCart' component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  )};

export default Routes;
