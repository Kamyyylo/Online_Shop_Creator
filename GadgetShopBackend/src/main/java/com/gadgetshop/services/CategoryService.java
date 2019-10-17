package com.gadgetshop.services;

import com.gadgetshop.domain.Category;
import com.gadgetshop.domain.ProductList;
import com.gadgetshop.exceptions.CategoryIdException;
import com.gadgetshop.repositories.CategoryRepository;
import com.gadgetshop.repositories.ProductListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductListRepository productListRepository;

    //Method to save new categories and also updating them
    public Category saveOrUpdateCategory(Category category) {
        String categoryIdentifier = category.getCategoryIdentifier().toUpperCase();
        try {
            category.setCategoryIdentifier(categoryIdentifier);
            /*
            Business Logic first
            CRUD actions last
            everytime new category is being created also it is joined to the list of products for category
            requirement is that it has to be new category. product list has to get category item and category identifier.
            category needs to get a new list of products
            */
            if (category.getId() == null) {
                ProductList productList = new ProductList();
                category.setProductList(productList);
                productList.setCategory(category);
                productList.setCategoryIdentifier(categoryIdentifier);
            }
            if (category.getId() != null) {
                category.setProductList(productListRepository.findByCategoryIdentifier(categoryIdentifier));
            }
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
