package com.dictionary.authentication.exception;

public class UsernameOrPasswordNotCorrectException extends RuntimeException {
    public UsernameOrPasswordNotCorrectException(String err) {
        super(err);
    }
}
