package com.techwizzle.site.services.imp;

import com.techwizzle.site.exception.GraphicsCardServiceException;
import com.techwizzle.site.model.GraphicsCard;
import com.techwizzle.site.repositories.GraphicsCardRepository;
import com.techwizzle.site.services.GraphicsCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GraphicsCardServiceImp implements GraphicsCardService {

    private final GraphicsCardRepository graphicsCardRepository;

    @Autowired
    public GraphicsCardServiceImp(GraphicsCardRepository cardRepository) {
        this.graphicsCardRepository = cardRepository;
    }


    public List<GraphicsCard> getAllGraphicsCards(Pageable pageable) {
        return graphicsCardRepository.findAll(pageable).getContent();
    }

    @Override
    public boolean addGraphicsCard(GraphicsCard card) {
        //try {
            this.graphicsCardRepository.save(card);
            return true;
        //} catch (Exception e) {
        //    e.printStackTrace();
        //    return false;
        //}
    }

    @Override
    public boolean removeGraphicsCard(Integer id) throws Exception{
        if(this.graphicsCardRepository.existsById(id)){
            this.graphicsCardRepository.deleteById(id);
            return true;
        } else {
            throw new Exception();
            //return false;
        }
    }

    @Override
    public boolean updateGraphicsCard(GraphicsCard card) {
        try {
            //TODO: does it update?
            this.graphicsCardRepository.save(card);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public GraphicsCard findByID(String uuid) throws GraphicsCardServiceException{
        GraphicsCard foundGraphicsCard = graphicsCardRepository.getByUuid(uuid);
        if(null == foundGraphicsCard){
            throw new GraphicsCardServiceException("Failed to retrieve data")
                    .addSingleError("Could not find a graphics card with id: " + uuid);
        }
        return foundGraphicsCard;
    }

    @Override
    public List<GraphicsCard> searchByTitle(String title, Pageable pageable){
        return graphicsCardRepository.searchByTitle(title, pageable);
    }
}
