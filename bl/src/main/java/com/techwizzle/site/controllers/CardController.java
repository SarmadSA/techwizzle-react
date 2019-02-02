package com.techwizzle.site.controllers;

import com.techwizzle.site.model.Card;
import com.techwizzle.site.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/card")
@CrossOrigin //TODO - allow only authorized domains
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping("/list")
    public Iterable<Card> getCards(){
        return cardService.getAllCards();
    }

}
