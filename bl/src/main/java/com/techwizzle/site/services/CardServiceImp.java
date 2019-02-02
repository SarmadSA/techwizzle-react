package com.techwizzle.site.services;

import com.techwizzle.site.model.Card;
import com.techwizzle.site.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardServiceImp implements CardService{

    private final CardRepository cardRepository;

    @Autowired
    public CardServiceImp(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public Iterable<Card> getAllCards(){
        return cardRepository.findAll();
    }
}
