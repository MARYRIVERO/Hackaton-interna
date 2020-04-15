import React from 'react';
/* import imgSearch from '../img/search-engine.png';
import imgUser from '../img/user.png';
import imgPurse from '../img/purse.png'; */

const Header = ({ setType }) => {
  return (
    <section>
      <header>
        <section>
          <button type="button" className="" onClick={() => setType('Esika')}>Esika</button>
          <button type="button" className="" onClick={() => setType('Cyzone')}>Cyzone</button>
          <button type="button" className="" onClick={() => setType('LBel')}>LBel</button>

        </section>
        <section>
          <nav>
            <h3>Belcorp</h3>
            <div>
              <img /* src={imgSearch}  */ alt="" />
              <img /* src={imgUser} */ alt="" />
              <img /* src={imgPurse} */ alt="" />
            </div>
          </nav>
        </section>    
      </header>
    </section>
  )
}

export default Header;
