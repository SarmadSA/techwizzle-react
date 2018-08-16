import React from 'react';
import '../css/InfoList.css';

const InfoList = (props) =>{
    const data = props.data;
    return (
        <div className="info-list-box">
            <h3>Technical information:</h3>
            <br/>
            <ul className="info-list">
                <li> <span className="info-text-span"> CUDA Cores: </span> { data.cuda_cores } </li>
                <li> <span className="info-text-span"> Base Clock (MHz): </span> { data.base_clock } </li>
                <li> <span className="info-text-span"> Boost Clock (MHz): </span> { data.boost_clock } </li>
                <li> <span className="info-text-span"> Memory Speed: </span> { data.memory_speed } </li>
                <li> <span className="info-text-span"> Standard Memory Config: </span> { data.standard_memory_config }</li>
                <li> <span className="info-text-span"> Memory Interface Width: </span> { data.memory_interface_width } </li>
                <li> <span className="info-text-span"> Memory Bandwidth (GB/sec): </span> { data.memory_bandwidth } </li>
            </ul>
        </div>
    );
};

export default InfoList;