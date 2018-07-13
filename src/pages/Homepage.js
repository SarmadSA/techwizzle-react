import React from 'react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';
import AsideFomBox from '../components/AsideFormBox';
import data from '../data/cards.json';
import ImageImporter from '../jobs/ImageImporter';

const Homepage = () =>{
    const numberOfFutured = 3;
    document.title = "TechWizzle | Home";
    return (
        <div>
            <Slider />
            <AsideFomBox title="Get the latest updates"/>

            <section>
                <SectionTitle> Featured Product Profiles </SectionTitle>
                {/* {window.scrollTo(0, 0)} */}
                {renderCards(numberOfFutured)}
            
            </section>

            <section>
                <SectionTitle> Latest Product Profiles </SectionTitle>
                
                {renderCards(3)}

            </section>
        </div>
    );
};

function renderCards(number){
    const cards = [];
    for(let i = 0; i < number; i++){
        const cardData = data.cards[i];
        const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));        
        cards.push(
                    <Card 
                        id={cardData.id}
                        imgSrc={images[cardData.image]}
                        title={cardData.title}
                        dateOfRelease={cardData.dateOfRelease}
                        price={cardData.price}
                        productLink={cardData.link}
                        profileLink={"/profile/" + cardData.id}
                        gamesData={cardData.games}
                    />
                );
    }
    return cards;
}

export default Homepage;