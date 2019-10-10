package com.gadgetshop.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CategoryIdException extends RuntimeException {

     public CategoryIdException(String message) {
        super(message);
    }

}
