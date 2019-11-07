package com.gadgetshop.web;

import com.gadgetshop.domain.ShopMainData;
import com.gadgetshop.services.MapValidationErrorService;
import com.gadgetshop.services.ShopMainDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/shopMainData")
@CrossOrigin
public class ShopMainDataController {

    @Autowired
    private ShopMainDataService shopMainDataService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> addShopMainData(@Valid @RequestBody ShopMainData shopMainData, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if (errorMap != null) {
            return errorMap;
        }
        ShopMainData shopMainData1 = shopMainDataService.createOrSaveShopMainData(shopMainData);
        return new ResponseEntity<>(shopMainData1, HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<?> getShopMainData() {
        ShopMainData shopMainData = shopMainDataService.findShopMainData();
        return new ResponseEntity<ShopMainData>(shopMainData, HttpStatus.OK);
    }
}



