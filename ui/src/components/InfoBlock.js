import React from 'react';
import '../css/InfoBlock.css';

const InfoBlock = (props) =>{
    return(
        <div className="info-block" style={props.style}>
            {props.children}
        </div>
    );
};

export default InfoBlock;