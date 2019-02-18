import React from 'react';
import Hexagon from './Hexagon';
import '../css/GameShowcase.css';

//TODO: Get resolution unit from database (p, k, 1080p, 4k etc...)
const GameShowcase = (props) =>{
    const { imgSrc, title, settings, fps, resolution } = props;
    return(
        <div className="game-showcase">
            <figure className="game-image">
                <img src={imgSrc} alt= "" className="thumbnail-img"/>
            </figure>

            <div className="game-results-container">
                <h3 className="game-result">{title}</h3>
                <p className="game-result">{settings} settings - {resolution}p</p>
            </div>
            
            <Hexagon fps={fps}/>
        </div>
    );
};

export default GameShowcase;