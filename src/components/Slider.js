import React from 'react';
import Slide from './Slide';
import SliderBubbleBox from './SliderBubbleBox';
import PreviewsButton from './PreviewsButton';
import NextButton from './NextButton';
import '../css/Slider.css';

const Slider = () =>{
    return(
        <div className="slider-box">
            <Slide />
            <Slide />
            <Slide />

            <PreviewsButton />
            <NextButton />

            <SliderBubbleBox />
        </div>
    );
};

export default Slider;