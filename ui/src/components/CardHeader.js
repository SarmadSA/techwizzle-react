import React from 'react';
import {Link} from 'react-router-dom';
import '../css/CardHeader.css';

const CardHeader = (props) =>{
    const { imgSrc, title, dateOfRelease, price, productLink, profileLink } = props;
    return(
        <div className="card-header product-header-common">
            <figure className="thumbnail-figure">
                <img src={imgSrc} alt="gtx" className="thumbnail-img"/> 
            </figure>
            <div className="product-info-container">
                <h3>{title}</h3>
                <p>Date Of Release: {dateOfRelease}</p>
                <p>Average Price: {price} USD</p>
                <a href={productLink} target="_blank" className="custom-link"> Product link <i className="fas fa-external-link-alt"/></a>
                <br/>
                <Link to={"" + profileLink} className="custom-link">View full profile</Link>
            </div>
        </div>
    );
};

export default CardHeader;