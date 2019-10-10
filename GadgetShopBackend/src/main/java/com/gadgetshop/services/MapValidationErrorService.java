package com.gadgetshop.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Service
public class MapValidationErrorService {

    //Check if there are errors and if so, return them to view
    public ResponseEntity<?> mapValidationService(BindingResult result){
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            //Passing error fields to response entity
            return new ResponseEntity<Map>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return null;
    }

}
