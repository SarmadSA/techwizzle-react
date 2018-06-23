import React, {Component} from 'react';
import Slide from './Slide';
import SliderBubble from './SliderBubble';
import PreviewsButton from './PreviewsButton';
import NextButton from './NextButton';
import '../css/Slider.css';



export default class Slider extends Component{

    state = {
        maxSlideNumber : 3,
        minSlideNumber : 0,
        currentSlideNumber : 0
    }
};