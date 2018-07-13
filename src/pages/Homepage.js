import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';
import AsideFomBox from '../components/AsideFormBox';
import data from '../data/cards.json';
import CardRenderer from '../jobs/CardRenderer';

const Homepage = () =>{
    const numberOfFutured = 3;
    document.title = "TechWizzle | Home";
    return (
        <div>
            <Slider />
            <AsideFomBox title="Get the latest updates"/>

            <section>
                <SectionTitle> Featured Product Profiles </SectionTitle>
                <CardRenderer number={3} data={data.cards}/>
            </section>

            <section>
                <SectionTitle> Latest Product Profiles </SectionTitle>
                
                <CardRenderer number={3} data={data.cards}/>

            </section>
        </div>
    );
};

export default Homepage;