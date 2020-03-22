package com.techwizzle.site.controllers;

import com.techwizzle.site.exception.GraphicsCardServiceException;
import com.techwizzle.site.model.GraphicsCard;
import com.techwizzle.site.response.ErrorMessage;
import com.techwizzle.site.response.SuccessMessage;
import com.techwizzle.site.services.GraphicsCardService;
import com.techwizzle.site.util.Constants;
import com.techwizzle.site.util.Helper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/graphics-card")
@CrossOrigin //TODO - allow only authorized domains
public class GraphicsCardController {

    private final GraphicsCardService graphicsCardService;

    @Autowired
    public GraphicsCardController(GraphicsCardService cardService) {
        this.graphicsCardService = cardService;
    }

    /***
     *
     * @param page
     * @param size -
     * @param sortBy - field to sort results by
     * @return
     */
    @GetMapping("/list") //TODO default sort should be by latest release
    public ResponseEntity listGraphicsCards(@RequestParam(value = "page", defaultValue = "0", required = false) int page,
                                            @RequestParam(value = "size", defaultValue = "6", required = false) int size,
                                            @RequestParam(value = "sort", defaultValue = "timestamp:ASC", required = false) String[] sortBy){

        List<GraphicsCard> graphicsCardList = graphicsCardService.getGraphicsCards(Helper.getPagable(page, size, sortBy));
        return new ResponseEntity<>(graphicsCardList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity getGraphicsCardById(@PathVariable("id") String id){
        try{
            return new ResponseEntity<>(graphicsCardService.findByID(id), HttpStatus.OK);
        } catch (GraphicsCardServiceException e){
            ErrorMessage errorMessage = new ErrorMessage()
                    .setMessage(e.getMessage())
                    .setPath("/graphics-card/" + id)
                    .addErrors(e.getErrors());
            return new ResponseEntity<>(errorMessage, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/search")
    public ResponseEntity searchGraphicsCardsByTitle(@RequestParam String title,
                                                     @RequestParam(value = "page", defaultValue = "0", required = false) int page,
                                                     @RequestParam(value = "size", defaultValue = "6", required = false) int size,
                                                     @RequestParam(value = "sort", defaultValue = "timestamp:ASC", required = false) String[] sortBy){
        List<GraphicsCard> graphicsCardSearchResult = graphicsCardService.searchByTitle(title, Helper.getPagable(page, size, sortBy));
        return new ResponseEntity<> (graphicsCardSearchResult, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity addGraphicsCard(@Valid @RequestBody GraphicsCard graphicsCard){
        this.graphicsCardService.addGraphicsCard(graphicsCard);
        SuccessMessage successMessage = new SuccessMessage()
                .setMessage("Successfully added")
                .setPath("/graphics-card/add")
                .addSingleDataObject(graphicsCard);
        return new ResponseEntity<>(successMessage, HttpStatus.CREATED);

        //return new ResponseEntity<>(Constants.ADD_FAILURE, HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/remove")
    public ResponseEntity removeGraphicsCard(@RequestParam String id){
        //if(this.graphicsCardService.removeGraphicsCard(Integer.parseInt(id))){
        //    return new ResponseEntity<>(Constants.DELETE_SUCCESS, HttpStatus.OK);
        //}
        return new ResponseEntity<>(Constants.DELETE_FAILURE, HttpStatus.BAD_REQUEST);
    }

}
