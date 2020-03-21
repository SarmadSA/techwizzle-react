package com.techwizzle.site.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Entity
public class GraphicsSetting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Integer id;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Timestamp timestamp;

    @Size(min = 1, max = 10)
    @NotNull
    @Getter @Setter
    private String title;

}