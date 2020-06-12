import React, {Component} from 'react';
import SectionTitle from '../components/SectionTitle';
import SearchForm from '../components/SearchForm';
import CardRenderer from '../utils/CardRenderer';
import LoadButton from '../components/LoadButton';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { profilesPageOptions } from '../resources/initStateConsts';
import * as pageTitles from '../resources/pageTitles';
import * as actionCreators from "../store/actionCreators";
import ErrorBox from "../components/ErrorBox";
import {setPageTitle} from "../helpers/helperFunctions";

class ProfilesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            numberOfCards: profilesPageOptions.initialCards,
            pageSize: profilesPageOptions.initialCards,
            currentPage: 0
        };
    }

    componentDidMount = () =>{
        // check if data already fetched, if true, don't fetch again
        // call the function the fetches then stores the data here from action creators
        if(this.props.graphicsCardData.length < 1){
            this.props.onLoad();
        }
    };

    loadMore = () =>{
        //if(this.state.numberOfCards <= (this.props.graphicsCardData).length){
        //    this.setState({numberOfCards: this.state.numberOfCards + profilesPageOptions.onLoadMore});
        //}
    };

    renderContent = () =>{
        let contentToRender = null;
        if(this.props.searching && this.props.graphicsCardData.length <= 0){
            contentToRender =(<ErrorBox>
                No results found! <i className="far fa-frown"/> <br/>
                Please make sure you typed correct term and selected correct search settings
            </ErrorBox>);
        }
        else if(this.props.loading){
            contentToRender = <Loading />
        }
        else if(this.props.graphicsCardData.length <= 0){
            contentToRender = <ErrorBox> No profiles to load! <i className="far fa-frown"/> </ErrorBox>
        }
        else{
            contentToRender = <CardRenderer number={this.state.numberOfCards} data={this.props.graphicsCardData}/>;
            if(this.state.numberOfCards > (this.props.graphicsCardData).length && !this.props.loading && !this.props.searching){
                contentToRender = (<div>
                    <CardRenderer number={this.state.numberOfCards} data={this.props.graphicsCardData}/>
                    <ErrorBox> No more profiles to load! <i className="far fa-frown"/> </ErrorBox>
                </div>)
            }
        }
        return contentToRender;
    };

    renderLoadButton = () =>{
        if(this.state.numberOfCards <= (this.props.graphicsCardData).length){
            return (<LoadButton clickHandler={this.loadMore}>Load More</LoadButton>);
        }
    };


    render(){
        setPageTitle(pageTitles.PROFILES);

        return (
            <div>
                <SearchForm />
                <section>

                    <SectionTitle> All Product Profiles </SectionTitle>
                    { this.renderContent() }
                    { this.renderLoadButton() }

                </section>
            </div>
        );
    }
}

// const contains = (numberArray, number) =>{
//     let found = false;
//     let index = 0;
//
//     while(index < numberArray.length && !found){
//         if(numberArray[index] === number){
//             found = true;
//         }
//         index++;
//     }
//     return found;
// };
//
// const randomizeGamesDataOrder = (dataArray) =>{
//     const data = [];
//
//     dataArray.forEach(function (element) {
//         let numHistory = [];
//         const newGamesArray = [];
//         let index = 0;
//
//         while(index < element.games.length){
//             let randomNr = Math.floor(Math.random() * element.games.length);
//
//             if(!contains(numHistory, randomNr)){
//                 newGamesArray.push(element.games[randomNr]);
//                 numHistory.push(randomNr);
//                 index++;
//             }
//         }
//         element.games = newGamesArray;
//         data.push(element);
//     });
//
//     return data;
// };
