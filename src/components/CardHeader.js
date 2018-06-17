import React from 'react';
import '../css/CardHeader.css';

const CardHeader = () =>{
    return(
    <div className="card-header">
        <figure className="card-image">
            <img src="" alt="insert the name here"/> 
        </figure>
        <div className="card-info-container">
            <h3>Name of the card</h3>
            <p>Date of release: date</p>
            <p>AVG price: price USD</p>
            <p>Product link</p>
            <a href="#" className="view-profile-link">View full profile</a>
        </div>
    </div>
    );
};

export default CardHeader;