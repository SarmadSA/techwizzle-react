import React from 'react';
import Slide from './Slide';
import SliderBubbleBox from './SliderBubbleBox';
import PreviewsButton from './PreviewsButton';
import NextButton from './NextButton';
import '../css/Slider.css';

const Slider = () =>{
    return(
        <div className="slider-box">
            <Slide src={require('../images/tech.jpg')}/>
            <Slide display={testet()}/>
            <Slide display="none"/>

            <PreviewsButton />
            <NextButton />

            <SliderBubbleBox />
        </div>
    );
};

export default Slider;

function testet(){
    return "none";
}