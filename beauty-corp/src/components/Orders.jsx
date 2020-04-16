import React from 'react';
import ItemOrder from './ItemOrder';

const Orders = ({ dataOrders }) => {
  let totalPrice = 0;
  dataOrders.forEach((el) => {
    totalPrice += el.priceFinal * el.count;
  });
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {dataOrders.map((objOrder, i) => (
            <ItemOrder
              key={i}
              name={objOrder.name}
              priceFinal={objOrder.priceFinal}
              count={objOrder.count}
            />
          ))}
          <tr>
            <th>Total</th>
            <th>{' '}</th>
            <th>
              S/.
              {totalPrice}
            </th>
            <th>{' '}</th>
          </tr>
        </tbody>
      </table>
      <button type="submit">
        Pagar
      </button>
    </section>
)};

export default Orders;
