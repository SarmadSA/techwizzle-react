import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Logo.css';

const Logo = () =>{
    return (
        <Link to="/">
            <div className="logo-container">
                {/*SVG Logo start*/}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.5 59" class="svg-logo">
                    <defs></defs>
                    <title>techwizzle logo</title>
                    <g id="Layer_3" data-name="Layer 3">
                        <polygon class="cls-1" points="75.5 8.37 60.25 59 45 59 60.25 7.5 75.5 7.5 75.5 8.37"/>
                        <polygon class="cls-1" points="51.5 13.29 37.75 59 24 59 37.75 12.5 51.5 12.5 51.5 13.29"/>
                        <polygon class="cls-1" points="34 1 17 59 0 59 17 0 34 0 34 1"/>
                    </g>
                </svg>
                {/*SVG Logo end*/}
                <h1 className="logo-text">TechWizzle</h1>
            </div>
        </Link>   
    );
};

export default Logo; 