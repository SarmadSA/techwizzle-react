package com.techwizzle.site.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Entity
public class Game {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter//@Setter
    private Long id;

    @Size(min = 1, max = 100)
    @NotNull
    @Getter @Setter
    private String title;

    @Size(min = 1, max = 20)
    @NotNull
    @Getter @Setter
    private String shortTitle;

    @Getter @Setter
    private Date releaseDate;

    @Size(max = 150)
    @Getter @Setter
    private String internalImageLink;

    @Size(max = 1000)
    @Getter @Setter
    private String externalImageLink;

    @OneToMany(mappedBy = "game")
    @JsonIgnoreProperties("game")
    @Getter @Setter
    private List<Benchmark> benchmarks;

}