package com.techwizzle.site.controllers;

import com.techwizzle.site.model.GraphicsCard;
import com.techwizzle.site.services.GraphicsCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/graphicsCard")
@CrossOrigin //TODO - allow only authorized domains
public class GraphicsCardController {

    private final GraphicsCardService cardService;

    @Autowired
    public GraphicsCardController(GraphicsCardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping("/list")
    public Iterable<GraphicsCard> listCards(){
        return cardService.getAllGraphicsCards();
    }

}
