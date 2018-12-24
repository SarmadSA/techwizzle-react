import React, {Component} from 'react';
import SearchOptions from './SearchOptions';
import FiltererOptions from './FiltererOptions';
import { connect } from 'react-redux';
import { searchFormOptions } from "../resources/initStateConsts";
import * as actionCreators from '../store/actionCreators';
import '../css/SearchForm.css';

const searchOptions = {
    inputValue: searchFormOptions.inputValue,
    isExactMatch: searchFormOptions.isExactMatch,
    searchBy: {
        game: searchFormOptions.searchBy.game,
        settings: searchFormOptions.searchBy.settings,
        resolution: searchFormOptions.searchBy.resolution
    },
    fps:{
        min: searchFormOptions.fps.min,
        max: searchFormOptions.fps.max
    },
    maxPrice: searchFormOptions.maxPrice
};

class SearchForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            optionsDisplay: 'none',
            filtererDisplay: 'none',
            filtererClass: '',
            optionsClass: ''
        };
    }

    componentWillMount = () =>{
        this.props.onLoad();
    };

    expandSearchOptions = () =>{
        if(this.state.optionsDisplay === 'none'){
            this.setState({optionsDisplay : 'block', filtererDisplay: 'none', optionsClass: 'expanded', filtererClass: ''});
        }
        else{
            this.setState({optionsDisplay : 'none', filtererDisplay: 'none', optionsClass: '', filtererClass: ''});
        }
    };

    expandFilterer = () =>{
        if(this.state.filtererDisplay === 'none'){
            this.setState({optionsDisplay : 'none', filtererDisplay: 'block', filtererClass: 'expanded', optionsClass: ''});
        }
        else{
            this.setState({optionsDisplay : 'none', filtererDisplay: 'none', filtererClass: '', optionsClass: ''});
        }
    };

    render(){
        const props = this.props;

        const updateInput = (value) =>{
            searchOptions.inputValue = value.trim();
        };

        const updateExactMatch = (value) =>{
            searchOptions.isExactMatch = value;
        };

        const setSearchByGame = (value) =>{
            searchOptions.searchBy.game = value;
        };

        const setSearchBySettings = (value) =>{
            searchOptions.searchBy.settings = value;
        };

        const setSearchByResolution = (value) =>{
            searchOptions.searchBy.resolution = value;
        };

        const updateMaxPrice = (value) =>{
            searchOptions.maxPrice = value;
        };

        const updateFps = (min, max) =>{
            searchOptions.fps.min = min;
            searchOptions.fps.max = max;
        };

        return (
            <form className="search-form" onSubmit={(evt) => evt.preventDefault()}>
                <input type="text"
                       // list="suggestions"
                       className="search-input"
                       id="search-input"
                       autoComplete="off"
                       placeholder="Search..."
                       onChange={(evt) => {updateInput(evt.target.value); props.onSearch()}}
                />
                {/*<datalist id="suggestions">*/}
                    {/*<option value="GTX 1060">GTX 1060</option>*/}
                    {/*<option value="GTX 1070">GTX 1070</option>*/}
                    {/*<option value="GTX 1080">GTX 1080</option>*/}
                {/*</datalist>*/}

                <button type="button" id="search_button" onClick={ props.onSearch }>
                    <svg viewBox="0 0 36.02 40.02">
                        <defs>
                            <symbol id="search_symbol" viewBox="0 0 32.87 36.83">
                                <circle className="cls-1" cx="12.5" cy="12.5" r="10"/>
                                <line className="cls-1" x1="20.53" y1="19.50" x2="32.5" y2="29.5"/>
                            </symbol>
                        </defs>
                        <use width="20" height="20" transform="translate(6.5 8.5) scale(1.2 1.2)" xlinkHref="#search_symbol"/>
                    </svg>	
                </button>
    
                <div className="filterers">
                    <i className={"fas fa-filter " + this.state.filtererClass} onClick={this.expandFilterer}/>
                    <i className={"fas fa-sliders-h " + this.state.optionsClass} onClick={this.expandSearchOptions}/>
                </div>
                
                <select name="" id="dropdown-selection" disabled>
                    <option value="Sort by" selected disabled>Sort by</option>
                    <option value="Normal" defaultValue>Normal</option>
                    <option value="Trending">Trending</option>
                    <option value="Most recent">Most recent</option>
                </select>
                
                <div className="expand-box" style={{display: this.state.optionsDisplay}}>
                    <SearchOptions handleMatchChange={ (match) => {updateExactMatch(match); props.onSearch()} }
                                   handleSearchByGame={ (e) => {setSearchByGame(e.target.checked); props.onSearch()} }
                                   handleSearchBySettings={ (e) => { setSearchBySettings(e.target.checked); props.onSearch()} }
                                   handleSearchByResolution={ (e) => { setSearchByResolution(e.target.checked); props.onSearch()} }
                    />
                </div>
                
                <div className="expand-box" style={{display: this.state.filtererDisplay}}>
                    <FiltererOptions handlePriceChange={ (maxPrice) => {updateMaxPrice(maxPrice); props.onSearch()} }
                                     handleFpsChange={ (min, max) => {updateFps(min, max); props.onSearch()} }
                    />
                </div>

            </form>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onSearch: () => dispatch(actionCreators.search(searchOptions)),
        onLoad: () => dispatch(actionCreators.resetState())
    };
};

export default connect(null, mapDispatchToProps)(SearchForm);