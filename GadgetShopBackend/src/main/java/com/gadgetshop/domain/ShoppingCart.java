package com.gadgetshop.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String productPhotoInCart;
    private String productNameInCart;
    private Double productPriceInCart;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore //to prevent infinite recusrsion
    private User user;

    private String cartItemOwner;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getCartItemOwner() {
        return cartItemOwner;
    }

    public void setCartItemOwner(String cartItemOwner) {
        this.cartItemOwner = cartItemOwner;
    }
}
