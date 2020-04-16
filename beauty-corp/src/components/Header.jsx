import React from 'react';
import { Link } from 'react-router-dom';
import MenuNav from './MenuNav';

const Header = ({ setType, setCategory }) => {

  return (
      <header>
        <section>
          <button type="button" className="buttonBrand" onClick={() => setType('Esika')}>Esika</button>
          <button type="button" className="buttonBrand" onClick={() => setType('Cyzone')}>Cyzone</button>
          <button type="button" className="buttonBrand" onClick={() => setType('LBel')}>LBel</button>
          {/* <Link to="/ShoppingCart"><button>Carrito</button></Link> */}
        </section>
        <MenuNav setCategory={setCategory} />
      </header>
  )
}


export default Header;
