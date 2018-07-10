import React from 'react';
import '../css/Card.css';

const NotFoundPage = () =>{
    const style = {
        textAlign: 'center',
        fontSize: '24px',
    }
    const pStyle = {
        fontSize: '34px',
        fontWeight: 'bold'
    }

    return(
        <div style={style}>
            <p style={pStyle}> Page not found!</p> <br/> 
            Please make sure you typed the right URL. <br/>
            You will be redirected to home page in 
        </div>
    );
};

export default NotFoundPage;