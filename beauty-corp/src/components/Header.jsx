import React from 'react';
import { Link } from 'react-router-dom';
import MenuNav from './MenuNav';

const Header = ({ setType, setCategory, show, setShow, setSearch}) => {

  return (
      <header>
        <section>
          <button type="button" className="buttonBrand" onClick={() => setType('Esika', setSearch('')) }>Bella</button>
          <button type="button" className="buttonBrand" onClick={() => setType('Cyzone', setSearch(''))}>MakeUp</button>
          <button type="button" className="buttonBrand" onClick={() => setType('LBel', setSearch(''))}>Natural</button>
          {/* <Link to="/ShoppingCart"><button>Carrito</button></Link> */}
        </section>
        <MenuNav setCategory={setCategory} show={show} setShow={setShow} setSearch={setSearch}/>
      </header>
  )
}

export default Header;
