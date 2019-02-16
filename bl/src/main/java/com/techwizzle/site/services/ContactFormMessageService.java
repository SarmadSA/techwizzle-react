package com.techwizzle.site.services;

public interface ContactFormMessageService {
    boolean createContactFormMessage(String name, String email, String subject, String message);
}
