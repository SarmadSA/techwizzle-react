package com.techwizzle.Data;

import lombok.*;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Date;

public class Card {

    @Setter
    @Getter
    private int id;

    @Setter
    @Getter
    private String title;

    @Setter
    @Getter
    private String shortTitle;

    @Setter
    @Getter
    private Date ReleaseDate;

    @Setter
    @Getter
    private int price;

    @Setter
    @Getter
    private String amazonLink;

    @Setter
    @Getter
    private String image;

    @Setter
    @Getter
    private String externalImage;


    private ArrayList<Game> games;

    //Technical information section.

    @Setter
    @Getter
    private int cudaCores;

    @Setter
    @Getter
    private int baseClock;              //change to int in database

    @Setter
    @Getter
    private int boostClock;             //change to int in database

    @Setter
    @Getter
    private int standardMemory;         //change to int in database

    @Setter
    @Getter
    int memoryInterfaceWidth;           //change to int in database

    @Setter
    @Getter
    int memoryBandwidth;                //change to int in database


    public void addGame(Game game){
        this.games.add(game);
    }

    //TODO: find the most efficient way
    private String getGames(){
        JSONArray gamesArray = new JSONArray();
        for(Game g: this.games){
            gamesArray.put(new JSONObject(g.toString()));
        }
        return gamesArray.toString();
    }

    //TODO: correct names according to cards.json
    @Override
    public String toString() {
        return "{" +
                "id:" + id +
                ", title:'" + title + '\'' +
                ", shortTitle:'" + shortTitle + '\'' +
                ", ReleaseDate:" + ReleaseDate +
                ", price:" + price +
                ", amazonLink:'" + amazonLink + '\'' +
                ", image:'" + image + '\'' +
                ", externalImage:'" + externalImage + '\'' +
                ", games:" + getGames() +
                ", CudaCores:" + cudaCores +
                ", baseClock:" + baseClock +
                ", boostClock:" + boostClock +
                ", standardMemory:" + standardMemory +
                ", memoryInterfaceWidth:" + memoryInterfaceWidth +
                ", memoryBandwidth:" + memoryBandwidth +
                "}";
    }
}
