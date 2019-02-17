import React from 'react';
import GameShowcase from '../components/GameShowcase';
import ImageImporter from './ImageImporter';
import FlexErrorBox from "../components/FlexErrorBox";
import {valueOrDefault} from "../helpers/helperFunctions";
import {GAME, BENCHMARK} from '../resources/defaultData';
import {CARD_FEEDBACK} from '../resources/feedbackMessages';

const GameRenderer = (props) =>{
    const gamesArray = [];
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));

    //TODO: Replace with common general helper function in all renderers
    const getImage = (data) => {
        if(null != data.externalImageLink){
            return data.externalImageLink;
        } else if(null != data.internalImageLink){
            return images[data.internalImageLink];
        } else{
            return images[GAME.IMAGE_LINK];
        }
    };

    if(props.data && props.data.length > 0){
        if(props.data.length > props.number){
            renderGames(props.number);
        }
        else{
            renderGames(props.data.length);
        }
    }
    else{
        gamesArray.push (<FlexErrorBox> { CARD_FEEDBACK.NO_GAME_TESTS } </FlexErrorBox>);
    }

    function renderGames(number){
        for(let i = 0; i < number; i++){
            gamesArray.push (
                <GameShowcase
                    key={i}
                    imgSrc = { getImage(props.data[i].game) }
                    title = { valueOrDefault(props.data[i].game.title, GAME.TITLE) }
                    settings = { valueOrDefault(props.data[i].settings, BENCHMARK.SETTINGS) }
                    resolution = { valueOrDefault(props.data[i].resolution, BENCHMARK.RESOLUTION) }
                    fps = { valueOrDefault(props.data[i].avgFps, BENCHMARK.AVERAGE_FPS) }
                />
            );
        }
    }

    return gamesArray;
};

export default GameRenderer;