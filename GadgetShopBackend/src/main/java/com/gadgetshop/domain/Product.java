package com.gadgetshop.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

/*
 * id - id of the product
 * productName - name of product
 * productPhoto - address to photo in the folder
 * productPrice - price of the photo
 * productDescription - description of the product
 * created_at, updated_at - to keep changes clean and know the date of last change
 * categoryIdentifier = identifier of category that product belongs
 * productList - list of products
 * */
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(updatable = false, unique = true)
    private String categorySequence;
    @NotBlank(message = "Product name is required")
    @Size(max = 35, message = "Put max 35 characters")
    private String productName;
    @NotBlank(message = "Address to photo is required. Size 200x200px ")
    private String productPhoto;
    @NotNull(message = "Product price is required")
    private Double productPrice;
    @NotBlank(message = "Product description is required")
    @Column(length = 3000)
    private String productDescription;
    @NotBlank(message = "Short description is required")
    @Size(max = 190, message = "Put max 190 characters")
    private String productShortDescription;
    private Date created_At;
    private Date updated_At;
    //Many to one with product list
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "productList_id", updatable = false, nullable = false)
    @JsonIgnore
    private ProductList productList;
    @Column(updatable = false)
    private String categoryIdentifier;

    public Product() {
    }

    public ProductList getProductList() {
        return productList;
    }

    public String getProductShortDescription() {
        return productShortDescription;
    }

    public void setProductShortDescription(String productShortDescription) {
        this.productShortDescription = productShortDescription;
    }

    public void setProductList(ProductList productList) {
        this.productList = productList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategorySequence() {
        return categorySequence;
    }

    public void setCategorySequence(String categorySequence) {
        this.categorySequence = categorySequence;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductPhoto() {
        return productPhoto;
    }

    public void setProductPhoto(String productPhoto) {
        this.productPhoto = productPhoto;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Date getCreated_At() {
        return created_At;
    }

    public void setCreated_At(Date created_At) {
        this.created_At = created_At;
    }

    public Date getUpdated_At() {
        return updated_At;
    }

    public void setUpdated_At(Date updated_At) {
        this.updated_At = updated_At;
    }

    public String getCategoryIdentifier() {
        return categoryIdentifier;
    }

    public void setCategoryIdentifier(String categoryIdentifier) {
        this.categoryIdentifier = categoryIdentifier;
    }

    @PrePersist
    protected void onCreate() {
        this.created_At = new Date();
    }

    @PreUpdate
    void onUpdate() {
        this.updated_At = new Date();
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productSequence='" + categorySequence + '\'' +
                ", productName='" + productName + '\'' +
                ", productPhoto='" + productPhoto + '\'' +
                ", productPrice='" + productPrice + '\'' +
                ", productDescription='" + productDescription + '\'' +
                ", created_At=" + created_At +
                ", updated_At=" + updated_At +
                ", categoryIdentifier='" + categoryIdentifier + '\'' +
                '}';
    }
}
