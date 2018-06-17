import React from 'react';
import Logo from './Logo';
import '../css/Header.css';


const Header = () =>{
    return (
        <header>
            <nav className="nav-menu">
                <Logo />
                <ul id="navigation-ul">
                    <li className="list-element"><a href="#">Profiles</a></li>
                    <li className="list-element"><a href="#">Compare</a></li>
                    <li className="list-element"><a href="#">About</a></li> 
                    <li className="list-element"><a href="#">Contact us</a></li> 
                </ul>
            </nav>
        </header>
    );
};

export default Header; 