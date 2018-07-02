import React from 'react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';
import AsideFomBox from '../components/AsideFormBox';
import data from '../data/cards.json';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

const Homepage = () =>{
    return (
        <div>
            <Slider />
            <AsideFomBox title="Get the latest updates"/>

            <section>
                <SectionTitle> Featured Product Profiles </SectionTitle>
                <Card title={data.cards[0].title}/>

                {renderCards(2)}
            
            </section>

            <section>
                <SectionTitle> New Product Profiles </SectionTitle>
                
                {renderCards(2)}

            </section>
        </div>
    );
};

function renderCards(number){
    const cards = [];
    for(let i = 0; i < number; i++){
        const cardData = data.cards[i];
        const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
        cards.push(
                    <Card 
                        imgSrc={images[cardData.image]}
                        title={cardData.title}
                        dateOfRelease={cardData.dateOfRelease}
                        price={cardData.price}
                        productLink={cardData.link}
                        profileLink={cardData.profile}
                    />
                );
    }
    return cards;
}

export default Homepage;