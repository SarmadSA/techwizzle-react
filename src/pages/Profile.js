import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import InfoList from '../components/InfoList';
import data from '../data/cards.json';
import ImageImporter from '../jobs/ImageImporter';
import GameRenderer from '../jobs/GameRenderer';


const Profile = () =>{    
    const numberOfgames = 3;
    const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    const profileData = getData(getId(), data.cards);
    const profileTitle = profileData.title;
    document.title = profileTitle + " | TechWizzle";
    
    /**
     * Returns the first object in the given array that has the given id
     * 
     * @param {*} id the to check the object for  
     * @param {*} dataArray the array to search in
     */
    function getData(id, data){
        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                return data[i];
            }
            else{
                //window.location.href="/profile"; // Find a better solution using react redirect
            }
        }
    }

    function getId(){
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf("/") + 1);
        return id;
    }

    return (
        <section className="profile-section">

            <ProfileHeader //change this to ProfileHeader component where there is no shadow and there is not profile link
                title = { profileData.title }
                imgSrc = {images[profileData.image]}
                dateOfRelease = { profileData.dateOfRelease }
                price = { profileData.price }
                productLink={ profileData.link }
            />

            <InfoList />
            
            <h4 className="card-content-tittle">Preformance in games:</h4>
            
            <GameRenderer number={numberOfgames} data={profileData.games}/>

        </section>
    );
};

export default Profile;
