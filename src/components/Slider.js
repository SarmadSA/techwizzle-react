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
    
    nextSlideHandler = () =>{
        let nextSlideNumber = this.state.currentSlideNumber;
        nextSlideNumber++;

        if(nextSlideNumber >= this.state.maxSlideNumber){
            nextSlideNumber = this.state.minSlideNumber;
        }
        this.setState({currentSlideNumber: nextSlideNumber});
        //console.log(nextSlideNumber);
    }

    prevSlideHandler = () =>{
        let prevSlideNumber = this.state.currentSlideNumber;
        prevSlideNumber--;

        if(prevSlideNumber < this.state.minSlideNumber){
            prevSlideNumber = this.state.maxSlideNumber - 1;
        }
        this.setState({currentSlideNumber: prevSlideNumber});
        //console.log(prevSlideNumber);
    }
};