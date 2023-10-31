package com.dictionary.authentication.exception;

public class UsernameExistException extends RuntimeException {
    public UsernameExistException(String err) {
        super(err);
    }
}
