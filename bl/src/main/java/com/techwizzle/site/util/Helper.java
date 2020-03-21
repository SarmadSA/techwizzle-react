package com.techwizzle.site.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class Helper {

    public static Pageable getPagable(int page, int size, String[] sortBy){
        //To sort by multiple fields check: https://stackoverflow.com/questions/54774350/multiple-sort-optional-query-spring-rest-controller-configuration-with-paginat
        String[] sortParams = sortBy[0].split(":", 2);
        String sortField = sortParams[0];
        String sortDirection = sortParams[1];

        Sort sort = Sort.by(sortField).ascending();
        if(sortDirection.equalsIgnoreCase("DESC")){
            sort = Sort.by(sortField).descending();
        }

        return PageRequest.of(page, size, sort);
    }

}
