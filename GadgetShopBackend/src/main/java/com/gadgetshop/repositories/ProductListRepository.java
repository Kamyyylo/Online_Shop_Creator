package com.gadgetshop.repositories;

import com.gadgetshop.domain.ProductList;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductListRepository extends CrudRepository<ProductList, Long> {

    ProductList findByCategoryIdentifier(String Identifier);
}
