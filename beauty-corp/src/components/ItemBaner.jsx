import React from 'react';
import Banner from '../img/chicabeautycorp.jpg';
import Asesora from '../img/asesoras.png';
 const ItemBaner = () => {
    return (
      <section className="container-baner">
          <div className ="image-banner">
          <img className="icon-baner" src={Banner} alt="baner de beautycorp"></img>
          </div>
        <div className="container-baners card bg-light mb-3" >
      <div className="card-body ">
      <div className=" body-consultora row " >
      <div className="container-image col-md-6  ">
      <img src={Asesora} alt="" className="circle responsive-img"/>
      </div>
      <div className=" col-md-6 description" >
      <h5 className="name-consultora card-text text-dark">MI CONSULTORA: </h5>
        <p className="card-text text-dark mb-3">Sofía Diaz</p>
      </div>
    </div>
      </div> 
    </div>

      </section>
      

    )
}
export default ItemBaner;
