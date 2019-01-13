import React from 'react';
import '../css/NavigationButton.css';

const NextButton = (props) =>{
    return(
        <div className="next-slide">
            <button type="button" className="slide-button" onClick={props.clickHandler}>
                <svg className="button-icon">
                    <defs>
                        <symbol id="button-icon-right" viewBox="0 0 32 32">
                            <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"/>
                        </symbol>
                    </defs>
                    <use xlinkHref="#button-icon-right"/>
                </svg>
            </button>				
        </div>
    );
};

export default NextButton;