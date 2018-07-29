import React, {Component} from 'react';
import SearchOptions from './SearchOptions';
import FiltererOptions from './FiltererOptions';
import '../css/SearchForm.css';
import { connect } from 'react-redux';

let inputValue = '';
let exactMatch = false;

class SearchForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            optionsDisplay: 'none',
            filtererDisplay: 'none',
            filtererClass: '',
            optionsClass: '',
            inputValue: '',
            exactMatch: false

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

        const updateInput = (value) =>{
            inputValue = value.trim();
        };

        const updateExactMatch = (value) =>{
            exactMatch = value;
        };

        return (
            <form className="search-form" onSubmit={(evt) => evt.preventDefault()}>
                <input type="text"
                       className="search-input"
                       id="search-input"
                       placeholder="Search..."
                       onChange={(evt) => {updateInput(evt.target.value); this.props.onSearch(inputValue, exactMatch)}}
                />
                
                <button type="button" id="search_button" onClick={ () => this.props.onSearch(inputValue, exactMatch) }>
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
                    <option value="Normal">Normal</option>
                    <option value="Trending">Trending</option>
                    <option value="Most recent">Most recent</option>
                </select>
                
                <div className="expand-box" style={{display: this.state.optionsDisplay}}>
                    <SearchOptions handleChange={ (exactMatch) => {updateExactMatch(exactMatch); this.props.onSearch(inputValue, exactMatch)} }/>
                </div>
                
                <div className="expand-box" style={{display: this.state.filtererDisplay}}>
                    <FiltererOptions/>
                </div>

            </form>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onSearch: (value,exactMatch) => dispatch({type: 'SEARCH', keyWord: value, exactMatch: exactMatch}),
    };
};

export default connect(null, mapDispatchToProps)(SearchForm);