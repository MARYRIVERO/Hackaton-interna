import React from 'react';
import MenuNav from './MenuNav';


const Header = ({ setType }) => {
  return (
      <header>
        <section>
          <button type="button" className="buttonBrand" onClick={() => setType('Esika')}>Esika</button>
          <button type="button" className="buttonBrand" onClick={() => setType('Cyzone')}>Cyzone</button>
          <button type="button" className="buttonBrand" onClick={() => setType('LBel')}>LBel</button>
        </section>
        <MenuNav/>
      </header>
  )
}


export default Header;
