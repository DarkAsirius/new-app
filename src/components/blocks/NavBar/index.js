import React, { useState } from 'react';
import '../NavBar/NavBar.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="#about"><img src="../../../logo.png" alt="logo1" /></a>
            </div>
            <a href="#about"><div className="title">Чайная "На Заре"</div></a>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Символ гамбургера */}
            </div>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <a href="#tea">Чай</a>
                <a href="#gallery">Галерея</a>
                <a href="#map1">Контакты</a>
            </nav>
        </header>
    );
};

export default Header;