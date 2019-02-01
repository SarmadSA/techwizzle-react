import React from 'react';
import '../css/LoadButton.css';

const LoadButton = (props) =>{
    return (
        <div className="load-button" onClick={props.clickHandler}>
            <div>
                {props.children}
            </div>
            <div className="load-icon-container bounce">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.35 25.35">
                    <title>Load More</title>
                    <line className="load-more-icon" x1="0.18" y1="0.18" x2="25.18" y2="25.18"/>
                    <line className="load-more-icon" x1="50.18" y1="0.18" x2="25.18" y2="25.18"/>
                </svg>

            </div>
        </div>
    );
};

export default LoadButton;