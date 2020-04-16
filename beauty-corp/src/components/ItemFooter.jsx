import React from 'react';
import IconFb from '../img/facebook.svg';
import IconTwiter from '../img/twitter.svg';
import IconInstagram from '../img/logotipo-de-instagram.svg';
import IconYotube from '../img/youtube.svg';
import Logo from '../img/logobeautycorp.png';


 const ItemFooter = () => {
    return (
     <footer className= "page-footer blue-grey lighten-4">
         <div>
         <img src= {Logo}/>
         </div>
        <div className="col l6 s12">
            <div>  
            <h5 className="black-text text-lighten-4">Libro de Reclamos</h5>
                <p className="black-text text-lighten-4">Buzon de Quejas y Sugerencias</p>
                <p className="black-text text-lighten-4">Catálogos</p>
            </div>
           <div className="row">
             <div className="col s1">
                <img className= "icon-redes z-depth-2"src= {IconFb}/>
            </div>
            <div className="col s1">
                <img className= "icon-redes z-depth-2"src=  {IconFb}/>
            </div>
            <div className="col s1">
                <img className= "icon-redes z-depth-2" src= {IconInstagram}/>
            </div>
            <div className="col s1">
                <img className= "icon-redes z-depth-2"src= {IconYotube}/>
            </div>
            
         </div>
    
                <p className="black-text text-lighten-4">Recibe oferta y promociones</p>
        </div>
        <div className="col l6 s12">
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix"></i>
          <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
          <label for="icon_prefix2">Ingrese su correo electrónico</label>
        </div>
        <div>
        <a class="waves-light btn purple darken-3">Enviar</a>
        </div>
      </div>
    </form>
  </div>        
        </div>
        <div class="footer-copyright row">
            <div class="container">
                &copy; 2020 Copyright Sistemas-BeautiCorp- Todos los derechos reservados.
                <a class="grey-text text-lighten-4 right" href="#!"></a>
            </div>
        </div>
     </footer>
    )
}
export default ItemFooter;