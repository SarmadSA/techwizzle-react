import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import InfoList from '../components/InfoList';
import data from '../data/cards.json';
import ImageImporter from '../jobs/ImageImporter';
import GameRenderer from '../jobs/GameRenderer';
import SuggestedContent from '../components/SuggestedContent';


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
        <div>
            <section className="profile-section">

                <ProfileHeader
                    title = { profileData.title }
                    imgSrc = {images[profileData.image]}
                    dateOfRelease = { profileData.dateOfRelease }
                    price = { profileData.price }
                    productLink={ profileData.link }
                />

                <InfoList />
                
                <h4 className="card-content-tittle">Preformance in games:</h4>
                
                <GameRenderer number={numberOfgames} data={profileData.games}/>

                <div className="profie-more-info-box">
                    <h2 className="more-info-title">More Information</h2>
                    <h3 className="info-title">Resource usage:</h3>
                    <ul className="resouce-usage-list">
                        <li>Avrage power usage: 11 kw/h </li>
                        <li>Avrage memory usage: - </li>
                        <li>Avrage temperature: - </li>
                    </ul>
                    <h3 className="info-title">Other:</h3>
                    <p>Game result are avrage result, they may not be 100% accruate, it will always depend on build components, specialy the CPU. Results achieved using a hight prefomance CPU that does not battleneck. Click for more info.</p>
                </div>

                <div className="profile-input-box">
                    <input className="profile-btn" type="submit" value="Report correction"/>
                    <input className="profile-btn" type="submit" disabled value="Edit profile" style={{background: "gray"}}/>
                </div>   
            </section>

            <SuggestedContent number={4} data={data.cards} />

        </div>
    );
};

export default Profile;
