import React from 'react';
import '../css/SearchOptions.css';

const SearchOptions = () =>{

    return(
        <div>
            <p className="search-options-text">Match</p>

            <div className="radio-group">
                <div className="pretty p-default p-round p-thick p-smooth">
                    <input type="radio" name="match" checked/>
                    <div className="state p-success">
                        <label>Normal Match</label>
                    </div>
                </div>

                <div className="pretty p-default p-round p-thick p-smooth">
                    <input type="radio" name="match"/>
                    <div className="state p-success">
                        <label>Exact Match</label>
                    </div>
                </div>
            </div>

            <p className="search-options-text">Search By</p>
            
            <div className="radio-group">
                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox" checked disabled/>
                    <div className="state p-success">
                        <label>Title</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox" />
                    <div className="state p-success">
                        <label>Game</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox" />
                    <div className="state p-success">
                        <label>Settings</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox" />
                    <div className="state p-success">
                        <label>Resolution</label>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default SearchOptions;