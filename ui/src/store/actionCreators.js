import * as actionTypes from './actions';
import axios from 'axios';
import * as API from '../resources/API';

export const storeData = (data) =>{
    return {
        type: actionTypes.FETCH_DATA,
        data: data,
        loading: false
    }
};

export const fetchData = () =>{
    return dispatch =>{
        axios.get(API.CARDS_URL)
            .then(response => {
                console.log(response.data);
                console.log(response.data[0].title);
                dispatch(storeData(response.data));
            })
            .catch(error =>{
                console.log(error);
                //this.setState({error: true});
            });
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