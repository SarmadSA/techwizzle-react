import React from 'react';
import Card from '../components/Card';
import ImageImporter from './ImageImporter';

const CardRenderer = (props) =>{
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    const cards = [];
    if(props.data){
        for(let i = 0; i < props.number; i++){
            const cardData = props.data[i];  
            if(cardData){
                cards.push(
                    <Card
                        key={cardData.id}
                        id={cardData.id}
                        imgSrc={images[cardData.image]}
                        title={cardData.short_title}
                        dateOfRelease={cardData.release_date}
                        price={cardData.price}
                        productLink={cardData.amazon_link}
                        profileLink={"/profile/" + cardData.id}
                        gamesData={cardData.games}
                    />
                );
            }
        }
    }
    return cards;
};

export default CardRenderer;