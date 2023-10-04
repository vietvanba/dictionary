package com.dictionary.authentication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(Exception.class)
    public ErrorResponse handlerSecurity(Exception e){

        return new ErrorResponse(HttpStatus.FORBIDDEN,e.getMessage());
    }
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NotFoundOxford.class)
    public ErrorResponse handlerNotFoundOxford(NotFoundOxford e){

        return new ErrorResponse(HttpStatus.NOT_FOUND,e.getMessage());
    }
}
