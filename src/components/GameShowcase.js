import React from 'react';
import Hexagon from './Hexagon';
import '../css/GameShowcase.css';

const GameShowcase = () =>{
    return(
        <div className="game-showcase">
            <figure className="game-image">
                <img src="" alt= "image alt"/>
            </figure>

            <div className="game-results-container">
                <p className="game-result">Game name</p>
                <p className="game-result">Settings</p>
            </div>
            
            <Hexagon />
        </div>
    );
};

export default GameShowcase;