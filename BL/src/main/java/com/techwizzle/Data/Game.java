package com.techwizzle.Data;

import lombok.*;

public class Game {
    @Setter
    @Getter
    int id;

    @Setter
    @Getter
    int cardId;

    @Setter
    @Getter
    String title;

    @Setter
    @Getter
    String resolution;

    @Setter
    @Getter
    String settings;

    @Setter
    @Getter
    int fps;

    @Setter
    @Getter
    String image;

    //TODO: correct names according to cards.json
    @Override
    public String toString() {
        return "{" +
                "id:" + id +
                ", cardId:" + cardId +
                ", title='" + title + '\'' +
                ", resolution:'" + resolution + '\'' +
                ", settings:'" + settings + '\'' +
                ", fps:" + fps +
                ", image:'" + image + '\'' +
                "}";
    }
}