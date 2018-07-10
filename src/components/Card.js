import React from 'react';
import CardHeader from './CardHeader';
import GameShowcase from './GameShowcase';
import '../css/Card.css';
import {Link} from 'react-router-dom';
import importAllImages from './ImageImporter';
import DataContext, {DataProvider} from '../data/GlobalDataProvider';

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
            <h4 className="card-content-tittle">Preformance in games:</h4>

            { renderGames(numberOfGames, gamesData) }
            <DataProvider>
                <DataContext.Consumer>
                    {(context) => (
                        <Link  to={"/profile/" + id} className="more-link" onClick={ () => context.setSelectedProfile(id) }>
                            <div className="more-gameresults">
                                More
                            </div>
                        </Link>
                    )}
                </DataContext.Consumer>
            </DataProvider>
        </div>
    );

    function renderGames(number, data){
        const gamesArray = [];
        const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));
        if(data){
            for(let i = 0; i < number; i++){
                gamesArray.push (
                    <GameShowcase 
                        imgSrc = {images[data[i].image]}
                        title = {data[i].title}
                        settings = {data[i].settings}
                        resolution = {data[i].resolution}
                        fps = {data[i].fps} 
                    />
                );
            }
        }
        return gamesArray;
    }
};

export default Card;