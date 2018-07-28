import React from 'react';
import Card from '../components/Card';
import ErrorBox from '../components/ErrorBox';
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
            else{
                //TODO.. when there is no more data in the array.
                cards.push(<ErrorBox> No more profiles to load! <i className="far fa-frown"/> </ErrorBox>);
                return cards;
            }
        }
    }
    else{
        //TODO.. when there is no data at all (data not passed to the component or data array passed is empty)
        cards.push(<ErrorBox> No profiles to load! <i className="far fa-frown"/> </ErrorBox>);
    }
    return cards;
};

export default CardRenderer;