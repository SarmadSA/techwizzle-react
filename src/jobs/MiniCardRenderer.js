import React from 'react';
import MiniCard from '../components/MiniCard';
import ImageImporter from './ImageImporter';

const MiniCardRenderer = (props) =>{
    const miniCardArray = [];
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    if(props.data){
        for(let i = 0; i < props.number; i++){
            miniCardArray.push (
                <MiniCard 
                    imgSrc = {images[props.data[i].image]}
                    title = {props.data[i].short_title}
                    dateOfRelease = {props.data[i].release_date}
                    price = {props.data[i].price}
                    productLink = {props.data[i].amazon_link}
                    profileLink = {props.data[i].id}
                    // gamesData = {props.data[i].games}
                />
            );
        }
    }
    return miniCardArray;
};

export default MiniCardRenderer;