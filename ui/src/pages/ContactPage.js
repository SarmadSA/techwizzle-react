import React, {Component} from 'react';
import querystring from 'querystring';
import * as pageTitles from '../resources/pageTitles';
import * as API from '../resources/API';
import {executeHttpPost} from '../services/ApiClient';
import * as Helper from '../helpers/helperFunctions'
import {CONTACT_FORM_FEEDBACK} from '../resources/feedbackMessages';
import {ALERT_STYLES} from '../resources/styles';
import {consolePrint} from '../helpers/debugger'
import ContactForm from '../components/ContactForm';
import AlertBox from "../components/AlertBox";

export default class ContactPage extends Component{

    constructor(props) {
        super(props);

        this.state={
            submitted: false,
            alertMessage: "",
            alertStyle: ""
        };
    }

    formInput = {
        name : "",
        email : "",
        subject : "",
        message : ""
    };

    renderFeedBack = () =>{
        if(this.state.submitted){
            return(
                <AlertBox variant={this.state.alertStyle}>
                    {this.state.alertMessage}
                </AlertBox>
            );
        }
    };

    submitForm = (e) =>{
        e.preventDefault();
        const stringifyedInput = querystring.stringify(this.formInput);
        executeHttpPost(API.FORM_SUBMIT_URL, stringifyedInput, this.onSubmittingSuccess, this.onSubmittingFailure);
        this.setState({submitted: true});
    };

    onSubmittingSuccess = (url, response) =>{
        this.setState({alertMessage: Helper.valueOrDefault(response.data, CONTACT_FORM_FEEDBACK.SUBMIT_SUCCESS)});
        this.setState({alertStyle: ALERT_STYLES.SUCCESS});
        Helper.scrollToTop();
    };

    onSubmittingFailure = (url, response) =>{
        this.setState({alertMessage: Helper.valueOrDefault(response.data, CONTACT_FORM_FEEDBACK.SUBMIT_FAIL)});
        this.setState({alertStyle: ALERT_STYLES.FAIL});
        Helper.scrollToTop();
    };

    handleNameChange = (value) =>{
        consolePrint("name: " + value);
        this.formInput.name = value;
    };

    handleEmailChange = (value) =>{
        consolePrint("email: " + value);
        this.formInput.email = value;
    };

    handleSubjectChange = (value) =>{
        consolePrint("subject: " + value);
        this.formInput.subject = value;
    };

    handleMessageChange = (value) =>{
        consolePrint("message: " + value);
        this.formInput.message = value;
    };

    render(){

        Helper.setPageTitle(pageTitles.CONTACT);

        return (
            <ContactForm
                handleNameChange={ (e)=> this.handleNameChange(e.target.value.trim()) }
                handleEmailChange={ (e)=> this.handleEmailChange(e.target.value.trim()) }
                handleSubjectChange={ (e)=> this.handleSubjectChange(e.target.value.trim()) }
                handleMessageChange={ (e)=> this.handleMessageChange(e.target.value.trim()) }
                handleClick={ (e)=> this.submitForm(e) }>
                { this.renderFeedBack() }
            </ContactForm>
        );
    }
}