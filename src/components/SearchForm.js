import React, {Component} from 'react';
import SearchOptions from './SearchOptions';
import '../css/SearchForm.css';

export default class SearchForm extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            searchOptionsExpanded: false,
            filtererExpanded: false
        }
        this.expandOptions = this.expandOptions.bind(this);
        this.expandSearchOptions = this.expandSearchOptions.bind(this);
        this.expandFilterer = this.expandFilterer.bind(this);
    }

    expandOptions(){
        let expandComponent = null;
        if(this.state.filtererExpanded){
            expandComponent = 
                (<div className="expand-box">
                    
                </div>);
        }
        else if(this.state.searchOptionsExpanded){
            expandComponent = 
                (<div className="expand-box">
                    <SearchOptions/>
                </div>);
        }
        return expandComponent;
    }

    expandSearchOptions(){
        this.setState({searchOptionsExpanded : !this.state.searchOptionsExpanded, filtererExpanded: false});
    }

    expandFilterer(){
        this.setState({searchOptionsExpanded : false, filtererExpanded: !this.state.filtererExpanded});
    }

    render(){
        return (
            <form className="search-form">
                <input type="text" className="search-input" id="search-input" placeholder="Search..."/>
                
                <button type="button" id="search_button">
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
                    <i className="fas fa-filter" onClick={this.expandFilterer}></i>
                    <i className="fas fa-sliders-h" onClick={this.expandSearchOptions}></i>
                </div>
                
                <select name="" id="dropdown-selection">
                    <option value="Sort by" selected disabled>Sort by</option>
                    <option value="Normal">Normal</option>
                    <option value="Trending">Trending</option>
                    <option value="Most recent">Most recent</option>
                </select>
                
                {this.expandOptions()}

            </form>
        );
    }
}