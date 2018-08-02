import React from 'react';
import * as pageTitles from '../data/pageTitles';
import ContactForm from '../components/ContactForm';

const Contactpage = () =>{
    document.title = pageTitles.CONTACT;
    return (
        <ContactForm />
    );
};

export default Contactpage;