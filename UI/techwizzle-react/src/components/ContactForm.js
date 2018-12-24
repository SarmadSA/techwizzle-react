import React from 'react';
import '../css/ContactForm.css';
//TODO uncomment form and remove p element
const ContactForm = () =>{
    return (
        <div>
            <div className="page-tittle"><h2>Contact us</h2><br/>
                <p style={{fontSize:"18px"}}>
                    To contact us please send an email to: support 'at' techwizzle 'dot' com. (Replace 'at' with @, and 'dot' with . )
                </p>
            </div>
            {/*<form className="contact-form" action="" method="post">*/}
                {/**/}
                {/*<label for="name">Name:</label>*/}
                {/*<br/>*/}
                {/*<input type="text" name="name" id="name" className="form-input input-placeholder focus-style" placeholder="Your name.."/>*/}
                {/*<span className="error-message"> * </span>*/}
                {/*<br/>*/}

                {/*<label for="email">E-mail:</label>*/}
                {/*<br/>*/}
                {/*<input type="text" name="email" id="email" className="form-input input-placeholder focus-style" placeholder="Your email.."/>*/}
                {/*<span className="error-message"> * </span>*/}
                {/*<br/>*/}

                {/*<label for="subject">Subject:</label>*/}
                {/*<br/>*/}
                {/*<input type="text" name="subject" id="subject" className="form-input input-placeholder focus-style" placeholder="Enter the subject.."/> */}
                {/*<span className="error-message"> </span>*/}
                {/*<br/>*/}

                {/*<label for="message">Message:</label>*/}
                {/*<span className="error-message"> * </span>*/}
                {/*<br/>*/}
                {/*<textarea id="message" name="message" className="contact-message input-placeholder focus-style" placeholder="Write your message.."/>*/}
                {/*<br/>*/}
                {/**/}
                {/*<input type="submit" name="submit" className="submit-button focus-style" value="Send"/>*/}
            {/*</form>*/}
        </div>
    );
};

export default ContactForm;