package com.techwizzle.site.repositories;

import com.techwizzle.site.model.GraphicsCard;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface GraphicsCardRepository extends JpaRepository<GraphicsCard, Integer> {
    //@Query("SELECT *")
    //List<GraphicsCard> findAllWithTitle(String title, Pageable pageable);

    List<GraphicsCard> findAllByMemorySize(Integer memorySize, Pageable pageable);

    GraphicsCard getByResourceId(String uuid);

    @Query("SELECT gpu FROM GraphicsCard gpu WHERE gpu.title LIKE %?1%")
    List<GraphicsCard> searchByTitle(String title, Pageable pageable);

}