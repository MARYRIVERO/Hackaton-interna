import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';

const Routes = () => {
  const [type, setType] = useState();
  const [category, setCategory] = useState();
  const [show, setShow] = useState(false);
  return (
    <BrowserRouter>
      <Header setType={setType} setCategory={setCategory} show={show} setShow={setShow}/>
      <Switch>
        <Route exact path='/'><Home type={type} category={category} show={show}/></Route>
        <Route path='/Login' component={Login} />
        <Route path='/ShoppingCart' component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  )};

export default Routes;
