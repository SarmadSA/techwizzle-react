import React from 'react';
import '../css/InfoList.css';

const InfoList = () =>{
    return (
        <div className="info-list-box">
            <h3>Technical information:</h3>
            <br/>
            <ul className="info-list">
                <li>CUDA Cores: -</li>
                <li>Base Clock (MHz): -</li>
                <li>Boost Clock (MHz): -</li>
                <li>Memory Speed: -</li>
                <li>Standard Memory Config: -</li>
                <li>Memory Interface Width: -</li>
                <li>Memory Bandwidth (GB/sec): -</li>
            </ul>
        </div>
    );
};

export default InfoList;