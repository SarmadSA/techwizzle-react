import React, {Component} from 'react';
import ProfileHeader from '../components/ProfileHeader';
import InfoList from '../components/InfoList';
import data from '../resources/cards.json';
import ImageImporter from '../jobs/ImageImporter';
import GameRenderer from '../jobs/GameRenderer';
import SuggestedContent from '../components/SuggestedContent';
import { Redirect } from 'react-router-dom';
import * as pageTitles from '../resources/pageTitles';

export default class Profile extends Component{
    constructor(props) {
        super(props);
    }

    /**
     * Returns the first object in the given array that has the given id
     *
     * @param {*} id the to check the object for
     * @param {*} dataArray the array to search in
     */
    getData = (id, dataArray) =>{
        let data = [], found = false, i = 0;
        while(!found && i < dataArray.length){
            if(dataArray[i].id === id){
                data = dataArray[i];
                found = true;
            }
            i++
        }
        return data;
    };

    render(){
        const profileId = this.props.match.params.id;
        const profileData = this.getData(profileId, data.cards);

        //If Profile not found redirect to not found page
        if(profileData.length <= 0){
            return <Redirect to="/Error-404"/>;
        }

        const numberOfGames = profileData.games.length;
        const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));
        document.title = profileData.title + pageTitles.VB + pageTitles.MAIN;

        return (
            <div>
                <section className="profile-section">
                    <ProfileHeader
                        title = { profileData.title }
                        imgSrc = {images[profileData.image]}
                        dateOfRelease = { profileData.release_date }
                        price = { profileData.price }
                        productLink={ profileData.amazon_link }
                    />

                    <InfoList data={ profileData.technical_info }/>

                    <h4 className="card-content-tittle">Performance in games:</h4>

                    <GameRenderer number={numberOfGames} data={profileData.games}/>

                    <div className="profie-more-info-box">
                        <h2 className="more-info-title">More Information</h2>
                        <h3 className="info-title">Resource usage:</h3>
                        <ul className="resouce-usage-list">
                            <li>Average power usage: - </li>
                            <li>Average memory usage: - </li>
                            <li>Average temperature: - </li>
                        </ul>
                        <h3 className="info-title danger">NOTE!</h3>
                        <p>
                            Framerates depend on several factors. These results are Average, they may not be 100% accurate,
                            it all depend on build components, especially the CPU.
                            Results achieved using high performance CPU.
                        </p>
                    </div>

                    <div className="profile-input-box">
                        <input className="profile-btn" type="submit" disabled value="Report correction" style={{background: "gray"}}/>
                        <input className="profile-btn" type="submit" disabled value="Edit profile" style={{background: "gray"}}/>
                    </div>
                </section>

                <SuggestedContent number={4} data={data.cards}/>

            </div>
        );
    }
}