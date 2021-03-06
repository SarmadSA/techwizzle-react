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
    };
    
    nextSlideHandler = () =>{
        let nextSlideNumber = this.state.currentSlideNumber;
        nextSlideNumber++;

        if(nextSlideNumber >= this.state.maxSlideNumber){
            nextSlideNumber = this.state.minSlideNumber;
        }
        this.setState({currentSlideNumber: nextSlideNumber});
        //console.log(nextSlideNumber);
    };

    prevSlideHandler = () =>{
        let prevSlideNumber = this.state.currentSlideNumber;
        prevSlideNumber--;

        if(prevSlideNumber < this.state.minSlideNumber){
            prevSlideNumber = this.state.maxSlideNumber - 1;
        }
        this.setState({currentSlideNumber: prevSlideNumber});
        //console.log(prevSlideNumber);
    };

    displaySlide = (slideNumber) =>{
        let display = 'none';
        if(slideNumber === this.state.currentSlideNumber){
            display = 'block';
        }
        //console.log(display);
        return display;
    };

    goToSlide = (bubbleNumber) =>{
        this.setState({currentSlideNumber: bubbleNumber})
    };

    setBubbleClass = (bubbleNumber) =>{
        let bubbleClass = "bubble";
        if(bubbleNumber === this.state.currentSlideNumber){
            bubbleClass = "bubble active";
        }
        return bubbleClass;
    };
    
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
                <Slide display = {this.displaySlide(0)} linkTo="https://youtu.be/KMWgmkBwAB0" src={require('../images/gta_5_gtx_1060_4.jpg')} alt="slide one img">GTA 5 tested with GTX 1060 at Ultra and Low settings (Video)</Slide>
                <Slide display = {this.displaySlide(1)} linkTo="https://youtu.be/0pTxAuYdCbA" src={require('../images/recon_gtx_1060_2.jpg')} alt="slide two img">Ghost Recon Wildlands tested with GTX 1060 at Ultra and Low settings (Video)</Slide>
                <Slide display = {this.displaySlide(2)} linkTo="https://youtu.be/BaEj2Tk13rI" src={require('../images/bf1_gtx_1060.jpg')} alt="slide three img">Battlefield 1 tested with GTX 1060 at Ultra and Low settings (Video)</Slide>

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