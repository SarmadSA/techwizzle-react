import React from 'react';
import Logo from './Logo';
import SosialmediaIcons from './SosialmediaIcons'
import '../css/Footer.css';

const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer">
            <Logo />
            <SosialmediaIcons />
            <nav id="footer-nav">
                <ul id="footer-ul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profiles</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="http://www.virusoftware.com" target="_blank">Other websites</a></li>
                </ul>
            </nav>
            <p id="development-info"> By using this site, you agree to have read and accepted the <a href="#">terms of use</a>, <a href="#">cookie</a> and <a href="#">privacy policy. </a></p>
            <p id="development-info"> Developed by virusoftware | <a href="http://www.virusoftware.com">www.virusoftware.com</a></p>
            <small id="copyright-text">&copy; 2016 - {currentYear} TechWizzle</small>
        </footer>
    );
};

export default Footer;