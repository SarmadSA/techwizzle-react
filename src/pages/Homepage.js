import React from 'react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';
import AsideFomBox from '../components/AsideFormBox';

const Homepage = () =>{
    return (
        <div>
            <Slider />
            <AsideFomBox title="Get the latest updates"/>

            <section>
                <SectionTitle> Featured Product Profiles </SectionTitle>
                <Card />
                <Card />
                <Card />
            </section>

            <section>
                <SectionTitle> New Product Profiles </SectionTitle>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    );
};

export default Homepage;