import React from 'react';
import Card from '../components/Card';
import ErrorBox from '../components/ErrorBox';
import ImageImporter from './ImageImporter';

const CardRenderer = (props) =>{
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    const cards = [];
    if(props.data){
        for(let i = 0; i < props.number; i++){
            const cardData = props.data[i];
            if(cardData){
                cards.push(
                    <Card
                        key={cardData.id}
                        id={cardData.id}
                        imgSrc={cardData.external_image ? cardData.external_image : images[cardData.image]}
                        title={cardData.short_title}
                        dateOfRelease={cardData.release_date}
                        price={cardData.price}
                        productLink={cardData.amazon_link}
                        profileLink={"/profile/" + cardData.id}
                        gamesData={cardData.games}
                    />
                );
            }
            else{
                //When there are no more data in the array.
                if(props.data.length <= 0){
                    cards.push(<ErrorBox>
                                    No results found! <i className="far fa-frown"/> <br/>
                                    Please make sure you typed correct term and selected correct search settings
                                </ErrorBox>);
                }
                else{
                    cards.push(<ErrorBox> No more profiles to load! <i className="far fa-frown"/> </ErrorBox>);
                }
                return cards;
            }
        }
    }
    else{
        //When there is no data at all (data not passed to the component or data array passed is empty)
        cards.push(<ErrorBox> No profiles to load! <i className="far fa-frown"/> </ErrorBox>);
    }
    return cards;
};

export default CardRenderer;