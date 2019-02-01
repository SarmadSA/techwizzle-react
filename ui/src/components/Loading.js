import React from 'react';
import '../css/Loading.css';

const Loading = () =>{
    return(
        <div className="loading-component-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.5 59" className="loading-icon-svg">
                <defs></defs>
                <title>techwizzle logo</title>
                <g id="Layer_3" data-name="Layer 3" className="loading-icon-group">
                    <polygon className="loading-icon loading-p1" points="75.5 8.37 60.25 59 45 59 60.25 7.5 75.5 7.5 75.5 8.37"/>
                    <polygon className="loading-icon loading-p2" points="51.5 13.29 37.75 59 24 59 37.75 12.5 51.5 12.5 51.5 13.29"/>
                    <polygon className="loading-icon loading-p3" points="34 1 17 59 0 59 17 0 34 0 34 1"/>
                </g>
            </svg>
        </div>
    );
};

export default Loading;