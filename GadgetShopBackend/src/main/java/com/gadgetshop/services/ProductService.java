package com.gadgetshop.services;

import com.gadgetshop.domain.Category;
import com.gadgetshop.domain.Product;
import com.gadgetshop.domain.ProductList;
import com.gadgetshop.domain.ShoppingCart;
import com.gadgetshop.exceptions.CategoryNotFoundException;
import com.gadgetshop.repositories.CategoryRepository;
import com.gadgetshop.repositories.ProductListRepository;
import com.gadgetshop.repositories.ProductRepository;
import com.gadgetshop.repositories.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


/*
 * ProductListRepository - crud operations on product list
 * ProductRepository - crud operations on products
 * */

@Service
public class ProductService {

    @Autowired
    private ProductListRepository productListRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    public Product addProduct(String categoryIdentifier, Product product) {
        //Exception category not found
        try {
            //all products to be added to specific category, not null,product list has to exists
            //generally when we add product we need to find a list for the category that this product belongs to
            ProductList productList = productListRepository.findByCategoryIdentifier(categoryIdentifier);
            //set the product list to product
            product.setProductList(productList);
            Integer productListSequence = productList.getPLSequence();
            //every time new product is created his sequence grow f.e TEST1-1 TEST1-2 TEST1-3 etc
            productListSequence++;
            productList.setPLSequence(productListSequence);
            //add sequence to product
            product.setCategorySequence(categoryIdentifier + "-" + productListSequence);
            //this id will be passed to url to make proper url, if the id exists add product (validation)
            product.setCategoryIdentifier(categoryIdentifier);
            //update Product list sequence
            return productRepository.save(product);
        } catch (Exception e) {
            throw new CategoryNotFoundException("Category not found");
        }

    }

    //looking for the whole list of products
    public Iterable<Product> findProductListById(String id) {
        Category category = categoryRepository.findByCategoryIdentifier(id);
        if (category == null) {
            throw new CategoryNotFoundException("Category with ID '" + id + "' does not exist");
        }
        return productRepository.findByCategoryIdentifier(id);
    }

    public Product findProductByCategorySequence(String productList_id, String pl_id) {
        //validation that the product list exist
        ProductList productList = productListRepository.findByCategoryIdentifier(productList_id);
        if (productList == null) {
            throw new CategoryNotFoundException("Category with ID '" + productList_id + "' does not exist");
        }
        //validation that the product exist. used the same exception because this is the same type of exception
        Product product = productRepository.findByCategorySequence(pl_id);
        if (product == null) {
            throw new CategoryNotFoundException("Product with id '" + pl_id + "' does not exist");
        }
        //validade that the product corresponds to the right category
        if (!product.getCategoryIdentifier().equals(productList_id)) {
            throw new CategoryNotFoundException("Product '" + pl_id + "' does not exist in '" + productList_id + "'");
        }
        return product;
    }

    public Product updateByCategorySequence(Product updatedProduct, String productList_id, String pl_id) {
        Product product = findProductByCategorySequence(productList_id, pl_id);
        product = updatedProduct;
        return productRepository.save(product);
    }

    public void deleteProductByCategorySequence(String productList_id, String pl_id) {
        Product product = findProductByCategorySequence(productList_id, pl_id);
        productRepository.delete(product);
    }

    public Iterable<ShoppingCart> findProductsInShoppingCart(String username) {
        Iterable<ShoppingCart> shoppingCartList = shoppingCartRepository.findAllByCartItemOwner(username);
      return shoppingCartList;
    }
}
