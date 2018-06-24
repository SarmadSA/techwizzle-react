import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';
import '../css/Header.css';


const Header = () =>{
    return (
        <header>
            <nav className="nav-menu">
                <Logo />
                <ul id="navigation-ul">
                    <li className="list-element"><Link to="/profiles">Profiles</Link></li>
                    <li className="list-element"><Link to="/compare">Compare</Link></li>
                    <li className="list-element"><Link to="/about">About</Link></li> 
                    <li className="list-element"><Link to="/contact">Contact us</Link></li> 
                </ul>
            </nav>
        </header>
    );
};

export default Header;