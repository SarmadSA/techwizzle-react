import React from 'react';
import * as pageTitles from '../resources/pageTitles';

const Comparepage = () =>{
    document.title = pageTitles.COMPARE;
    return (
        <div>
            <section style={{textAlign:'center', fontSize:'30px'}}>
                Compare future is currently not available <i className="far fa-frown"/>
            </section>
        </div>
    );
};

export default Comparepage;