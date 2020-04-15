import React from 'react';
/* import imgSearch from '../img/search-engine.png';
import imgUser from '../img/user.png';
import imgPurse from '../img/purse.png'; */

const Header = () => {
    return (
        <header>
            <section>
                <button>LBel</button>
                <button>Esika</button>
                <button>Cyzone</button>
            </section>
            <section>
                <nav>
                    <h3>Belcorp</h3>
                    <div>
                        <img /* src={imgSearch}  */alt="" />
                        <img /* src={imgUser} */ alt="" />
                        <img /* src={imgPurse} */ alt="" />
                    </div>
                </nav>
            </section>
        </header>
    )
}

export default Header;
