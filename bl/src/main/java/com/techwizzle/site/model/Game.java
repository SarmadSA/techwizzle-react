package com.techwizzle.site.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Game {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter//@Setter
    private Integer id;

    @Size(min = 1, max = 100)
    @NotNull
    @Getter @Setter
    private String title;

    @Size(min = 1, max = 20)
    @NotNull
    @Getter @Setter
    private String shortTitle;

    @Column(nullable = true)
    @Getter @Setter
    private Date releaseDate;

    @Column(nullable = true)
    @Size(max = 150)
    @Getter @Setter
    private String internalImageLink;

    @Column(nullable = true)
    @Size(max = 1000)
    @Getter @Setter
    private String externalImageLink;

}