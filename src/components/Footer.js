import React from 'react';
import Logo from './Logo';
import SosialmediaIcons from './SosialmediaIcons'
import {Link} from 'react-router-dom';
import '../css/Footer.css';

const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer">
            <Logo />
            <SosialmediaIcons />
            <nav id="footer-nav">
                <ul id="footer-ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profiles">Profiles</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="http://www.virusoftware.com" target="_blank">Other websites</a></li>
                </ul>
            </nav>
            <p id="development-info"> By using this site, you agree to have read and accepted the <a href="#">terms of use</a>, <a href="#">cookie</a> and <a href="#">privacy policy. </a></p>
            <p id="development-info"> Developed by virusoftware | <a href="http://www.virusoftware.com" target='_blank'>www.virusoftware.com</a></p>
            <small id="copyright-text">&copy; 2016 - {currentYear} TechWizzle</small>
        </footer>
    );
};

export default Footer;