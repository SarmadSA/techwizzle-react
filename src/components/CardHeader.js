import React from 'react';
import '../css/CardHeader.css';

const CardHeader = (props) =>{
    const { imgSrc, title, dateOfRelease, price, productLink, profileLink } = props;
    return(
        <div className="card-header">
            <figure className="card-image">
                <img src={imgSrc} alt="gtx" className="thumbnail-img"/> 
            </figure>
            <div className="card-info-container">
                <h3>{title}</h3>
                <p>Date Of Release: {dateOfRelease}</p>
                <p>Avrage Price: {price} USD</p>
                <a href={productLink} target="_blank" className="profile-link"> Product link</a>
                <br/>
                <a href={profileLink} className="profile-link">View full profile</a>
            </div>
        </div>
    );
};

export default CardHeader;