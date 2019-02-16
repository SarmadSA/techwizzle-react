import React from 'react';
import '../css/AlertBox.css';


const AlertBox = (props) =>{
    return (
        <div className={"alert-box " + props.variant}>
            {props.children}
        </div>
    );
};

export default AlertBox;