package com.techwizzle.site.controllers;

import com.techwizzle.site.services.ContactFormMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*") //TODO: Allow only authorized domain to perform cross requests.
@RequestMapping(path="/contact")
public class ContactFormMessageController {

    private final ContactFormMessageService contactFormMessageService;

    @Autowired
    public ContactFormMessageController(ContactFormMessageService contactFormMessageService) {
        this.contactFormMessageService = contactFormMessageService;
    }

    @PostMapping(path="/submit")
    public String submitMessage(@RequestParam String name, @RequestParam String email, @RequestParam String subject, @RequestParam String message){
        String response = "Something went wrong!"; //TODO - make a better response

        boolean successfullyCreated = contactFormMessageService.createContactFormMessage(name, email, subject, message);
        if(successfullyCreated){
            response = "Message submitted successfully. Thank you for reaching out!";
        }

        return response;
    }
}