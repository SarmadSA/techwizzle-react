import React, {Component} from 'react';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';
import AsideFomBox from '../components/AsideFormBox';
import CardRenderer from '../utils/CardRenderer';
import LoadButton from '../components/LoadButton';
import History from '../utils/History';
import { homePageOptions } from '../resources/initStateConsts';
import * as pageTitles from '../resources/pageTitles';
import * as actionCreators from "../store/actionCreators";
import { connect } from 'react-redux';
import {setPageTitle} from "../helpers/helperFunctions";

class HomePage extends Component{

    constructor(props){
        super(props);
        this.state={
            //TODO: If page size is enough for 3 display 3, else display 2 or 4.
            numberOfFeatured  : homePageOptions.numberOfFeatured,
            numberOfLatest  : homePageOptions.numberOfLatest
        };
    }

    componentDidMount = () =>{
        // check if data already fetched, if true, don't fetch again
        // call the function that fetches then stores the data here from action creators
        if(this.props.graphicsCardData.length < 1){
            this.props.onLoad();
        }
    };

    goToProfilesPage = () =>{
        History.push('/profiles');
    };

    render(){
        setPageTitle(pageTitles.HOME);
        //const reversedData = (data.cards).slice().reverse();
        return (
            <div>
                <Slider />
                <AsideFomBox title="Get the latest updates"/>

                <section>
                    <SectionTitle> Featured Product Profiles </SectionTitle>
                    <CardRenderer number={this.state.numberOfFeatured} data={this.props.graphicsCardData}/>
                </section>

                <section>
                    <SectionTitle> Latest Product Profiles </SectionTitle>
                    <CardRenderer number={this.state.numberOfLatest} data={this.props.graphicsCardData}/>
                </section>

                <LoadButton clickHandler={this.goToProfilesPage}>Load More</LoadButton>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLoad: () => dispatch(actionCreators.fetchGraphicsCards())
    };
};

const mapStateToProps = state =>{
    return {
        graphicsCardData : state.graphicsCardData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
