import React from 'react';
import '../css/ContactForm.css';
import * as API from '../resources/API'
import executeHttpPost from '../services/ApiClient';


const ContactForm = () =>{
    const url = API.FORM_SUBMIT;
    const params = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    function handleSubmit(e){
        e.preventDefault();
        executeHttpPost(url, params, onSuccess, onFailure);
    }

    function onSuccess(url, res){
        console.log(res);
        //TODO: look at response form server and give user feedback
    }
    
    function onFailure(url, res) {
        console.log(res);
        //TODO: Some error accrued (network or something went worng), no need to give user feedback, just say
        // something went wrong Please try again later
    }

    const updateNameParam = (value) =>{
        params.name = value;
    };

    const updateEmailParam = (value) =>{
        params.email = value;
    };

    const updateSubjectParam = (value) =>{
        params.subject = value;
    };

    const updateMessageParam = (value) =>{
        params.message = value;
    };

    return (
        <div>
            <h1 className="page-tittle">Contact us</h1>
            <br/>

            <form className="contact-form" action="#" method="post">

                <label for="name">Name:</label>
                <br/>
                <input type="text"
                       name="name"
                       id="name"
                       className="form-input input-placeholder focus-style"
                       placeholder="Your name.."
                       onChange={(evt) => {updateNameParam(evt.target.value)}}
                />
                <span className="error-message">  </span>
                <br/>

                <label for="email">E-mail:</label>
                <br/>
                <input type="text"
                       name="email"
                       id="email"
                       className="form-input input-placeholder focus-style"
                       placeholder="Your email.."
                       onChange={(evt) => {updateEmailParam(evt.target.value)}}
                />
                <span className="error-message"> * </span>
                <br/>

                <label for="subject">Subject:</label>
                <br/>
                <input type="text"
                       name="subject"
                       id="subject"
                       className="form-input input-placeholder focus-style"
                       placeholder="Enter the subject.."
                       onChange={(evt) => {updateSubjectParam(evt.target.value)}}
                />
                <span className="error-message"> * </span>
                <br/>

                <label for="message">Message:</label>
                <span className="error-message"> * </span>
                <br/>
                <textarea id="message"
                          name="message"
                          className="contact-message input-placeholder focus-style"
                          placeholder="Write your message.."
                          onChange={(evt) => {updateMessageParam(evt.target.value)}}
                />
                <br/>

                <input type="submit" name="submit" className="submit-button focus-style" value="Send" onClick={(e)=> handleSubmit(e)}/>
            </form>
        </div>
    );
};

export default ContactForm;