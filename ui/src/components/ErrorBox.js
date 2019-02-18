import React from 'react';
import '../css/ErrorBox.css';

const ErrorBox = (props) =>{
    return (
        <div className="error-box">
            {props.children}
        </div>
    );
};

export default ErrorBox;