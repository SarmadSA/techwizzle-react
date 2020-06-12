import React, {Component} from 'react';
import SectionTitle from '../components/SectionTitle';
import SearchForm from '../components/SearchForm';
import CardRenderer from '../utils/CardRenderer';
import LoadButton from '../components/LoadButton';
import Loading from '../components/Loading';
import { profilesPageOptions } from '../resources/initStateConsts';
import * as pageTitles from '../resources/pageTitles';
import ErrorBox from "../components/ErrorBox";
import {setPageTitle} from "../helpers/helperFunctions";
import {executeHttpGet} from "../services/ApiClient";
import {CARDS_URL} from "../resources/API";

export default class ProfilesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            numberOfCards: profilesPageOptions.initialCards,
            pageSize: profilesPageOptions.initialCards,
            currentPage: 0
        };
    }

    componentDidMount = () =>{
        this.onload();
    };

    onload = () =>{
        this.setState({isLoading: true});

        const requestParams = "?size=" + 3 + "&page=" + this.state.currentPage;
        executeHttpGet(CARDS_URL + requestParams, this.onDataFetchSuccess, this.onDataFetchFailure);
    }

    onDataFetchSuccess = (url, response) => {
        this.setState({data: this.state.data.concat(response.data), isLoading: false});
    }

    onDataFetchFailure = (url, response) => {
        this.setState({isLoading: false});
        //TODO: Handle fetching failure (the loading animation will go forever if failure not handled)
        //this.setState({error: true});
    }

    loadMore = () =>{
        const requestParams = "?size=" + 3 + "&page=" + Number(this.state.currentPage + 1);
        this.setState({currentPage: Number(this.state.currentPage + 1)}, ()=>console.log(this.state.currentPage));

        executeHttpGet(CARDS_URL + requestParams, this.onDataFetchSuccess, this.onDataFetchFailure);

        //if(this.state.numberOfCards <= (this.props.graphicsCardData).length){
        //    this.setState({numberOfCards: this.state.numberOfCards + profilesPageOptions.onLoadMore});
        //}
    };

    renderContent = () =>{
        let contentToRender = null;
        if(this.state.isLoading){
            contentToRender = <Loading />
        }
        else if(!this.state.isLoading && this.state.data.length <= 0){
            contentToRender =(<ErrorBox>
                No results found! <i className="far fa-frown"/> <br/>
                Please make sure you typed correct term and selected correct search settings
            </ErrorBox>);
        }
        else if(this.state.data.length <= 0){
            contentToRender = <ErrorBox> No profiles to load! <i className="far fa-frown"/> </ErrorBox>
        }
        else{
            contentToRender = <CardRenderer data={this.state.data}/>;
            //if(this.state.numberOfCards > (this.state.data).length && !this.props.loading && !this.props.searching){
            //    contentToRender = (<div>
            //        <CardRenderer number={this.state.numberOfCards} data={this.state.data}/>
            //        <ErrorBox> No more profiles to load! <i className="far fa-frown"/> </ErrorBox>
            //    </div>)
            //}
        }
        return contentToRender;
    };

    renderLoadButton = () =>{
        //if(this.state.numberOfCards <= (this.state.data).length){
            return (<LoadButton clickHandler={this.loadMore}>Load More</LoadButton>);
        //}
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
