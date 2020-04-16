import React from 'react';
import imgLogo from '../img/logobeautycorp.png';
/* import imgMenu from '../img/menu.svg'; */
import imgSearch from '../img/search.svg';
import imgUser from '../img/user.svg';
import imgPurse from '../img/vector.svg';


const MenuNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="./"><img src={imgLogo} className="imgLogo"/></a>
            <a className="navbar-brand" href="./"><img src={imgSearch}/></a>
            <a className="navbar-brand" href="./"><img src={imgUser}/></a>
            <a className="navbar-brand" href="./"><img src={imgPurse}/></a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="./">Esika</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Ofertas imperdibles</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Maquillaje</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Cuidado personal</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Tratamiento corporal</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Tratamiento facial</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Fragancias</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Accesorios cosméticos</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Tiendas retail</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Catálogo virtual</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default MenuNav;
