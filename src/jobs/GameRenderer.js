import React from 'react';
import GameShowcase from '../components/GameShowcase';
import ImageImporter from './ImageImporter';
import FlexErrorBox from "../components/FlexErrorBox";

const GameRenderer = (props) =>{
    const gamesArray = [];
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    if(props.data && props.data.length > 0){
        if(props.data.length > props.number){
            renderGames(props.number);
        }
        else{
            renderGames(props.data.length);
        }
    }
    else{
        gamesArray.push (<FlexErrorBox>No game tests to show!</FlexErrorBox>);
    }

    function renderGames(number){
        for(let i = 0; i < number; i++){
            gamesArray.push (
                <GameShowcase
                    // key={props.data[i].uid}
                    imgSrc = {images[props.data[i].image]}
                    title = {props.data[i].title}
                    settings = {props.data[i].settings}
                    resolution = {props.data[i].resolution}
                    fps = {props.data[i].fps}
                />
            );
        }
    }

    return gamesArray;
};

export default GameRenderer;