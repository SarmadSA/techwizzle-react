import React from 'react';
import Hexagon from './Hexagon';
import '../css/GameShowcase.css';

const GameShowcase = (props) =>{
    const { imgSrc, title, settings, fps, resolution } = props;
    return(
        <div className="game-showcase">
            <figure className="game-image">
                <img src={imgSrc} alt= "" className="thumbnail-img"/>
            </figure>

            <div className="game-results-container">
                <p className="game-result">{title}</p>
                <p className="game-result">{settings} settings - {resolution}</p>
            </div>
            
            <Hexagon fps={fps}/>
        </div>
    );
};

export default GameShowcase;