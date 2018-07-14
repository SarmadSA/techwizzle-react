import React from 'react';
import CardHeader from './CardHeader';
import GameRenderer from '../jobs/GameRenderer'
import '../css/Card.css';
import {Link} from 'react-router-dom';

const Card = (props) =>{
    const numberOfGames = 3;
    const { id, imgSrc, title, dateOfRelease, price, productLink, profileLink, gamesData } = props;

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
            <h4 className="card-content-tittle">Preformance in games: <i class="fa fa-exclamation-circle"></i></h4>
            
            <GameRenderer number={numberOfGames} data={gamesData}/>

            <Link  to={"/profile/" + id} className="more-link">
                <div className="more-gameresults">
                    More
                </div>
            </Link>

        </div>
    );
};

export default Card;