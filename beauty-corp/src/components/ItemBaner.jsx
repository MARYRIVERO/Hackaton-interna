import React from 'react';
import Banner from '../img/chicabeautycorp.jpg';
import Asesora from '../img/asesoras.png';
 const ItemBaner = () => {
    return (
      <div className="container-baner">
          <div className ="image-banner">
          <img className="icon-baner" src={Banner} alt="baner de beautycorp"></img>
          </div>
            <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
                <div class="col s2">
                 <img src={Asesora} alt="" class="circle responsive-img"/>
            </div>
            <div className="col s10">
                <span className="black-text">
                 MI CONSULTORA:
                </span>
                <h5>Sofía Diaz</h5>
            </div>
            </div>
            </div>
        </div>  
      </div>
      
      
      
    )
}
export default ItemBaner;
