import React, {Component} from 'react';
import SearchOptions from './SearchOptions';
import FiltererOptions from './FiltererOptions';
import '../css/SearchForm.css';
import { connect } from 'react-redux';


const searchOptions = {
    inputValue: '',
    isExactMatch: false,
    searchBy: {
        game: false,
        settings: false,
        resolution: false
    },
    fps:{
        min: 30,
        max: 300
    },
    maxPrice: 900,
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
                       className="search-input"
                       id="search-input"
                       placeholder="Search..."
                       onChange={(evt) => {updateInput(evt.target.value); props.onSearch()}}
                />
                
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
                    <SearchOptions handleMatchChange={ (match) => { updateExactMatch(match); props.onSearch() } }
                                   handleSearchByGame={ (searchByGame) => { setSearchByGame(searchByGame); props.onSearch()} }
                                   handleSearchBySettings={ (searchBySettings) => { setSearchBySettings(searchBySettings); props.onSearch()} }
                                   handleSearchByResolution={ (searchByResolution) => { setSearchByResolution(searchByResolution); props.onSearch()} }
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
    const searchBy = searchOptions.searchBy;
    const fps = searchOptions.fps;
    return {
        onSearch: () => dispatch({
            type: 'SEARCH',
            keyWord: searchOptions.inputValue,
            exactMatch: searchOptions.isExactMatch,
            searchBy:{
                game: searchBy.game,
                settings: searchBy.settings,
                resolution: searchBy.resolution
            },
            fps:{
                min: fps.min,
                max: fps.max
            },
            maxPrice: searchOptions.maxPrice
        })
    };
};

export default connect(null, mapDispatchToProps)(SearchForm);