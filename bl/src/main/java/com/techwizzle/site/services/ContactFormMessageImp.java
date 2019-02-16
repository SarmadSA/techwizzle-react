package com.techwizzle.site.services;

import com.techwizzle.site.model.ContactFormMessage;
import com.techwizzle.site.repositories.ContactFormMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactFormMessageImp implements ContactFormMessageService{
    private ContactFormMessageRepository contactFormMessageRepository;

    @Autowired
    public ContactFormMessageImp(ContactFormMessageRepository contactFormMessageRepository) {
        this.contactFormMessageRepository = contactFormMessageRepository;
    }

    @Override
    public boolean createContactFormMessage(String name, String email, String subject, String message) {
        ContactFormMessage contactFormMessage = new ContactFormMessage();
        contactFormMessage.setName(name);
        contactFormMessage.setEmail(email);
        contactFormMessage.setSubject(subject);
        contactFormMessage.setMessage(message);
        contactFormMessageRepository.save(contactFormMessage);
        return true;
    }
}
