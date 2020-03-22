package com.techwizzle.site.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;

@NoArgsConstructor
@Accessors(chain  = true)
public class SuccessMessage {

    @Getter
    private Date timestamp = new Date();

    @Getter @Setter
    private String message;

    @Getter @Setter
    private String path;

    private ArrayList<Object> data = new ArrayList<>();

    public  Iterable<Object> getData(){
        return Collections.unmodifiableList( data );
    }

    public SuccessMessage addData(Iterable<Object> data){
        for (Object o : data) {
            this.data.add(o);
        }
        return this;
    }

    public SuccessMessage addSingleDataObject(Object dataObject){
        this.data.add(dataObject);
        return this;
    }
}
