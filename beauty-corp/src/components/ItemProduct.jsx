import React from 'react';


const ItemProduct = ({ obj, sendToCart }) => (
  <li className="text-decoration-none">
    <div id="ItemProduct">
      <img src={obj.imgUrl} alt="" />
      <h6 className="text-center">{obj.name}</h6>
      <section id="section-price">
        <p id="price">{obj.price}</p>
        <p id="priceFinal">S/. {obj.priceFinal}</p>
      </section>
      <button onClick={() => sendToCart(obj, obj.name)}>Agregar</button>
    </div>
  </li>
);


export default ItemProduct;

