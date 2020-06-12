import * as actionTypes from './actions';
import { graphicsCardData, searchFormOptions } from "../resources/initStateConsts";

const initialState = {
    graphicsCardData: graphicsCardData,
    searchFormOptions,
    searching: false,
    loading: true,
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.FETCH_DATA:
            initialState.graphicsCardData = action.graphicsCardData;
            return{
                ...state,
                searching: false,
                loading: action.loading,
                graphicsCardData: action.graphicsCardData
            };
        case actionTypes.SEARCH:
            return {
                ...state,
                keyWord: action.inputValue,
                exactMatch: action.exactMatch,
                searchBy:{
                    game: action.searchBy.game,
                    settings: action.searchBy.settings,
                    resolution: action.searchBy.resolution
                },
                fps:{
                    min: action.fps.min,
                    max: action.fps.max
                },
                maxPrice: action.maxPrice,
                searching: true,
                graphicsCardData: getUpdatedData(initialState.graphicsCardData, action)
            };
        case actionTypes.RESET_STATE:
            state = initialState;
            state.loading = false;
            break;
        case actionTypes.SORT:
            //Sort-by code here...
            break;
        default:
            //Default here..
            break;
    }
    return state;
};

// Array function that removes all duplicate entries in the array
Array.prototype.unique = function() {
    let a = this.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};

const searchByTitleExact = (dataArray, keyWord) =>{
    const newDataArray = [];
    dataArray.forEach(function(element){
        if(element.title.toLowerCase() === (keyWord.toLowerCase())){
            newDataArray.push(element);
        }
    });
    return newDataArray;
};

const searchByGameExact = (dataArray, keyWord) =>{
    const newDataArray = [];
    dataArray.forEach(function(element){
        let index = 0, found = false;
        while(!found && index < element.games.length){
            if(element.games[index].title.toLowerCase() === (keyWord.toLowerCase())){
                newDataArray.push(element);
                found = true;
            }
            index++;
        }
    });
    return newDataArray;
};

const searchBySettingsExact = (dataArray, keyWord) =>{
    const newDataArray = [];
    dataArray.forEach(function(element){
        let index = 0, found = false;
        while(!found && index < element.games.length){
            if(element.games[index].settings.toLowerCase() === (keyWord.toLowerCase())){
                newDataArray.push(element);
                found = true;
            }
            index++;
        }
    });
    return newDataArray;
};

const searchByResolutionExact = (dataArray, keyWord) =>{
    const newDataArray = [];
    dataArray.forEach(function(element){
        let index = 0, found = false;
        while(!found && index < element.games.length){
            if(element.games[index].resolution.toLowerCase() === (keyWord.toLowerCase())){
                newDataArray.push(element);
                found = true;
            }
            index++;
        }
    });
    return newDataArray;
};

const searchByTitle = (dataArray, keyWord) =>{
    const newDataArray = [];
    dataArray.forEach(function(element){
        if(element.title.toLowerCase().includes(keyWord.toLowerCase())){
            newDataArray.push(element);
        }
    });
    return newDataArray;
};

const searchByGame = (dataArray, keyWord) =>{
    const newDataArray = [];
    dataArray.forEach(function(element){
        let index = 0, found = false;
        while(!found && index < element.games.length){
            if(element.games[index].title.toLowerCase().includes(keyWord.toLowerCase())){
                newDataArray.push(element);
                found = true;
            }
            index++;
        }
    });
    return newDataArray;
};

const searchBySettings = (dataArray, keyWord) =>{
    const newDataArray = [];
    dataArray.forEach(function(element){
        let index = 0, found = false;
        while(!found && index < element.games.length){
            if(element.games[index].settings.toLowerCase().includes(keyWord.toLowerCase())){
                newDataArray.push(element);
                found = true;
            }
            index++;
        }
    });
    return newDataArray;
};

const searchByResolution = (dataArray, keyWord) =>{
    const newDataArray = [];
    dataArray.forEach(function(element){
        let index = 0, found = false;
        while(!found && index < element.games.length){
            if(element.games[index].resolution.toLowerCase().includes(keyWord.toLowerCase())){
                newDataArray.push(element);
                found = true;
            }
            index++;
        }
    });
    return newDataArray;
};

const exactSearch = (dataArray, options) =>{
    let filteredData = searchByTitleExact(dataArray, options.keyWord);
    if(options.searchBy.game){
        filteredData = [...filteredData, ...searchByGameExact(dataArray, options.keyWord)];
    }
    if(options.searchBy.settings){
        filteredData = [...filteredData, ...searchBySettingsExact(dataArray, options.keyWord)];
    }
    if(options.searchBy.resolution){
        filteredData = [...filteredData, ...searchByResolutionExact(dataArray, options.keyWord)];
    }
    return filteredData;
};

const normalSearch = (dataArray, options) => {
    let filteredData = searchByTitle(dataArray, options.keyWord);
    if(options.searchBy.game){
        filteredData = [...filteredData, ...searchByGame(dataArray, options.keyWord)];
    }
    if(options.searchBy.settings){
        filteredData = [...filteredData, ...searchBySettings(dataArray, options.keyWord)];
    }
    if(options.searchBy.resolution){
        filteredData = [...filteredData, ...searchByResolution(dataArray, options.keyWord)];
    }
    return filteredData;
};

const filterByFps = (dataArray, options) =>{
    const filteredDataArray = [];
    dataArray.forEach(function(element){
        let index = 0, found = false;
        while(index < element.games.length && !found){
            if(Number(element.games[index].fps) >= options.fps.min && Number(element.games[index].fps) <= options.fps.max){
                filteredDataArray.push(element);
                found = true;
            }
            index++;
        }
    });
    return filteredDataArray;
};

const filterByPrice = (dataArray, options) => {
    const filteredDataArray = [];
    dataArray.forEach(function(element){
        if(Number(element.price) <= options.maxPrice){
            filteredDataArray.push(element);
        }
    });
    return filteredDataArray;
};

const search = (dataArray, options) => {
    if(options.keyWord === ''){
        return dataArray;
    }
    let dataArrayToReturn = dataArray;
    if(options.exactMatch){
        dataArrayToReturn = exactSearch(dataArray, options);
    }
    else{
        dataArrayToReturn = normalSearch(dataArray, options);
    }
    return dataArrayToReturn;
};

const filterData = (dataArray, options) => {
    let filteredData = filterByPrice(dataArray, options);
    filteredData = filterByFps(filteredData, options);
    return filteredData;
};

const getUpdatedData = (dataArray, options) =>{
   const searchData = search(dataArray, options);
   const filteredData = filterData(searchData, options);
    // I already made sure that no duplicate entries allowed, but here function 'unique' is still used just to make sure,
    // in the future in case I add more advanced search options and forget about it, this function will remove them.
    // REMOVE FOR FASTER SEARCH!
   return filteredData.unique();
};

export default reducer;
