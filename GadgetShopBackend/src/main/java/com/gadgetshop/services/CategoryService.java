package com.gadgetshop.services;

import com.gadgetshop.domain.Category;
import com.gadgetshop.exceptions.CategoryIdException;
import com.gadgetshop.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    //Method to save new categories and also updating them
    public Category saveOrUpdateCategory(Category category) {
        try {
            category.setCategoryIdentifier(category.getCategoryIdentifier().toUpperCase());
            //Business Logic first
            //CRUD actions last
            return categoryRepository.save(category);
        } catch (Exception e) {
            throw new CategoryIdException("Category ID '" + category.getCategoryIdentifier() + "' already exists");
        }
    }

    //Method to finding categories by identifier
    public Category findCategoryByIdentifier(String categoryIdentifier) {
        Category category = categoryRepository.findByCategoryIdentifier(categoryIdentifier.toUpperCase());
        if (category == null) {
            throw new CategoryIdException("Category ID does not exist");
        }
        return category;
    }

    //Method to find all categories
    public Iterable<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

    //delete category
    public void deleteCategoryByIdentifier(String categoryIdentifier) {
        Category category = categoryRepository.findByCategoryIdentifier(categoryIdentifier);
        if (category == null) {
            throw new CategoryIdException("Category with id '" + categoryIdentifier + "' does not exists");
        }
        categoryRepository.delete(category);
    }
}
