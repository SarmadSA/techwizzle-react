package com.techwizzle.site.repositories;

import com.techwizzle.site.model.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<Game, Integer> {

}