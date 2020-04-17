import React from 'react';
import IconFb from '../img/facebook.svg';
import IconTwiter from '../img/twitter.svg';
import IconInstagram from '../img/logotipo-de-instagram.svg';
import IconYotube from '../img/youtube.svg';
import Logo from '../img/logobeautycorp.png';

 const ItemFooter = () => {
    return (
     <footer className= "page-footer ">

   

 
    <div className=" conten-home text-center center-block">
        <div className= "logo-footer">
         <img src= {Logo}/>
         </div>
            <p className="txt-railway">- Libro de Reclamos -</p>
            <p className="txt-railway">- Buzón de Quejas y sugerencias -</p>
            <p className="txt-railway">- Catálogos -</p>

            <div className ="table-red-social">
            <img className= "fa  fa-3x social"src= { IconFb }/>
            <img className= "fa  fa-3x social"src= { IconInstagram }/>
            <img className= " fa-3x social"src= { IconTwiter }/>
             <img className= "fa  fa-3x social"src= { IconYotube }/>
            </div>
         
            <p className="txt-railway">- Recibe Promociones Ofertas. Noticias -</p> 
            <section className="body-input">
        
            <input type="text"  className="firstname" placeholder="Correo Electrónico."/>

            </section>  
            <div className="button-header">
                <button type="button" >Enviar</button>
            </div>
             <div className="footer-copyright row">
            <div className="container">
                &copy; 2020 Copyright Sistemas-BeautiCorp- Todos los derechos reservados.
                <a className="grey-text text-lighten-4 right" href="#!"></a>
            </div>
        </div>

</div>

     </footer>
    )
}
export default ItemFooter;