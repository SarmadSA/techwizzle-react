import React from 'react';
import Card from '../components/Card';
import ImageImporter from './ImageImporter';

const CardRenderer = (props) =>{
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    const cards = [];
    if(props.data)
        for(let i = 0; i < props.number; i++){
            const cardData = props.data[i];     
            cards.push(
                        <Card 
                            id={cardData.id}
                            imgSrc={images[cardData.image]}
                            title={cardData.title}
                            dateOfRelease={cardData.dateOfRelease}
                            price={cardData.price}
                            productLink={cardData.link}
                            profileLink={"/profile/" + cardData.id}
                            gamesData={cardData.games}
                        />
                    );
        }
    return cards;
}

export default CardRenderer;