package com.gadgetshop.domain;

import javax.persistence.*;

@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String productPhotoInCart;
    private String productNameInCart;
    private Double productPriceInCart;

    public ShoppingCart() {
    }

    public String getProductPhotoInCart() {
        return productPhotoInCart;
    }

    public void setProductPhotoInCart(String productPhotoInCart) {
        this.productPhotoInCart = productPhotoInCart;
    }

    public String getProductNameInCart() {
        return productNameInCart;
    }

    public void setProductNameInCart(String productNameInCart) {
        this.productNameInCart = productNameInCart;
    }

    public Double getProductPriceInCart() {
        return productPriceInCart;
    }

    public void setProductPriceInCart(Double productPriceInCart) {
        this.productPriceInCart = productPriceInCart;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


}
