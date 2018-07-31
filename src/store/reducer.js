import data from '../data/cards.json';

const initialState = {
    data: data.cards,
    exactMatch: false,
    searchBy:{
        game: false,
        settings: false,
        resolution: false
    },
    fps:{
        min: 30,
        max: 300
    },
    maxPrice: 900
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
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
                data: getUpdatedData(initialState.data, action.keyWord, action)
            };
        case 'RESET_STATE':
            state = initialState;
            break;
        case 'SORT':
            //Sort by code here...
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

const exactSearch = (dataArray, keyWord, options) =>{
    let filteredData = searchByTitleExact(dataArray, keyWord);
    if(options.searchBy.game){
        filteredData = [...filteredData, ...searchByGameExact(dataArray, keyWord)];
    }
    if(options.searchBy.settings){
        filteredData = [...filteredData, ...searchBySettingsExact(dataArray, keyWord)];
    }
    if(options.searchBy.resolution){
        filteredData = [...filteredData, ...searchByResolutionExact(dataArray, keyWord)];
    }
    return filteredData;
};

const normalSearch = (dataArray, keyWord, options) => {
    let filteredData = searchByTitle(dataArray, keyWord);
    if(options.searchBy.game){
        filteredData = [...filteredData, ...searchByGame(dataArray, keyWord)];
    }
    if(options.searchBy.settings){
        filteredData = [...filteredData, ...searchBySettings(dataArray, keyWord)];
    }
    if(options.searchBy.resolution){
        filteredData = [...filteredData, ...searchByResolution(dataArray, keyWord)];
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

const search = (dataArray, keyWord, options) => {
    if(keyWord === ''){
        return dataArray;
    }
    let dataArrayToReturn = dataArray;
    if(options.exactMatch){
        dataArrayToReturn = exactSearch(dataArray, keyWord, options);
    }
    else{
        dataArrayToReturn = normalSearch(dataArray, keyWord, options);
    }
    return dataArrayToReturn;
};

const filterData = (dataArray, options) => {
    let filteredData = filterByPrice(dataArray, options);
    filteredData = filterByFps(filteredData, options);
    return filteredData;
};

const getUpdatedData = (dataArray, keyWord, options) =>{
   const searchData = search(dataArray, keyWord, options);
   const filteredData = filterData(searchData, options);
   // I already made sure that no duplicate entries allowed, but here function 'unique' is still used just to make sure,
    // in the future in case I add more advanced search options and forget about it, this function will remove them.
    // REMOVE FOR FASTER SEARCH!
   return filteredData.unique();
};

export default reducer;