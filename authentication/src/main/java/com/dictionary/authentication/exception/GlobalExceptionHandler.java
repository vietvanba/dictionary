package com.dictionary.authentication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(UsernameOrPasswordNotCorrectException.class)
    public ErrorResponse handlerUsernameOrPasswordNotCorrectException(UsernameOrPasswordNotCorrectException e) {
        return new ErrorResponse(HttpStatus.FORBIDDEN, e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(CanNotSaveEntityException.class)
    public ErrorResponse handlerCanNotSaveEntityException(CanNotSaveEntityException e) {
        return new ErrorResponse(HttpStatus.BAD_REQUEST, e.getMessage());
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(UsernameExistException.class)
    public ErrorResponse handlerUsernameExistException(UsernameExistException e) {
        return new ErrorResponse(HttpStatus.BAD_REQUEST, e.getMessage());
    }
}
