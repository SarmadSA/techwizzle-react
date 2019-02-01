import React from 'react';
import '../css/SliderBubble.css';

const SliderBubble = (props) =>{
    return(
        <span className={props.className} onClick={props.clickHandler}></span>
    );
};

export default SliderBubble;