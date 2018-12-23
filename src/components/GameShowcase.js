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
                <h3 className="game-result">{title}</h3>
                <p className="game-result">{settings} settings - {resolution}</p>
            </div>
            
            <Hexagon fps={fps}/>
        </div>
    );
};

export default GameShowcase;