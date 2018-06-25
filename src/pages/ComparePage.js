import React from 'react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';

const Profilespage = () =>{
    return (
        <div>

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

export default Profilespage;