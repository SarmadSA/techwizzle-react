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