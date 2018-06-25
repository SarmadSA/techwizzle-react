import React from 'react';
import TextBox from '../components/TextBox';
import AsideFormBox from '../components/AsideFormBox';


const Aboutpage = () =>{
    return (
        <div>
            <TextBox title="About">
                TechWizzle.com is a website that can help you choose the right hardware for your next PC build.
                By looking up hardware profiles you will be able to determine how many FPS you are going to get
                with that build. Finding the right hardware for the right price can be challanging, and require
                alot of research, knowladge and time. Looking up different youtube videos about different GPUs and
                searching the web for different hardware is not an easy task, and requires a lot of time. By using
                our Service you will easily be able to compare multiple GPUs, CPUs and other hardware that will be
                added in the future. You will be able to see how many FPS you can get, from that Harware in different
                games without having to watch hours and hours of youtube videos.
            </TextBox>
            <AsideFormBox title="Get the latest updates"/>
        </div>
    );
};

export default Aboutpage;