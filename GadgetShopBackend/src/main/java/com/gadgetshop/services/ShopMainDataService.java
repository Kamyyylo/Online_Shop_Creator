package com.gadgetshop.services;

import com.gadgetshop.domain.ShopMainData;
import com.gadgetshop.repositories.ShopMainDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShopMainDataService {

    @Autowired
    private ShopMainDataRepository shopMainDataRepository;

    public ShopMainData createOrSaveShopMainData(ShopMainData shopMainData) {
        return shopMainDataRepository.save(shopMainData);
    }

    public ShopMainData findShopMainData() {
        ShopMainData shopMainData = shopMainDataRepository.findById(1);
        return shopMainData;
    }
}
