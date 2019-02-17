import React, {Component} from 'react';
import ProfileHeader from '../components/ProfileHeader';
import InfoList from '../components/InfoList';
import ImageImporter from '../utils/ImageImporter';
import GameRenderer from '../utils/GameRenderer';
import SuggestedContent from '../components/SuggestedContent';
import { Redirect } from 'react-router-dom';
import * as pageTitles from '../resources/pageTitles';
import * as Helper from '../helpers/helperFunctions'
import DisqusThread from '../utils/DisqusThread'
import {connect} from "react-redux";
import * as actionCreators from "../store/actionCreators";
import ErrorBox from "./ProfilesPage";
import {PROFILE_LOADING_FEEDBACK} from '../resources/feedbackMessages';
import {PROFILE} from '../resources/defaultData';
import Loading from "../components/Loading";

class Profile extends Component{

    componentDidMount = () =>{
        // check if data already fetched, if true, don't fetch again
        // call the function the fetches then stores the data here from action creators
        if(this.props.data.length < 1){
            this.props.onLoad();
        }
    };


    /************* HELPER FUNCTIONS *************/

    /**
     * Returns the first object in the given array that has the given id
     *
     * @param {*} id the to check the object for
     * @param {*} dataArray the array to search in
     */
    getData = (id, dataArray) =>{
        let data = [], found = false, i = 0;
        //console.log(typeof id);
        while(!found && i < dataArray.length){
            //console.log(typeof dataArray[i].id);
            if(dataArray[i].id == id){
                data = dataArray[i];
                found = true;
            }
            i++;
        }
        return data;
    };

    profileNotFound = (profileData) =>{
        return profileData.length <= 0;
    };

    loadingData = () =>{
        return this.props.loading;
    };

    dataLoadingError = () =>{
        return this.props.data.length <= 0;
    };


    /************* CONTENT RENDERING FUNCTIONS *************/

    renderCommentSection = (profileData) =>{
        return (
            <div id="disqus-thread">
                <DisqusThread id={'' + profileData.id} title={profileData.title} path={"/profile/" + profileData.id}/>
            </div>
        );
    };

    //TODO: externalize text defaults (default titles, image links etc..)
    renderProfileHeader = (profileData, images) => {

        //TODO: Replace with common general helper function in all renderers and PAGE
        const getImage = (data) => {
            if(null != data.externalImageLink){
                return data.externalImageLink;
            } else if(null != data.internalImageLink){
                return images[data.internalImageLink];
            } else{
                return images[PROFILE.IMAGE_LINK];
            }
        };

        return (
            <ProfileHeader
                title = { Helper.valueOrDefault(profileData.title, PROFILE.TITLE) }
                imgSrc = { getImage(profileData) }
                dateOfRelease = { Helper.valueOrDefault(profileData.releaseDate, PROFILE.RELEASE_DATE) }
                price = { Helper.valueOrDefault(profileData.averagePrice, PROFILE.AVERAGE_PRICE) }
                productLink={ Helper.valueOrDefault(profileData.amazonLink, PROFILE.AMAZON_LINK) }
            />
        );
    };


    renderInfoList = (profileData)=>{
        return(<InfoList data={ profileData }/>);
    };

    renderGames = (gamesData, numberOfGames) => {
        return (
            <div>
                <h4 className="card-content-tittle">Performance in games:</h4>
                <GameRenderer number={numberOfGames} data={gamesData}/>
            </div>
        );
    };

    renderMoreInfoBox = () =>{
        return(
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
        );
    };

    renderEditingButtons = () =>{
        return(
            <div className="profile-input-box">
                <input className="profile-btn" type="submit" disabled value="Report correction" style={{background: "gray"}}/>
                <input className="profile-btn" type="submit" disabled value="Edit profile" style={{background: "gray"}}/>
            </div>
        );
    };

    renderSuggestedContent = (number, data) =>{
        return(<SuggestedContent number={number} data={data}/>);
    };

    renderContent = () =>{
        const profileId = this.props.match.params.id;
        const profileData = this.getData(profileId, this.props.data);

        let contentToRender = null;

        if(this.loadingData()){
            contentToRender = <Loading />
        }
        else if(this.dataLoadingError()){
            contentToRender = <ErrorBox> {PROFILE_LOADING_FEEDBACK.LOADING_FAIL} <i className="far fa-frown"/> </ErrorBox>
        }
        else if(this.profileNotFound(profileData)){
            contentToRender = <Redirect to="/Error-404"/>;
        }
        else{
            Helper.setPageTitle(Helper.valueOrDefault(profileData.title, '') + pageTitles.VB + pageTitles.MAIN);
            const numberOfGames = profileData.benchmarks.length;
            const images = ImageImporter(require.context('../images', false, /\.(png|jpe?g|svg)$/));

            contentToRender = (
                <div>
                    <section className="profile-section">
                        { this.renderProfileHeader(profileData, images) }
                        { this.renderInfoList(profileData) }
                        { this.renderGames(profileData.benchmarks, numberOfGames) }
                        { this.renderMoreInfoBox() }
                        { this.renderEditingButtons() }
                    </section>
                    { this.renderSuggestedContent(4, this.props.data) }
                    { this.renderCommentSection(profileData) }
                </div>
            );
        }
        return contentToRender;
    };

    render(){
        return (
            <div>
                { this.renderContent() }
            </div>
        );
    }
}

/************* STATE AND DATA *************/

const mapDispatchToProps = dispatch =>{
    return {
        onLoad: () => dispatch(actionCreators.fetchData())
    };
};

const mapStateToProps = state =>{
    return {
        data : state.data,
        loading: state.loading
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);