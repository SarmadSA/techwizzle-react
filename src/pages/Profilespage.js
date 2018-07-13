import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SearchForm from '../components/SearchForm';
import data from '../data/cards.json';
import CardRenderer from '../jobs/CardRenderer';

const Profilespage = () =>{
    document.title = "TechWizzle | Profiles";
    return (
        <div>
            <SearchForm />
            <section>
                <SectionTitle> All Product Profiles </SectionTitle>
                <CardRenderer number={3} data={data.cards}/>
                <CardRenderer number={3} data={data.cards}/>
                <CardRenderer number={3} data={data.cards}/>
            </section>
        </div>
    );
};

export default Profilespage;