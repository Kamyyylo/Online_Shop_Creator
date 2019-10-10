package com.gadgetshop.repositories;

import com.gadgetshop.domain.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
 * CRUD repository - repository to create, read, update, delete operations on objects
 */

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {

    //CRUD method to find object using his fields
    Category findByCategoryIdentifier(String categoryIdentifier);

    @Override
    Iterable<Category> findAll();

}
