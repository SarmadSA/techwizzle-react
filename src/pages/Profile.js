import React from 'react';
import CardHeader from '../components/CardHeader';
import GameShowcase from '../components/GameShowcase';
import InfoList from '../components/InfoList';
import data from '../data/cards.json';


const Profile = () =>{
    const profileData = getData(getId(), data.cards);
    const profileTitle = profileData.title;
    document.title = "TechWizzle | " + profileTitle;

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

    function getId(){
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf("/") + 1);
        return id;
    }
    
    return (
        <section className="profile-section">

            <CardHeader title = { profileData.title } />

            <InfoList />
            
            <h4 className="card-content-tittle">Preformance in games:</h4>

            <GameShowcase />
            <GameShowcase />
            <GameShowcase />
            <GameShowcase />
            <GameShowcase />
            <GameShowcase />

        </section>
    );
};

export default Profile;
