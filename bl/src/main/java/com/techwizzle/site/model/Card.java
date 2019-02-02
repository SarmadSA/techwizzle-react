package com.techwizzle.site.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Card {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter//@Setter
    private Integer id;

    @Size(min = 1, max = 100)
    @NotNull
    @Getter @Setter
    private String title;

    @Size(min = 1, max = 25)
    @NotNull
    @Getter @Setter
    private String shortTitle;

    @Column(nullable = true)
    @Getter @Setter
    private Date releaseDate;

    @Column(nullable = true)
    @Min(0)
    @Getter @Setter
    private int averagePrice;

    @Column(nullable = true)
    @Size(max = 1000)
    @Getter @Setter
    private String amazonLink;

    @Column(nullable = true)
    @Size(max = 150)
    @Getter @Setter
    private String internalImageLink;

    @Column(nullable = true)
    @Size(max = 1000)
    @Getter @Setter
    private String externalImageLink;

    @Column(nullable = true)
    @Min(0)
    @Getter @Setter
    private int cudaCores;

    @Column(nullable = true)
    @Min(0)
    @Getter @Setter
    private int baseClock;

    @Column(nullable = true)
    @Min(0)
    @Getter @Setter
    private int boostClock;

    @Column(nullable = true)
    @Size(max = 30)
    @Getter @Setter
    private String standardMemoryConfig;

    @Column(nullable = true)
    @Min(0)
    @Getter @Setter
    private int memoryClockSpeed;

    @Column(nullable = true)
    @Min(0)
    @Getter @Setter
    private int memoryInterfaceWidth;

    @Column(nullable = true)
    @Min(0)
    @Getter @Setter
    private int memoryBandwidth;

}