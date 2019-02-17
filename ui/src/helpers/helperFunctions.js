import {consolePrint} from "./debugger";

export const setPageTitle = (title) =>{
    document.title = title;
};

export const scrollToTop = () =>{
    window.scrollTo(0, 0);
};

export const valueOrDefault = (value, defaultValue) =>{
    let valueToReturn = defaultValue;
    if(null != value){
        valueToReturn = value;
    }
    return valueToReturn;
};

/**
 * Returns the first not null element (image-link for example)
 * in a a list of elements (image-links for example)
 *
 * @param elementList list of elements
 * @Return first non null element in list
 */
export const getFirstNonNullElement = (elementList) => {
    elementList.forEach(function(element) {
        if(null != element){
            consolePrint(element);
            return element
        }
    });
};