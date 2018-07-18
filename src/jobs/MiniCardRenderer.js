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
                    title = {props.data[i].title}
                    dateOfRelease = {props.data[i].dateOfRelease}
                    price = {props.data[i].price}
                    productLink = {props.data[i].link} 
                    profileLink = {props.data[i].id}
                />
            );
        }
    }
    return miniCardArray;
};

export default MiniCardRenderer;