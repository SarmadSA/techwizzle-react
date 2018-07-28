import data from '../data/cards.json';

const initialState = {
    data: data.cards
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                data: search(initialState.data, action.value)
            }

    }
    return state;
};

const search = (dataArray, keyWord) => {
    const newDataArray = [];
    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].title.toLowerCase().includes(keyWord.toLowerCase())){
            newDataArray.push(dataArray[i]);
        }
    }
    return newDataArray;
};

export default reducer;