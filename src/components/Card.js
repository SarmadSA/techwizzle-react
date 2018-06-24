import React from 'react';
import CardHeader from './CardHeader';
import GameShowcase from './GameShowcase';
import '../css/Card.css';

const Card = () =>{
    return(
        <div className="card">
            <CardHeader />
            <h4 className="card-content-tittle">Preformance in games:</h4>
            <GameShowcase />
            <GameShowcase />
            <GameShowcase />
            <div className="more-gameresults">
                <p>More</p>
            </div>
        </div>
    );
};

export default Card;