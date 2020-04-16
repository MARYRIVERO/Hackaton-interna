import React from 'react';
import { Slide } from 'react-slideshow-image';

const imageOferst = [
'https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_141931.png?alt=media&token=b2ac14f1-45a3-49ef-bc77-4a4e434d9e4b',
'https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_142053.png?alt=media&token=5626417c-32f0-47be-98ae-28220e447c9a',
'https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_141847.png?alt=media&token=3039bc40-8393-45c5-b2f1-b65bf4231e6d',
'https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_141806.png?alt=media&token=8496c9b6-cfb4-403b-b695-4c866f38d179',
'https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_141958.png?alt=media&token=5a57f647-c3b0-49c5-96e5-97613197be78',

];
const properties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  }

const ItemCarruselOfferst = () => {
    return (
      <div className="container-carrusel slide-container">
        <Slide {...properties} >
          <div className="slide-container">
          <img src= {imageOferst[0]}/> 
            <p className="p-center bold">LBEL</p>
            <p className="p-center">Promo Maquillaje</p>
          </div>
          <div className="slide-container">
          <img src= {imageOferst[1]}/> 
            <p className="p-center bold">LBEL</p>
            <p className="p-center">Promo Maquillaje</p>
          </div>
          <div className="slide-container">
          <img src= {imageOferst[2]}/> 
            <p className="p-center bold">ESIKA</p>
            <p className="p-center">Pack Set</p>
          </div>
          <div className="slide-container">
          <img src= {imageOferst[3]}/> 
            <p className="slide-container">ESIKA</p>
            <p className="p-center">Promo Fragancia</p>
          </div>
          <div className="slide-container">
          <img src= {imageOferst[4]}/> 
            <p className="p-center bold">CYZONE</p>
            <p className="p-center">Promo Maquillaje</p>
          </div>
        </Slide>
      </div>
    )
}

export default ItemCarruselOfferst;