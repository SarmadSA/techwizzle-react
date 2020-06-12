package com.techwizzle.site.services;

import com.techwizzle.site.exception.GraphicsCardServiceException;
import com.techwizzle.site.model.GraphicsCard;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface GraphicsCardService {

    List<GraphicsCard> getGraphicsCards(Pageable pageable);

    void addGraphicsCard(GraphicsCard graphicsCard);

    boolean removeGraphicsCard(Integer id) throws Exception;

    boolean updateGraphicsCard(GraphicsCard graphicsCard);

    GraphicsCard findByID(String id) throws GraphicsCardServiceException;

    List<GraphicsCard> searchByTitle(String title, Pageable pageable);
}
