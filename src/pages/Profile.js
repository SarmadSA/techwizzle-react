import React from 'react';
import CardHeader from '../components/CardHeader';
import GameShowcase from '../components/GameShowcase';
import InfoList from '../components/InfoList';
import data from '../data/cards.json';
import importAllImages from '../components/ImageImporter';
import Card from '../components/Card';
import DataContext, {DataProvider} from '../data/GlobalDataProvider';


const Profile = () =>{
    //let dataId = 1;
    //const cardsData = data.cards;


    //console.log(dataId);

    
    //console.log(Card.getId());
   // const profileName = profileData.title;
    //document.title = "TechWizzle | " + profileName;

    function getData(id, dataa){
        for(let i = 0; i < dataa.length; i++){
            if(dataa[i].id === id){
              return dataa[i];
          }
        }
    }

    /**
     * Returns the first object in the given array that has the given id
     * 
     * @param {*} id the to check the object for  
     * @param {*} dataArray the array to search in
     */
    // function getData2(id, dataArray){
    //     dataArray.forEach(function(obj){
    //         if(obj.id === id){
    //             return obj;
    //         }
    //     });
    // }

    //const list = data.cards;
    //console.log(getData("1",list));

    //console.log(data.cards[0]);
    //console.log(getData(1,(data.cards)));
    //const profileData = getData(dataId, data.cards);

    return (
        <section className="profile-section">

            <DataProvider>
                <DataContext.Consumer>
                    {(context) => (
                        <React.Fragment>

                            <CardHeader title = { getData(context.state.selectedProfile, data.cards).title } />
                            
                            {console.log(window.location.pathname)}
                                


                            <InfoList />
                            
                            <h4 className="card-content-tittle">Preformance in games:</h4>

                            <GameShowcase />
                            <GameShowcase />
                            <GameShowcase />
                            <GameShowcase />
                            <GameShowcase />
                            <GameShowcase />

                        </React.Fragment>
                    )}
                </DataContext.Consumer>
            </DataProvider>

        </section>
    );
};

export default Profile;
