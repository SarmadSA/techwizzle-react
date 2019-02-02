package com.techwizzle.site.controllers;

import com.techwizzle.site.model.Game;
import com.techwizzle.site.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin //TODO - Allow only authorized domains
@RequestMapping("/game")
public class GameController {
    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/list")
    public Iterable<Game> listGames(){
        return gameService.getAllGames();
    }
}
