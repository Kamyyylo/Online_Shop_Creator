package com.gadgetshop.repositories;

import com.gadgetshop.domain.ShopMainData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopMainDataRepository extends CrudRepository<ShopMainData, Long> {
    ShopMainData findById(long id);
}
