import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';
import Slider from './Slider';

const Homepage = () =>{
    return (
        <div>
            <Slider />
            
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