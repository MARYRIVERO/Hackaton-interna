import React from 'react';
import ItemOrder from './ItemOrder';
import Places from './Places';
import sites from '../firebase/sites';
import sendRight from '../img/send-right.svg';

const Orders = ({ dataOrders }) => {
  let totalPrice = 0;
  dataOrders.forEach((el) => {
    totalPrice += el.priceFinal * el.count;
  });
  return (
    <section className="orders-container">
      <div>
        {dataOrders.map((objOrder, i) => (
          <ItemOrder
            key={i}
            name={objOrder.name}
            priceFinal={objOrder.priceFinal}
            count={objOrder.count}
            imgUrl={objOrder.imgUrl}
          />
        ))}
      </div>
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
      <button type="button" className="btn-buy">IR A COMPRAR</button>
      <p>¿Necesitas probar nuestros productos?</p>
      <p>Visítanos en</p>
      {sites.map((site, i) => <Places key={i} name={site.name} adress={site.adress} />)}
    </section>
)};

export default Orders;
