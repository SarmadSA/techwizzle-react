import React from 'react';
import '../css/SliderBubbleBox.css';

const SliderBubbleBox = () =>{
    return(
        <div className="bubble-box">
            <span className={"bubble"} onclick="displaySelectedSlide(1)"></span> 
            <span className="bubble" onclick="displaySelectedSlide(2)"></span> 
            <span className="bubble" onclick="displaySelectedSlide(3)"></span> 
        </div>
    );
}

export default SliderBubbleBox;