import React, { useState } from 'react';
import ItemOrder from './ItemOrder';
import Places from './Places';
import sites from '../firebase/sites';
import sendRight from '../img/send-right.svg';
import van from '../img/van.svg';
import store from '../img/store.svg';

const Orders = ({ dataOrders }) => {
  const [arr, setArr] = useState(dataOrders);
  const countPerOrder = (cant, name) => {
    setArr(arr.map((objOrder) => {
      if (objOrder.name === name) {
        return {
          count: cant,
          name: objOrder.name,
          priceFinal: objOrder.priceFinal,
          imgUrl: objOrder.imgUrl,
        };
      } else {
        return {
          count: objOrder.count,
          name: objOrder.name,
          priceFinal: objOrder.priceFinal,
          imgUrl: objOrder.imgUrl,
        };
      }
    }));
    console.log(arr);
  };

  console.log(arr);
  
  let totalPrice = 0;
  arr.forEach((el) => {
    totalPrice += el.priceFinal * el.count;
  });

  return (
    <section className="orders-container">
      <section className="orders">
        {dataOrders.map((objOrder, i) => (
          <ItemOrder
            key={i}
            name={objOrder.name}
            priceFinal={objOrder.priceFinal}
            count={objOrder.count}
            imgUrl={objOrder.imgUrl}
            countPerOrder={countPerOrder}
          />
        ))}
      </section>
      <section className="reception">
        <p>Puedes:</p>
        <span className="type">
          <img src={van} alt="delivery"/>
          Recibirlo en domicilio
        </span>
        <span className="type">
          <img src={store} alt="tienda"/>
          Recoger en Tienda
        </span>
      </section>
      <hr/>
      <button type="button" className="btn-send">
        <img src={sendRight} alt="enviar"/>
        Enviar pedido a mi Consultora
      </button>
      <hr/>
      <div className="subtotal">
        <span>Subtotal</span>
        <span>
          S/.
          {totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="btn-buy-group">
        <button type="button" className="btn-buy first">IR A COMPRAR</button>
        <button type="button" className="btn-buy">SEGUIR COMPRANDO</button>
      </div>
      {/* <p>¿Necesitas probar nuestros productos?</p>
      <p>Visítanos en</p>
      {sites.map((site, i) => <Places key={i} name={site.name} adress={site.adress} />)} */}
    </section>
)};

export default Orders;
