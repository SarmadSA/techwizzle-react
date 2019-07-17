package com.techwizzle.site.services;

import com.techwizzle.site.model.GraphicsCard;

import java.util.List;

public interface GraphicsCardService {

    List<GraphicsCard> getAllGraphicsCards();

    boolean addGraphicsCard(GraphicsCard graphicsCard);

    boolean removeGraphicsCard(Integer id);

    boolean updateGraphicsCard(GraphicsCard graphicsCard);
}
