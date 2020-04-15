import React from 'react';
import MenuNav from './MenuNav';
import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <header>
            <section>
                <Button variant="secondary">LBel</Button>{' '}
                <Button variant="secondary">Esika</Button>{' '}
                <Button variant="secondary">Cyzone</Button>{' '}
            </section>
            <MenuNav />
        </header>
    )
}

export default Header;
