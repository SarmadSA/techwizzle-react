import React from 'react';
import CardHeader from './CardHeader';
import GameShowcase from './GameShowcase';
import '../css/Card.css';

const Card = (props) =>{
    const {imgSrc, title, dateOfRelease, price, productLink, profileLink} = props;
    return(
        <div className="card">
            <CardHeader 
                imgSrc={imgSrc}
                title={title}
                dateOfRelease={dateOfRelease}
                price={price}
                productLink={productLink}
                profileLink={profileLink}
            />
            <h4 className="card-content-tittle">Preformance in games:</h4>
            <GameShowcase />
            <GameShowcase />
            <GameShowcase />
            <a href={profileLink} className="more-link">
                <div className="more-gameresults">
                    More
                </div>
            </a>
        </div>
    );
};

export default Card;