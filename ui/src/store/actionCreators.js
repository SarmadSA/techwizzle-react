import * as actionTypes from './actions';
import {CARDS_URL} from '../resources/API';
import {executeHttpGet} from "../services/ApiClient";

export const storeData = (data) =>{
    return {
        type: actionTypes.FETCH_DATA,
        graphicsCardData: data,
     }
};

export const fetchGraphicsCards = (size) =>{
    return dispatch =>{
        const requestParams = "?size="+size;
        executeHttpGet(CARDS_URL + requestParams, onFetchSuccess, onFetchFailure);

        function onFetchSuccess(url, response){
            dispatch(storeData(response.data));
        }

        function onFetchFailure(url, response){
            //TODO: Handle fetching failure (the loading animation will go forever if failure not handled)
            //this.setState({error: true});
        }
    }
};

export const search = (searchOptions) =>{
    const searchBy = searchOptions.searchBy;
    const fps = searchOptions.fps;
    return {
        type: actionTypes.SEARCH,
        keyWord: searchOptions.inputValue,
        exactMatch: searchOptions.isExactMatch,
        searchBy:{
            game: searchBy.game,
            settings: searchBy.settings,
            resolution: searchBy.resolution
        },
        fps:{
            min: fps.min,
            max: fps.max
        },
        maxPrice: searchOptions.maxPrice
    }
};

export const resetState = () =>{
    return{
        type: actionTypes.RESET_STATE
    }
};
