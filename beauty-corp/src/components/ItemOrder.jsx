import React, { useState } from 'react';
import minus from '../img/minus.svg';
import plus from '../img/plus.svg';

const ItemOrder = ({ name, priceFinal, count, imgUrl, countPerOrder }) => {
  const [num, setNum] = useState(count);
  
  return (
    <div className="item-order-container">
      <img src={imgUrl} alt={name} className="img"/>
      <div className="description">
        <h5 className="name">{name}</h5>
        <div>
          <button type="button" className="btn-container" disabled={num < 2} onClick={(e) => {
            e.preventDefault();
            setNum(num - 1);
            countPerOrder(num - 1, name);
          }}>
            <img src={minus} alt="dismiuir" className="btn-qty"/>
          </button>
          <span className="count">{num}</span>
          <button type="button" className="btn-container" onClick={(e) => {
            e.preventDefault();
            setNum(num + 1);
            countPerOrder(num + 1, name);
          }}>
            <img src={plus} alt="aumentar" className="btn-qty"/>
          </button>
        </div>
        <div className="delete-price">
          <button className="btn-delete">Eliminar</button>
          <span>
            S/.
            {(priceFinal * num).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemOrder;
