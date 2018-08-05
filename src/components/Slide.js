import React from 'react';
import '../css/Slide.css';

const Slide = (props) => {
    return(
        <div className="slides fadeout" style={{display: props.display}}>
            <a href={props.linkTo} target="_blank">
                <div className="slide-txt">{props.children}</div>
            </a>
            <img className="slide-img" src={props.src} alt={props.alt}/>
        </div>
    );
};

export default Slide;