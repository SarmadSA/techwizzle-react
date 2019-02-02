package com.techwizzle.site.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    private Long id;

    @ManyToOne
    @JsonIgnoreProperties("benchmarks")
    @JoinColumn(name="card_id")
    @NotNull
    @Getter @Setter
    private Card card;

    @ManyToOne
    @JsonIgnoreProperties("benchmarks")
    @JoinColumn(name="game_id")
    @NotNull
    @Getter @Setter
    private Game game;

    @Min(0) // fps no less than 0. Negative values not allowed
    @Getter @Setter
    private Integer minFps;

    @Min(0)
    @NotNull
    @Getter @Setter
    private Integer avgFps;

    @Min(0)
    @Getter @Setter
    private Integer maxFps;

    @Min(0)
    @NotNull
    @Getter @Setter
    private Integer resolution;

    @Size(max = 20) //No more than 20 chars.
    @NotNull
    @Getter @Setter
    private String settings;

}