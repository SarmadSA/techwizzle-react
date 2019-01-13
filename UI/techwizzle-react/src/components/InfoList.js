import React from 'react';
import '../css/InfoList.css';

const InfoList = (props) =>{
    const data = props.data;

    const formatData = (data) =>{
      let dataFormat = '--';
      if(data){
          dataFormat = data;
      }
      return dataFormat;
    };

    return (
        <div className="info-list-box">
            <h3>Technical information:</h3>
            <br/>
            <ul className="info-list">
                <li> <span className="info-text-span"> CUDA Cores: </span> { formatData(data.cuda_cores) } </li>
                <li> <span className="info-text-span"> Base Clock (MHz): </span> { formatData(data.base_clock) } </li>
                <li> <span className="info-text-span"> Boost Clock (MHz): </span> { formatData(data.boost_clock) } </li>
                <li> <span className="info-text-span"> Memory Clock Speed: </span> { formatData(data.memory_clock_speed) } </li>
                <li> <span className="info-text-span"> Standard Memory Config: </span> { formatData(data.standard_memory_config) } </li>
                <li> <span className="info-text-span"> Memory Interface Width: </span> { formatData(data.memory_interface_width) } </li>
                <li> <span className="info-text-span"> Memory Bandwidth (GB/sec): </span> { formatData(data.memory_bandwidth) } </li>
            </ul>
        </div>
    );
};

export default InfoList;