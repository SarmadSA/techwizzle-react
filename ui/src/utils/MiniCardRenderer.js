import React from 'react';
import MiniCard from '../components/MiniCard';
import ImageImporter from './ImageImporter';
import {valueOrDefault} from '../helpers/helperFunctions';
import {PROFILE} from "../resources/defaultData";

const MiniCardRenderer = (props) =>{
    const miniCardArray = [];
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));

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
        for(let i = 0; i < props.number; i++){
            miniCardArray.push (
                <MiniCard
                    key={i}
                    imgSrc = { getImage(props.data[i]) }
                    title = { valueOrDefault(props.data[i].shortTitle, PROFILE.TITLE) }
                    dateOfRelease = { valueOrDefault(props.data[i].releaseDate, PROFILE.RELEASE_DATE) }
                    price = { valueOrDefault(props.data[i].averagePrice, PROFILE.AVERAGE_PRICE) }
                    productLink = { valueOrDefault(props.data[i].amazonLink, PROFILE.AMAZON_LINK) }
                    profileLink = { valueOrDefault(props.data[i].id, PROFILE.PROFILE_LINK) }
                    // gamesData = {props.data[i].games}
                />
            );
        }
    }
    return miniCardArray;
};

export default MiniCardRenderer;