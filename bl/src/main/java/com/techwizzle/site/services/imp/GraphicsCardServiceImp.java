package com.techwizzle.site.services.imp;

import com.techwizzle.site.model.GraphicsCard;
import com.techwizzle.site.repositories.CardRepository;
import com.techwizzle.site.services.GraphicsCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GraphicsCardServiceImp implements GraphicsCardService {

    private final CardRepository cardRepository;

    @Autowired
    public GraphicsCardServiceImp(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public List<GraphicsCard> getAllGraphicsCards() {
        return cardRepository.findAll();
    }

    @Override
    public boolean addGraphicsCard(GraphicsCard card) {
        try {
            this.cardRepository.save(card);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean removeGraphicsCard(Integer id) {
        try {
            this.cardRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateGraphicsCard(GraphicsCard card) {
        try {
            //TODO: does it update?
            this.cardRepository.save(card);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
