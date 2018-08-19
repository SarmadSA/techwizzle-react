import React from 'react';
import '../css/FlexErrorBox.css';

const FlexErrorBox = (props) =>{
    return (
        <div className="flex-error-box">
            {props.children}
        </div>
    );
};

export default FlexErrorBox;