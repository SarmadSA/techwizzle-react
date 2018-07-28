import data from '../data/cards.json';

const initialState = {
    data: data.cards,
    exactMatch: false,
    searchByTitle: true,
    searchByGame: false,
    searchBySettings: false,
    searchByResolution: false,

};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_SEARCH_OPTIONS':
            return {
                ...state,
                exactMatch: action.exactMatch,
                // searchByTitle: action.properties,
                // searchByGame: action.properties,
                // searchBySettings: action.properties,
                // searchByResolution: action.properties,
            };
        case 'SEARCH':
            return {
                ...state,
                data: search(initialState.data, action.keyWord, state)
            };
    }
    return state;
};

const exactSearch = (dataArray, keyWord) =>{
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

const normalSearch = (dataArray, keyWord) => {
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].title.toLowerCase().includes(keyWord.toLowerCase())){
            newDataArray.push(dataArray[i]);
        }
    }
    return newDataArray;
};

const search = (dataArray, keyWord, state) => {
    let dataArrayToReturn = dataArray;
    if(state.exactMatch){
        dataArrayToReturn = exactSearch(dataArray, keyWord);
    }
    else{
        dataArrayToReturn = normalSearch(dataArray, keyWord);
    }
    return dataArrayToReturn;
};

export default reducer;