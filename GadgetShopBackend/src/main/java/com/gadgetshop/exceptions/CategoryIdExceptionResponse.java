package com.gadgetshop.exceptions;

public class CategoryIdExceptionResponse {

    private String categoryIdentifier;

    public CategoryIdExceptionResponse(String categoryIdentifier){
        this.categoryIdentifier=categoryIdentifier;
    }

    public String getCategoryIdentifier() {
        return categoryIdentifier;
    }

    public void setCategoryIdentifier(String categoryIdentifier) {
        this.categoryIdentifier = categoryIdentifier;
    }
}
