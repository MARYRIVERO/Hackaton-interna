import React from 'react';
import { useHistory } from "react-router-dom";
import Orders from './Orders';
import arrow from '../img/arrow-left.svg';

const ShoppingCart = () => {
  const history = useHistory();

  const dataOrders = JSON.parse(localStorage.getItem('arrayProducts'));
  console.log(JSON.parse(localStorage.getItem('arrayProducts')));
  
  return (
    <main className="shop-cart-container">
      <section className="title-container">
        <img src={arrow} alt="regresar" onClick={() => {
          history.push('/');
        }}/>
        <h2 className="title">BOLSA DE COMPRAS</h2>
      </section>
      <Orders dataOrders={dataOrders}/>
    </main>
  );
};

export default ShoppingCart;
