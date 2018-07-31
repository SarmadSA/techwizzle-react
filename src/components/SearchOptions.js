import React from 'react';
import { searchFormOptions } from "../data/initStateConsts";
import '../css/SearchOptions.css';

const SearchOptions = (props) =>{
    const searchBy = searchFormOptions.searchBy;

    return(
        <div>
            <p className="search-options-text">Match</p>

            <div className="radio-group">
                <div className="pretty p-default p-round p-thick p-smooth">
                    <input type="radio"
                           name="match"
                           defaultChecked={!searchFormOptions.isExactMatch}
                           onChange={(evt) => props.handleMatchChange(!evt.target.checked)}
                    />
                    <div className="state p-success">
                        <label>Normal Match</label>
                    </div>
                </div>

                <div className="pretty p-default p-round p-thick p-smooth">
                    <input type="radio"
                           name="match"
                           defaultChecked={searchFormOptions.isExactMatch}
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
                    <input type="checkbox" defaultChecked disabled/>
                    <div className="state p-success">
                        <label>Title</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox"
                           defaultChecked={searchBy.game}
                           onChange={(evt) => props.handleSearchByGame(evt.target.checked)}/>
                    <div className="state p-success">
                        <label>Game</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox"
                           defaultChecked={searchBy.settings}
                           onChange={(evt) => props.handleSearchBySettings(evt.target.checked)}/>
                    <div className="state p-success">
                        <label>Settings</label>
                    </div>
                </div>

                <div className="pretty p-default p-curve p-smooth">
                    <input type="checkbox"
                           defaultChecked={searchBy.resolution}
                           onChange={(evt) => props.handleSearchByResolution(evt.target.checked)}/>
                    <div className="state p-success">
                        <label>Resolution</label>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default SearchOptions;