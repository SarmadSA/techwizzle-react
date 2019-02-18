import React from 'react';
import '../css/InfoList.css';
import {valueOrDefault} from "../helpers/helperFunctions";
import {PROFILE} from "../resources/defaultData";

const InfoList = (props) =>{
    const data = props.data;

    return (
        <div className="info-list-box">
            <h3>Technical information:</h3>
            <br/>
            <ul className="info-list">
                <li> <span className="info-text-span"> CUDA Cores: </span> { valueOrDefault(data.cudaCores, PROFILE.TECHNICAL_INFO.CUDA_CORES) } </li>
                <li> <span className="info-text-span"> Base Clock (MHz): </span> { valueOrDefault(data.baseClock, PROFILE.TECHNICAL_INFO.BASE_CLOCK) } </li>
                <li> <span className="info-text-span"> Boost Clock (MHz): </span> { valueOrDefault(data.boostClock, PROFILE.TECHNICAL_INFO.BOOST_CLOCK) } </li>
                <li> <span className="info-text-span"> Memory Clock Speed (MHz): </span> { valueOrDefault(data.memoryClockSpeed, PROFILE.TECHNICAL_INFO.MEMORY_CLOCK_SPEED) } </li>
                <li> <span className="info-text-span"> Standard Memory Config: </span> { valueOrDefault(data.standardMemoryConfig, PROFILE.TECHNICAL_INFO.STANDARD_MEMORY_CONFIG) } </li>
                <li> <span className="info-text-span"> Memory Interface Width (bit): </span> { valueOrDefault(data.memoryInterfaceWidth, PROFILE.TECHNICAL_INFO.MEMORY_INTERFACE_WIDTH) } </li>
                <li> <span className="info-text-span"> Memory Bandwidth (GB/sec): </span> { valueOrDefault(data.memoryBandwidth, PROFILE.TECHNICAL_INFO.MEMORY_BANDWIDTH) } </li>
            </ul>
        </div>
    );
};

export default InfoList;