package com.gadgetshop.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(updatable = false)
    private String productSequence;
    @NotBlank(message = "Product name is required")
    private String productName;
    @NotBlank(message = "Address to photo is required")
    private String productPhoto;
    @NotBlank(message = "Product price is required")
    private String productPrice;
    @NotBlank(message = "Product description is required")
    private String productDescription;
    private Date created_At;
    private Date updated_At;
    //Many to one with product list
    @Column(updatable = false)
    private String categoryIdentifier;

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductSequence() {
        return productSequence;
    }

    public void setProductSequence(String productSequence) {
        this.productSequence = productSequence;
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

    public String getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(String productPrice) {
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
                ", productSequence='" + productSequence + '\'' +
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
