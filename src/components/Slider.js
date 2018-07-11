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

    displaySlide = (slideNumber) =>{
        let display = 'none';
        if(slideNumber === this.state.currentSlideNumber){
            display = 'block';
        }
        //console.log(display);
        return display;
    }

    goToSlide = (bubbleNumber) =>{
        this.setState({currentSlideNumber: bubbleNumber})
    }

    setBubbleClass = (bubbleNumber) =>{
        let bubbleClass = "bubble";
        if(bubbleNumber === this.state.currentSlideNumber){
            bubbleClass = "bubble active";
        }
        return bubbleClass;
    }
    
    // nextSlide = () => {
    //     this.nextSlideHandler();
    //     this.displaySlide(this.state.currentSlideNumber);
    // }

    // autoSlide = () => {
    //     this.setInterval(this.nextSlide, 1000);
    // }

    render(){
        return(
            <div className="slider-box">
                <Slide display = {this.displaySlide(0)} src={require('../images/slideOne.jpg')} alt="slide one img">This is slide number one and it is just a test</Slide>
                <Slide display = {this.displaySlide(1)} src={require('../images/slideTwo.jpg')} alt="slide two img">This is slide number two and it is just a test</Slide>
                <Slide display = {this.displaySlide(2)} src={require('../images/tech.jpg')} alt="slide three img">This is slide number three and it is just a test</Slide>

                <PreviewsButton clickHandler = {this.prevSlideHandler}/>
                <NextButton clickHandler = {this.nextSlideHandler} />

                <div className="bubble-box">
                    <SliderBubble clickHandler = {() => this.goToSlide(0)} className={this.setBubbleClass(0)}/>
                    <SliderBubble clickHandler = {() => this.goToSlide(1)} className={this.setBubbleClass(1)}/>
                    <SliderBubble clickHandler = {() => this.goToSlide(2)} className={this.setBubbleClass(2)}/>
                </div>
            </div>
        )
    };
};