package com.techwizzle.site.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
public class GraphicsCard {

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

    @Size(max = 8)
    @Getter @Setter
    private String releaseDate;

    @Min(0)
    @Getter @Setter
    private Integer averagePrice;

    @Size(max = 1000)
    @Getter @Setter
    private String amazonLink;

    @Size(max = 150)
    @Getter @Setter
    private String internalImageLink;

    @Size(max = 1000)
    @Getter @Setter
    private String externalImageLink;

    @Min(0)
    @Getter @Setter
    private Integer cudaCores;

    @Min(0)
    @Getter @Setter
    private Integer baseClock;

    @Min(0)
    @Getter @Setter
    private Integer boostClock;

    @Size(max = 30)
    @Getter @Setter
    private String standardMemoryConfig;

    @Min(0)
    @Getter @Setter
    private Integer memoryClockSpeed;

    @Min(0)
    @Getter @Setter
    private Integer memoryInterfaceWidth;

    @Min(0)
    @Getter @Setter
    private Integer memoryBandwidth;

    @OneToMany(mappedBy = "card")
    @JsonIgnoreProperties("card")
    @Getter @Setter
    private List<Benchmark> benchmarks;

}