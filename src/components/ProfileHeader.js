import React from 'react';
import '../css/ProfileHeader.css';

const ProfileHeader = (props) =>{
    const { imgSrc, title, dateOfRelease, price, productLink } = props;
    return(
        <div className="profile-header">
            <figure className="thumbnail-figure">
                <img src={imgSrc} alt="" className="thumbnail-img"/> 
            </figure>
            <div className="product-info-container">
                <h3>{title}</h3>
                <p>Date Of Release: {dateOfRelease}</p>
                <p>Avrage Price: {price} USD</p>
                <a href={productLink} target="_blank" className="custom-link"> Product link</a>
            </div>
        </div>
    );
};

export default ProfileHeader;