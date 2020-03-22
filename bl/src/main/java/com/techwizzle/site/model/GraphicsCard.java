package com.techwizzle.site.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

@Entity
public class GraphicsCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "uuid")
    @Getter
    private String resourceId = UUID.randomUUID().toString().replace("-", "");

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Timestamp timestamp;

    @Size(min = 1, max = 100)
    @NotNull
    @Getter @Setter
    private String title;

    @Size(min = 1, max = 32)
    @NotNull
    @Getter @Setter
    private String shortTitle;

    @Size(max = 8)
    @Getter @Setter
    private String releaseDate;

    @Size(max = 1000)
    @Getter @Setter
    private String amazonLink;

    @Column(name = "internal_image")
    @Size(max = 150)
    @Getter @Setter
    private String internalImageLink;

    @Column(name = "external_image")
    @Size(max = 1000)
    @Getter @Setter
    private String externalImageLink;

    @Min(0)
    @Getter @Setter
    private Integer cudaCores;

    @Column(name = "base_clock_mhz")
    @Min(0)
    @Getter @Setter
    private Integer baseClock;

    @Column(name = "boost_clock_mhz")
    @Min(0)
    @Getter @Setter
    private Integer boostClock;

    @Column(name = "memory_clock_mhz")
    @Min(0)
    @Getter @Setter
    private Integer memoryClock;

    @Column(name = "memory_size_gb")
    @Min(0)
    @Getter @Setter
    private Integer memorySize;

    @Size(max = 30)
    @Getter @Setter
    private String standardMemoryConfig;

    @Column(name = "memory_bandwidth_gb_s")
    @Min(0)
    @Getter @Setter
    private Integer memoryBandwidth;

    @Column(name = "memory_interface_width_bit")
    @Min(0)
    @Getter @Setter
    private Integer memoryInterfaceWidth;

    @OneToMany(mappedBy = "graphicsCard")
    @JsonIgnoreProperties("graphicsCard")
    @Getter @Setter
    private List<Benchmark> benchmarks;

}