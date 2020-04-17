import React from 'react';

const ItemProduct = ({ obj, sendToCart }) => (
  <li id="un_div">
    <h3>{obj.name}</h3>
    <img src={obj.imgUrl} alt=""/>
    <p>{obj.price}</p>
    <p>S/. {obj.priceFinal}</p>
    <button type="button" onClick={() => sendToCart(obj, obj.name)}>Comprar</button>
  </li>
);

export default ItemProduct;
