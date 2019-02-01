import React from 'react';
import '../css/MiniCard.css';
import {Link} from 'react-router-dom';

const MiniCard = (props) =>{
    const { imgSrc, title, dateOfRelease, price, productLink, profileLink } = props;
    return (
        <div className="mini-card-container">
            <div className="mini-card-info">
                <figure className="thumbnail-figure">
                    <img src={imgSrc} alt="gtx" className="thumbnail-img"/> 
                </figure>
                <div className="product-info-container-mini">
                    <h2 className="card-title">{title}</h2>
                    <p>Date Of Release: {dateOfRelease}</p>
                    <p>Average Price: {price} USD</p>
                </div>
            </div>
            <div className="links-box">
                <a href={productLink} target="_blank" className="custom-link l-right"> Product link <i className="fas fa-external-link-alt"/></a>
                <Link to={"" + profileLink} className="custom-link l-left">View full profile</Link>
            </div>
        </div>
    );
};

export default MiniCard;