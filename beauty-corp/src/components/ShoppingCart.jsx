import React from 'react';
import Orders from './Orders';

const ShoppingCart = () => {
  const dataOrders = JSON.parse(localStorage.getItem('arrayProducts'));
  console.log(JSON.parse(localStorage.getItem('arrayProducts')));
  
  return (
    <main>
      <Orders dataOrders={dataOrders}/>
    </main>
  );
};

export default ShoppingCart;
