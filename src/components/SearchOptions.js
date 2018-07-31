import React from 'react';
import '../css/SearchOptions.css';

const SearchOptions = (props) =>{

    return(
        <div>
            <p className="search-options-text">Match</p>

            <div className="radio-group">
                <div className="pretty p-default p-round p-thick p-smooth">
                    <input type="radio"
                           name="match"
                           defaultChecked
                           onChange={(evt) => props.handleMatchChange(!evt.target.checked)}
                    />
                    <div className="state p-success">
                        <label>Normal Match</label>
                    </div>
                </div>

                <div className="pretty p-default p-round p-thick p-smooth">
                    <input type="radio"
                           name="match"
                           onChange={(evt) => props.handleMatchChange(evt.target.checked)}
                    />
                    <div className="state p-danger">
                        <label>Exact Match</label>
                    </div>
                </div>
            </div>

            <p className="search-options-text">Search By</p>
            
            <div>
                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox" checked disabled/>
                    <div className="state p-success">
                        <label>Title</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox" checked onChange={(evt) => props.handleSearchByGame(evt.target.checked)}/>
                    <div className="state p-success">
                        <label>Game</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox" checked onChange={(evt) => props.handleSearchBySettings(evt.target.checked)}/>
                    <div className="state p-success">
                        <label>Settings</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox" checked onChange={(evt) => props.handleSearchByResolution(evt.target.checked)}/>
                    <div className="state p-success">
                        <label>Resolution</label>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default SearchOptions;