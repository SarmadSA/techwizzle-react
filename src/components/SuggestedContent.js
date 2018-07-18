import React from 'react';
import '../css/SuggestedContent.css';
import MiniCardRenderer from '../jobs/MiniCardRenderer';

const SuggestedContent = (props) =>{
    return (
        <section className="suggested-content-container">
            <h2>Suggested Content</h2>
            <MiniCardRenderer number={props.number} data={props.data}/>
        </section>
    );
};

export default SuggestedContent;