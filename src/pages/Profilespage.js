import React from 'react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import SearchForm from '../components/SearchForm';

const Profilespage = () =>{
    document.title = "TechWizzle | Profiles";
    return (
        <div>
            <SearchForm />
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