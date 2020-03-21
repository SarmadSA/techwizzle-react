package com.techwizzle.site.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
//@IdClass(CompositeKey.class)
public class Benchmark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter//@Setter
    private Integer id;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Timestamp timestamp;

    //@Id
    @ManyToOne
    @JsonIgnoreProperties("benchmarks")
    @JoinColumn(name="graphics_card_id")
    @NotNull
    @Getter @Setter
    private GraphicsCard graphicsCard;

    @ManyToOne
    @JsonIgnoreProperties("benchmarks")
    @JoinColumn(name="game_id")
    @NotNull
    @Getter @Setter
    private Game game;

    @ManyToOne
    @JsonIgnoreProperties("benchmarks")
    @JoinColumn(name="resolution_id")
    @NotNull
    @Getter @Setter
    private Resolution resolution;

    @ManyToOne
    @JsonIgnoreProperties("benchmarks")
    @JoinColumn(name="graphics_setting_id")
    @NotNull
    @Getter @Setter
    private GraphicsSetting GraphicsSetting;

    //@Min(0) // fps no less than 0. Negative values not allowed
    //@Getter @Setter
    //private Integer minFps;

    @Column(name = "fps")
    @Min(0)
    @NotNull
    @Getter @Setter
    private Integer avgFps;

    //@Min(0)
    //@Getter @Setter
    //private Integer maxFps;

}