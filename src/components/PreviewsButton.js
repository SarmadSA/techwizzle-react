import React from 'react';
import '../css/NavigationButton.css';

const PreviewsButton = (props) =>{
    return(
        <div className="previews-slide">						
            <button type="button" className="slide-button" onClick={props.clickHandler}>
                <svg className="button-icon">
                    <defs>
                        <symbol id="button-icon-left" viewBox="0 0 32 32">
                            <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
                        </symbol>
                    </defs>
                    <use xlinkHref="#button-icon-left"></use>
                </svg>
            </button>
        </div>
    );
};

export default PreviewsButton;