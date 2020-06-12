import React from 'react';
import Card from '../components/Card';
import ImageImporter from './ImageImporter';
import {valueOrDefault} from "../helpers/helperFunctions";
import {PROFILE} from '../resources/defaultData';

const CardRenderer = (props) =>{
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    const cards = [];

    //TODO: Replace with common general helper function in all renderers
    const getImage = (data) => {
        if(null != data.externalImageLink){
            return data.externalImageLink;
        } else if(null != data.internalImageLink){
            return images[data.internalImageLink];
        } else{
            return images[PROFILE.IMAGE_LINK];
        }
    };

    if(props.data){
        for(let i = 0; i < props.data.length; i++){
            const cardData = props.data[i];
            if(cardData){
                cards.push(
                    <Card
                        key={i}
                        id={ cardData.id }
                        imgSrc={ getImage(cardData) }
                        title={ valueOrDefault(cardData.shortTitle, PROFILE.TITLE) }
                        dateOfRelease={ valueOrDefault(cardData.releaseDate, PROFILE.RELEASE_DATE) }
                        price={ valueOrDefault(cardData.averagePrice, PROFILE.AVERAGE_PRICE) }
                        productLink={ valueOrDefault(cardData.amazonLink, PROFILE.AMAZON_LINK) }
                        profileLink={ "/profile/" + cardData.id }
                        benchmarks={ cardData.benchmarks }
                    />
                );
            }
        }
    }
    return cards;
};

export default CardRenderer;
