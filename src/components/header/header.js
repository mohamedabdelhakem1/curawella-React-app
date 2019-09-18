import React from 'react';
import './header.css';
import Logo from './logo.png'

function NavBar() {
    return (
        <header >
        <div className="header">

            <img className="logo" src={Logo} alt="LOGO"></img>
            <div>
                <h2 className="header__title">
                    curawella
            </h2>
            </div>

            <div className="list">
                <a href="*" className="Nav_bar_item">Home</a>
                <a href="*" className="Nav_bar_item">Doctors</a>
                <a href="*" className="Nav_bar_item">Symptoms</a>
                <a href="*" className="Nav_bar_item">Contact Us</a>
                <a href="*" className="Nav_bar_item">EN/عربي</a>
            </div>

        </div>
    </header>);
}
export default NavBar;

