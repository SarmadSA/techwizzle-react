import React from 'react';
import '../css/ProfileHeader.css';

const ProfileHeader = (props) =>{
    const { imgSrc, title, dateOfRelease, price, productLink } = props;
    return(
        <div className="profile-header product-header-common">
            <figure className="thumbnail-figure">
                <img src={imgSrc} alt="" className="thumbnail-img"/> 
            </figure>
            <div className="product-info-container">
                <h1 className="profile-title">{title}</h1>
                <p>Date Of Release: {dateOfRelease}</p>
                <p>Average Price: {price} USD</p>
                <br/>
                <a href={productLink} target="_blank" className="custom-link"> Product link <i className="fas fa-external-link-alt"/></a>
            </div>
        </div>
    );
};

export default ProfileHeader;