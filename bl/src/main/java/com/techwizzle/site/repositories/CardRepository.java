package com.techwizzle.site.repositories;

import com.techwizzle.site.model.GraphicsCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<GraphicsCard, Integer> {

}