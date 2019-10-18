package com.gadgetshop.exceptions;

public class CategoryNotFoundExceptionResponse {
    private String CategoryNotFound;

    public CategoryNotFoundExceptionResponse(String categoryNotFound) {
        CategoryNotFound = categoryNotFound;
    }

    public String getCategoryNotFound() {
        return CategoryNotFound;
    }

    public void setCategoryNotFound(String categoryNotFound) {
        CategoryNotFound = categoryNotFound;
    }
}
