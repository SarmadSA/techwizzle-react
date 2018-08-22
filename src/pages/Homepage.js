import React, {Component} from 'react';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';
import AsideFomBox from '../components/AsideFormBox';
import data from '../resources/cards.json';
import CardRenderer from '../jobs/CardRenderer';
import LoadButton from '../components/LoadButton';
import History from '../jobs/History';
import { homePageOptions } from '../resources/initStateConsts';
import * as pageTitles from '../resources/pageTitles';

export default class Homepage extends Component{
    
    constructor(props){
        super(props);
        this.state={
            //If page size is enough for 3 display 3, else display 2 or 4.
            // numberOfFeatured  : homePageOptions.numberOfFeatured
        };
    }

    goToProfilesPage = () =>{
        History.push('/profiles');
    };

    render(){
        document.title = pageTitles.HOME;
        const reversedData = (data.cards).slice().reverse();

        return (
            <div>
                <Slider />
                <AsideFomBox title="Get the latest updates"/>

                <section>
                    <SectionTitle> Featured Product Profiles </SectionTitle>
                    <CardRenderer number={homePageOptions.numberOfFeatured} data={data.cards}/>
                </section>

                <section>
                    <SectionTitle> Latest Product Profiles </SectionTitle>
                    <CardRenderer number={homePageOptions.numberOfLatest} data={reversedData}/>

                </section>
                
                <LoadButton clickHandler={this.goToProfilesPage}>Load More</LoadButton>

            </div>
        );
    }
}