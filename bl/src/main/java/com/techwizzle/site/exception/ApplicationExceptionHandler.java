package com.techwizzle.site.exception;

import com.techwizzle.site.response.ErrorMessage;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
public class ApplicationExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleAnyException(Exception e, WebRequest request){
        e.printStackTrace();
        ErrorMessage errorMessage = new ErrorMessage()
                .setMessage("Something went wrong")
                .setPath(request.getContextPath())
                .addSingleError("Something went wrong while processing the request!");
        return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    //@ExceptionHandler(MethodArgumentNotValidException.class)
    //public ResponseEntity<Object> handleValidationException(MethodArgumentNotValidException e, WebRequest request){
    //    e.printStackTrace();
    //    ErrorMessage errorMessage = new ErrorMessage()
    //            .setMessage(e.getBindingResult().toString())
    //            .setPath(request.getContextPath())
    //            .addSingleError("Something went wrong while processing the request!");
    //    return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    //}

    //@ExceptionHandler(value = {GraphicsCardServiceException.class})
    //public ResponseEntity<Object> handelGraphicsCardServiceException(GraphicsCardServiceException e, WebRequest request){
    //    ErrorMessage errorMessage = new ErrorMessage()
    //            .setMessage(e.getMessage())
    //            .setPath(request.getContextPath());
    //            //.addError(e.getCause().getMessage());
    //    return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    //}

}
