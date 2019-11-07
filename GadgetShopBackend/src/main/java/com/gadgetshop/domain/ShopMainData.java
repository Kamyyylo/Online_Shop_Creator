package com.gadgetshop.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class ShopMainData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Shop name is required")
    private String shopName;
    @NotBlank(message = "Picture is required. Put image name with its ending f.e .jpg .png and up to 1200x550px")
    private String pictureOnTheDashboard;
    @NotBlank(message = "Contact email is required")
    private String contactEmail;

    public ShopMainData() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getPictureOnTheDashboard() {
        return pictureOnTheDashboard;
    }

    public void setPictureOnTheDashboard(String pictureOnTheDashboard) {
        this.pictureOnTheDashboard = pictureOnTheDashboard;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }
}
