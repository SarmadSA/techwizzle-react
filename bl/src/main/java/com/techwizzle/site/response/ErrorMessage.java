package com.techwizzle.site.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.*;

@NoArgsConstructor
@Accessors(chain  = true)
public class ErrorMessage {

    @Getter
    private Date timestamp = new Date();

    @Getter @Setter
    private String message;

    @Getter @Setter
    private String path;

    private ArrayList<Object> errors = new ArrayList<>();

    public  Iterable<Object> getErrors(){
        return Collections.unmodifiableList( errors );
    }

    public ErrorMessage addErrors(Iterable<Object> errors){
        for (Object o : errors) {
            this.errors.add(o);
        }
        return this;
    }

    public ErrorMessage addSingleError(Object error){
        this.errors.add(error);
        return this;
    }
}
