package com.techwizzle.site.controllers;

import com.techwizzle.site.model.GraphicsCard;
import com.techwizzle.site.services.GraphicsCardService;
import com.techwizzle.site.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/graphicsCard")
@CrossOrigin //TODO - allow only authorized domains
public class GraphicsCardController {

    private final GraphicsCardService graphicsCardService;

    @Autowired
    public GraphicsCardController(GraphicsCardService cardService) {
        this.graphicsCardService = cardService;
    }

    @GetMapping("/list")
    public Iterable<GraphicsCard> listGraphicsCards(){
        return graphicsCardService.getAllGraphicsCards();
    }

    @PostMapping("/add")
    public ResponseEntity addGraphicsCard(@Valid @RequestBody GraphicsCard graphicsCard){
        if(this.graphicsCardService.addGraphicsCard(graphicsCard)){
            return new ResponseEntity<>(Constants.ADD_SUCCESS , HttpStatus.CREATED);
        }
        return new ResponseEntity<>(Constants.ADD_FAILURE, HttpStatus.BAD_REQUEST);
    }

}
