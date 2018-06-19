import React from 'react';
import '../css/Slide.css';

const Slide = (props) => {
    return(
        <div className="slides fadeout">
            <div className="slide-txt">test {props.children}</div>
            <img className="slide-img" src={require('../images/tech.jpg')} alt={props.alt}/>
        </div>
    );
};

export default Slide;