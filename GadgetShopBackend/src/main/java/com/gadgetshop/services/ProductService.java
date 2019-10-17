package com.gadgetshop.services;

import com.gadgetshop.domain.Product;
import com.gadgetshop.repositories.ProductListRepository;
import com.gadgetshop.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Product addProduct() {
        //all products to be added to specific category, not null,product list has to exists
        //set the product list to product

        //TEST1-1  --> PLSequence to be like that
        //update Product list sequence
        return null;
    }

}
