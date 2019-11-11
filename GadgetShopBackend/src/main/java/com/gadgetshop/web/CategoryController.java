package com.gadgetshop.web;

import com.gadgetshop.domain.Category;
import com.gadgetshop.services.CategoryService;
import com.gadgetshop.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewCategory(@Valid @RequestBody Category category, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if (errorMap != null) {
            return errorMap;
        }
        //attribute category1 is possibly unnecessary because this is the same object
        Category category1 = categoryService.saveOrUpdateCategory(category);
        return new ResponseEntity<>(category1, HttpStatus.CREATED);
    }

    @GetMapping("/{categoryIdentifier}")
    public ResponseEntity<?> getCategoryByIdentifier(@PathVariable String categoryIdentifier) {
        Category category = categoryService.findCategoryByIdentifier(categoryIdentifier);
        return new ResponseEntity<Category>(category, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Category> getAllCategories() {
        return categoryService.findAllCategories();
    }

    @DeleteMapping("/{categoryIdentifier}")
    public ResponseEntity<?> deleteCategory(@PathVariable String categoryIdentifier) {
        categoryService.deleteCategoryByIdentifier(categoryIdentifier.toUpperCase());
        return new ResponseEntity<String>("Category with id '" + categoryIdentifier + "' successfully deleted", HttpStatus.OK);
    }
}
