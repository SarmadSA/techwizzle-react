package com.techwizzle.site.services;

import com.techwizzle.site.model.Game;
import com.techwizzle.site.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameServiceImp implements GameService {
    private final GameRepository gameRepository;

    @Autowired
    public GameServiceImp(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Override
    public Iterable<Game> getAllGames() {
        return gameRepository.findAll();
    }
}