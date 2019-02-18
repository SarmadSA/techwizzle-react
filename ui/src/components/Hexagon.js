import React from 'react';
import '../css/Hexagon.css';

const Hexagon = (props) =>{
    return(
        <div className="hexagon">
            <div className="hexagon-score">
                <p>{props.fps}+</p>
                <p>FPS</p>
            </div>
        </div>
    );
};

export default Hexagon;