package com.techwizzle.site.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class ContactFormMessage {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter//@Setter
    private Long id;

    @Size(min = 1, max = 50)
    @NotNull
    @Getter @Setter
    private String name;

    @Size(min = 3, max = 254)
    @NotNull
    @Email
    @Getter @Setter
    private String email;

    @Size(max = 60)
    @Getter @Setter
    private String subject;

    @Size(min = 1, max = 2000)
    @NotNull
    @Getter @Setter
    private String Message;
}
