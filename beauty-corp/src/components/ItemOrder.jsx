import React from 'react';
import minus from '../img/minus.svg';
import plus from '../img/plus.svg';

const ItemOrder = ({ name, priceFinal, count, imgUrl }) => {
  return (
    <div className="item-order-container">
      <img src={imgUrl} alt={name} className="img"/>
      <div className="description">
        <h5 className="name">{name}</h5>
        <div>
          <img src={minus} alt="dismiuir" className="btn-qty"/>
          <span>{count}</span>
          <img src={plus} alt="aumentar" className="btn-qty"/>
        </div>
        <div className="delete-price">
          <button className="btn-delete">Eliminar</button>
          <span>
            S/.
            {(priceFinal * count).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemOrder;
