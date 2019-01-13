package com.techwizzle.Data;

import java.util.ArrayList;
import java.util.Iterator;

public class Register {

    private ArrayList<Card> cards;

    public Register() {
        cards = new ArrayList<>();
    }

    public void addCard(Card card){
        cards.add(card);
    }

    public void addGames(){
        for(Card c: cards){
            c.addGame(new Game());
        }
    }

    public Iterator getCardsIterator(){
        Iterator it = cards.iterator();
        return it;
    }
}