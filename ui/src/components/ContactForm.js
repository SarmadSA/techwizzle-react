import React from 'react';
import '../css/ContactForm.css';

const ContactForm = (props) =>{

    return (
        <div>
            <h1 className="page-tittle">Contact us</h1>
            <br/>
            <form className="contact-form" method="post">
                { props.children }

                <label htmlFor="name">Name:</label>
                <br/>
                <input type="text"
                       name="name"
                       id="name"
                       className="form-input input-placeholder focus-style"
                       placeholder="Your name.."
                       onChange={ props.handleNameChange } />
                <span className="error-message">  </span>
                <br/>

                <label htmlFor="email">E-mail:</label>
                <br/>
                <input type="text"
                       name="email"
                       id="email"
                       className="form-input input-placeholder focus-style"
                       placeholder="Your email.."
                       onChange={ props.handleEmailChange } />
                <span className="error-message"> * </span>
                <br/>

                <label htmlFor="subject">Subject:</label>
                <br/>
                <input type="text"
                       name="subject"
                       id="subject"
                       className="form-input input-placeholder focus-style"
                       placeholder="Enter the subject.."
                       onChange={ props.handleSubjectChange }/>
                <span className="error-message"> * </span>
                <br/>

                <label htmlFor="message">Message:</label>
                <span className="error-message"> * </span>
                <br/>
                <textarea id="message"
                          name="message"
                          className="contact-message input-placeholder focus-style"
                          placeholder="Write your message.."
                          onChange={ props.handleMessageChange }/>
                <br/>

                <input type="submit"
                       name="submit"
                       className="submit-button focus-style"
                       value="Send"
                       onClick={ props.handleClick }/>
            </form>
        </div>
    );
};

export default ContactForm;