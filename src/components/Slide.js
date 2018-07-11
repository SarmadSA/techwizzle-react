import React from 'react';
import '../css/Slide.css';

const Slide = (props) => {
    return(
        <div className="slides fadeout" style={{display: props.display}}>
            <div className="slide-txt">{props.children}</div>
            <img className="slide-img" src={props.src} alt={props.alt}/>
        </div>
    );
};

export default Slide;