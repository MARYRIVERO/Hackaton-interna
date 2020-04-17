import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../img/logobeautycorp.png';
/* import imgMenu from '../img/menu.svg'; */
import imgSearch from '../img/search.svg';
import imgUser from '../img/user.svg';
import imgPurse from '../img/vector.svg';
import imgModa from '../img/moda.svg'

const MenuNav = ({setCategory, show, setShow, search, setSearch}) => {

    return (
    <section className="row">
    <div className="col-12 pl-0 pr-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="./homepage"><img src={imgLogo} className="imgLogo"/></a>
            <a className="navbar-brand" href="./"><img src={imgModa}/></a>
            <spam className="navbar-brand" onClick={() => setShow(show === true ? false : true)}><img src={imgSearch}/></spam>
            <Link to="/Login"><a className="navbar-brand" href="./"><img src={imgUser}/></a></Link>
            <Link to="/ShoppingCart"><a className="navbar-brand" href="./"><img src={imgPurse}/></a></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active text-center">
                        <a className="navbar-brand text-center" href="./">Esika</a>
                    </li>
                    <li className="nav-item active text-center">
                        <a className="nav-link" href="./">Ofertas imperdibles</a>
                    </li>
                    <li className="nav-item active">
                        <spam className="nav-link" onClick={() => setCategory('Maquillaje',setSearch(''))}>Maquillaje</spam>
                    </li>
                    <li className="nav-item active">
                        <spam className="nav-link" onClick={() => setCategory('Cuidado Personal', setSearch(''))}>Cuidado Personal</spam>
                    </li>
                    <li className="nav-item active">
                        <spam className="nav-link" onClick={() => setCategory('Tratamiento Corporal', setSearch(''))}>Tratamiento Corporal</spam>
                    </li>
                    <li className="nav-item active">
                        <spam className="nav-link" onClick={() => setCategory('Tratamiento Facial', setSearch(''))}>Tratamiento Facial</spam>
                    </li>
                    <li className="nav-item active">
                        <spam className="nav-link" onClick={() => setCategory('Fragancias', setSearch(''))}>Fragancias</spam>
                    </li>
                    <li className="nav-item active">
                        <spam className="nav-link" onClick={() => setCategory('Accesorios Cosmeticos', setSearch(''))}>Accesorios Cosméticos</spam>
                    </li>
                    <li className="nav-item active">
                        <spam className="nav-link" >Tiendas retail</spam>
                    </li>
                    <li className="nav-item active">
                        <spam className="nav-link" >Catálogo virtual</spam>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        </section>
    )
};

export default MenuNav;
