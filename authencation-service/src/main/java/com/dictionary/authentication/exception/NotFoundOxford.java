package com.dictionary.authentication.exception;

public class NotFoundOxford extends RuntimeException{
    public NotFoundOxford(String word)
    {
        super(word+" is not found!");
    }
}
