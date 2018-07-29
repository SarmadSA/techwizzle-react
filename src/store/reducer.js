import data from '../data/cards.json';

const initialState = {
    data: data.cards,
    exactMatch: false,
    searchBy:{
        game: false,
        settings: false,
        resolution: false
    }
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
                data: search(initialState.data, action.keyWord, action)
            };
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
    if(keyWord === ''){
        return dataArray;
    }
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].title.toLowerCase() === (keyWord.toLowerCase())){
            newDataArray.push(dataArray[i]);
        }
    }
    return newDataArray;
};

const searchByGameExact = (dataArray, keyWord) =>{
    if(keyWord === ''){
        return dataArray;
    }
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        for(let j = 0; j < dataArray[i].games.length; j++)
        if(dataArray[i].games[j].title.toLowerCase() === (keyWord.toLowerCase())){
            newDataArray.push(dataArray[i]);
        }
    }
    return newDataArray;
};

const searchBySettingsExact = (dataArray, keyWord) =>{
    if(keyWord === ''){
        return dataArray;
    }
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        for(let j = 0; j < dataArray[i].games.length; j++)
            if(dataArray[i].games[j].settings.toLowerCase() === (keyWord.toLowerCase())){
                newDataArray.push(dataArray[i]);
            }
    }
    return newDataArray;
};

const searchByResolutionExact = (dataArray, keyWord) =>{
    if(keyWord === ''){
        return dataArray;
    }
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        for(let j = 0; j < dataArray[i].games.length; j++)
            if(dataArray[i].games[j].resolution.toLowerCase() === (keyWord.toLowerCase())){
                newDataArray.push(dataArray[i]);
            }
    }
    return newDataArray;
};

const searchByTitle = (dataArray, keyWord) =>{
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].title.toLowerCase().includes(keyWord.toLowerCase())){
            newDataArray.push(dataArray[i]);
        }
    }
    return newDataArray;
};

const searchByGame = (dataArray, keyWord) =>{
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        for(let j = 0; j < dataArray[i].games.length; j++)
        if(dataArray[i].games[j].title.toLowerCase().includes(keyWord.toLowerCase())){
            newDataArray.push(dataArray[i]);
        }
    }
    return newDataArray;
};

const searchBySettings = (dataArray, keyWord) =>{
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        for(let j = 0; j < dataArray[i].games.length; j++)
            if(dataArray[i].games[j].settings.toLowerCase().includes(keyWord.toLowerCase())){
                newDataArray.push(dataArray[i]);
            }
    }
    return newDataArray;
};

const searchByResolution = (dataArray, keyWord) =>{
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        for(let j = 0; j < dataArray[i].games.length; j++)
            if(dataArray[i].games[j].resolution.toLowerCase().includes(keyWord.toLowerCase())){
                newDataArray.push(dataArray[i]);
            }
    }
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
    return filteredData.unique();
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
    return filteredData.unique();
};

const search = (dataArray, keyWord, options) => {
    let dataArrayToReturn = dataArray;
    if(options.exactMatch){
        dataArrayToReturn = exactSearch(dataArray, keyWord, options);
    }
    else{
        dataArrayToReturn = normalSearch(dataArray, keyWord, options);
    }
    return dataArrayToReturn;
};

export default reducer;