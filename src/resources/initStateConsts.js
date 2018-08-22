import fullData from './cards.json';

/**
 * File represents the initial state of the app.
 * Constants in this files should not be modified,
 * changed or reassigned a new value from out side of this file (on run time).
 */

export const data = fullData.cards;

export const searchFormOptions = {
    inputValue: '',
    isExactMatch: false,
    searchBy: {
        game: true,
        settings: true,
        resolution: true
    },
    fps:{
        min: 30,
        max: 300
    },
    maxPrice: 900
};

export const profilesPageOptions ={
    initialCards: 6,
    onLoadMore: 6
};

export const homePageOptions ={
    numberOfFeatured: 6,
    numberOfLatest: 3
};