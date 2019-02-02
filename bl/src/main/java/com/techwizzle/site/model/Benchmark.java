package com.techwizzle.site.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Benchmark {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter//@Setter
    private Integer id;

    @ManyToOne
    @JoinColumn(name="card_id")
    @NotNull
    @Getter @Setter
    private Card card;

    @ManyToOne
    @JoinColumn(name="game_id")
    @NotNull
    @Getter @Setter
    private Game game;

    @Column(nullable = true)
    @Min(0) // fps no less than 0. Negative values not allowed
    @Getter @Setter
    private int minFps;

    @Min(0)
    @NotNull
    @Getter @Setter
    private int avgFps;

    @Column(nullable = true)
    @Min(0)
    @Getter @Setter
    private int maxFps;

    @Min(0)
    @NotNull
    @Getter @Setter
    private int resolution;

    @Size(max = 20) //No more than 20 chars.
    @NotNull
    @Getter @Setter
    private String settings;

}