package com.gadgetshop.repositories;

import com.gadgetshop.domain.ShoppingCart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, Long> {

    @Override
    Iterable<ShoppingCart> findAll();

    Iterable<ShoppingCart> findAllByCartItemOwner(String username);


    ShoppingCart findById(long id);
}
