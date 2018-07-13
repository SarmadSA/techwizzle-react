import React from 'react';
import GameShowcase from '../components/GameShowcase';
import importAllImages from '../components/ImageImporter';

const GameRenderer = (props) =>{
    const gamesArray = [];
    const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    if(props.data){
        for(let i = 0; i < props.number; i++){
            gamesArray.push (
                <GameShowcase 
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
}

export default GameRenderer;