package com.techwizzle.site.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter//@Setter
    private Integer id;

    @Getter
    private String uuid = UUID.randomUUID().toString().replace("-", "");

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Timestamp timestamp;

    @Size(min = 1, max = 100)
    @NotNull
    @Getter @Setter
    private String title;

    @Size(min = 1, max = 15)
    @NotNull
    @Getter @Setter
    private String shortTitle;

    //@Size(max = 8)
    //@Getter @Setter
    //private String releaseDate;

    @Column(name = "image")
    @Size(max = 255)
    @Getter @Setter
    private String internalImageLink;

    //@Size(max = 1000)
    //@Getter @Setter
    //private String externalImageLink;

    @OneToMany(mappedBy = "game")
    @JsonIgnoreProperties("game")
    @Getter @Setter
    private List<Benchmark> benchmarks;

}