import React from 'react';
import '../css/SectionTitle.css';

const SectionTitle = (props) =>{
    return (
        <div className="section-tittle-box">
            <h2 className="section-tittle">{props.children}</h2>
        </div>
    );
};

export default SectionTitle;