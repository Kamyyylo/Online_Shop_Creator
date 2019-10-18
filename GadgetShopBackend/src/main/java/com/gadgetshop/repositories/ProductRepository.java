package com.gadgetshop.repositories;

import com.gadgetshop.domain.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    //looking for the all products in this category passed in parameter
    List<Product> findByCategoryIdentifier(String id);

    //find product using his sequence TEST1-1 fe
    Product findByCategorySequence(String sequence);
}
