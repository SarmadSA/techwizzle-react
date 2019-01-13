import React from 'react';
import TextBox from '../components/TextBox';
import AsideFormBox from '../components/AsideFormBox';
import * as pageTitles from '../resources/pageTitles'

const Aboutpage = () =>{
    document.title = pageTitles.ABOUT;
    return (
        <div>
            <TextBox title="About">
                TechWizzle.com is a website that can help you choose the right hardware for your PC build.
                By looking up hardware profiles, you will be able to determine how many frames per second (FPS) you can get
                with that build. Finding the right hardware for the right price can be challenging, and requires
                a lot of research, knowledge and time. Looking up different youtube videos about different GPUs and
                searching the web for different hardware is not an easy task. By using
                our service, you will be able to compare multiple GPUs, CPUs and other hardware that will be
                added in the future, then determine the right hardware for your build, and make a good decision that you won't regret.
                You will be able to see how many frames per second (FPS) you can get with that Hardware in different
                games without having to watch hours and hours of different youtube videos.
                <br/>
                <br/>
                Looking to buy a game, but not sure if it will run smoothly in your PC? This is the right place to do so.
                At TechWizzle you will be able to search for games, and easily find out how many frames per second (FPS) you can get.
                <br/>
                <br/>
                If you have any suggestions, ideas or concerns, make sure to contact us by navigating to the contact page.
                We will get back to
                you as soon as possible.
            </TextBox>
            <AsideFormBox title="Get the latest updates"/>
        </div>
    );
};

export default Aboutpage;