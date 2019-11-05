package com.gadgetshop.web;

import com.gadgetshop.domain.Product;
import com.gadgetshop.services.MapValidationErrorService;
import com.gadgetshop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/productlist")
@CrossOrigin
public class ProductListController {

    @Autowired
    private ProductService productService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("/{productList_id}")
    public ResponseEntity<?> addProductToProductList(@Valid @RequestBody Product product, BindingResult result, @PathVariable String productList_id) {
        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if (errorMap != null) {
            return errorMap;
        }
        //I call the service to proceed the whole logic before add the product to list
        //product 1 is not needed here i think
        Product product1 = productService.addProduct(productList_id, product);
        return new ResponseEntity<Product>(product1, HttpStatus.CREATED);
    }

    @GetMapping("{productList_id}")
    public Iterable<Product> getProductList(@PathVariable String productList_id) {
        //we looking for product list marked as the id in GetMapping
        return productService.findProductListById(productList_id);
    }

    @GetMapping("/{productList_id}/{pl_id}")
    public ResponseEntity<?> getProduct(@PathVariable String productList_id, @PathVariable String pl_id) {
        Product product = productService.findProductByCategorySequence(productList_id, pl_id);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @PatchMapping("/{productList_id}/{pl_id}")
    public ResponseEntity<?> updateProduct(@Valid @RequestBody Product product, BindingResult result, @PathVariable String productList_id, @PathVariable String pl_id) {
        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if (errorMap != null) {
            return errorMap;
        }
        Product updatedProduct = productService.updateByCategorySequence(product, productList_id, pl_id);

        return new ResponseEntity<Product>(updatedProduct, HttpStatus.OK);
    }

    @DeleteMapping("/{productList_id}/{pl_id}")
    public ResponseEntity<?> deleteProduct(@PathVariable String productList_id, @PathVariable String pl_id) {
        productService.deleteProductByCategorySequence(productList_id, pl_id);
        return new ResponseEntity<String>("Product with id '" + pl_id + "' was deleted successfully", HttpStatus.OK);
    }


}
