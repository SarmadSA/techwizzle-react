"use strict";

let currentSlideNumber = 1;
const slidesArray = document.getElementsByClassName("slides");
const bubbleArray = document.getElementsByClassName("bubble");

displaySelectedSlide(currentSlideNumber); // runs at start only
autoSlide(10000);// auto-slide, repeats every 10 seconds



function increaseSlide(){
	currentSlideNumber++;
	if (currentSlideNumber > slidesArray.length) {
		currentSlideNumber = 1;
 	}  
}

function decreaseSlide(){
	currentSlideNumber--;
	if (currentSlideNumber < 1) {
		currentSlideNumber = slidesArray.length;
 	}
}

function hideAllSlides(){
	for (let i = 0; i < slidesArray.length; i++) {
		slidesArray[i].style.display = "none"; 
		bubbleArray[i].className = bubbleArray[i].className.replace(" active", ""); // replaces all bubble elements with class name active to "". 
	}
}

function displaySlide(number){
	hideAllSlides();
	//show the slide with the given number
	slidesArray[number - 1].style.display = "block";
	bubbleArray[number - 1].className += " active"; // sets the class name of the selected bubble to active (active in css will change element color).
}

function displaySelectedSlide(number){
	displaySlide(number);
	currentSlideNumber = number;  	/*I have added this line because I am using this function for the bubbles buttons. When clicking on a bubble the 													currentSlidenumber should update.*/ 
}

function prevSlide(){	//used in HTML "onClick".
	decreaseSlide();
	displaySlide(currentSlideNumber);
}

function nextSlide(){	//used in HTML "onClick".
	increaseSlide();
	displaySlide(currentSlideNumber);
}

export function autoSlide(time){
	setInterval(nextSlide, time);
}