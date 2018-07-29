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
        case 'SEARCH':
            return {
                ...state,
                exactMatch: action.exactMatch,
                data: search(initialState.data, action.keyWord, action.exactMatch)
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

const search = (dataArray, keyWord, exactMatch) => {
    let dataArrayToReturn = dataArray;
    if(exactMatch){
        dataArrayToReturn = exactSearch(dataArray, keyWord);
    }
    else{
        dataArrayToReturn = normalSearch(dataArray, keyWord);
    }
    return dataArrayToReturn;
};

export default reducer;