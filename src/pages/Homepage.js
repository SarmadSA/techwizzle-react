import React, {Component} from 'react';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';
import AsideFomBox from '../components/AsideFormBox';
import data from '../data/cards.json';
import CardRenderer from '../jobs/CardRenderer';
import LoadButton from '../components/LoadButton';
import History from '../jobs/History';

export default class Homepage extends Component{
    
    constructor(props){
        super(props);
        this.state={
            //If page size is enough for 3 display 3, else display 2 or 4.
            numberOfFeatured  : 3
        }
        this.goToProfilesPage = this.goToProfilesPage.bind(this);
    }

    goToProfilesPage(){
        History.push('/profiles');
    }

    render(){
        document.title = "TechWizzle | Home";
        
        return (
            <div>
                <Slider />
                <AsideFomBox title="Get the latest updates"/>

                <section>
                    <SectionTitle> Featured Product Profiles </SectionTitle>
                    <CardRenderer number={this.state.numberOfFeatured} data={data.cards}/>
                </section>

                <section>
                    <SectionTitle> Latest Product Profiles </SectionTitle>
                    <CardRenderer number={3} data={data.cards}/>

                </section>
                
                <LoadButton clickHandler={this.goToProfilesPage}>Load More</LoadButton>

            </div>
        );
    }
}