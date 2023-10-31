package com.dictionary.authentication.exception;

public class CanNotSaveEntityException extends RuntimeException {
    public CanNotSaveEntityException(String err) {
        super(err);
    }
}
