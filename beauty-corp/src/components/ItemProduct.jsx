import React from 'react';

const ItemProduct = ({ obj }) => (
  <li>
    <h3>{obj.name}</h3>
    <img src={obj.imgUrl} alt=""/>
    <p>{obj.price}</p>
    <p>S/. {obj.priceFinal}</p>
    <button type="button">Comprar</button>
  </li>
);

export default ItemProduct;
