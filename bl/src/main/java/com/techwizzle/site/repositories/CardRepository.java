package com.techwizzle.site.repositories;

import com.techwizzle.site.model.Card;
import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card, Long> {

}