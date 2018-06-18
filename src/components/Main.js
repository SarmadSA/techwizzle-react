import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle'
import '../css/Main.css';

const Main = () =>{
    return (
        <main className="main">

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

            <br className="clear"/>
        </main>
    );
};

export default Main;