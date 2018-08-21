import React, {Component} from 'react';
import SectionTitle from '../components/SectionTitle';
import SearchForm from '../components/SearchForm';
import CardRenderer from '../jobs/CardRenderer';
import LoadButton from '../components/LoadButton';
import { connect } from 'react-redux';
import * as pageTitles from '../resources/pageTitles';

class Profilespage extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfCards: 3
        };
    }

    loadMore = () =>{
        if(this.state.numberOfCards <= (this.props.data).length){
            this.setState({numberOfCards: this.state.numberOfCards + 6});
        }
    };

    renderLoadButton = () =>{
        if(this.state.numberOfCards <= (this.props.data).length){
            return (<LoadButton clickHandler={this.loadMore}>Load More</LoadButton>);
        }
    };

    render(){
        document.title = pageTitles.PROFILES;
        return (
            <div>
                <SearchForm />
                <section>
                    
                    <SectionTitle> All Product Profiles </SectionTitle>
                    <CardRenderer number={this.state.numberOfCards} data={this.props.data}/>
                    {this.renderLoadButton()}

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

const mapStateToProps = state =>{
    return {
        data : state.data
    };
};

export default connect(mapStateToProps)(Profilespage);