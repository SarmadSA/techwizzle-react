package com.techwizzle.site.exception;

import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Collections;

@NoArgsConstructor
public class GraphicsCardServiceException extends Exception {

    private ArrayList<Object> errors = new ArrayList<>();

    /**
     * Constructs an instance of <code>DataNotFoundException</code> with a specified message.
     *
     * @param message the detail message.
     */
    public GraphicsCardServiceException(String message) {
        super(message);
    }

    public GraphicsCardServiceException addSingleError(Object error){
        this.errors.add(error);
        return this;
    }

    public GraphicsCardServiceException addErrors(Iterable<Object> errors){
        for (Object o : errors) {
            this.errors.add(o);
        }
        return this;
    }

    public Iterable<Object> getErrors(){
        return  Collections.unmodifiableList( errors );
    }
}
