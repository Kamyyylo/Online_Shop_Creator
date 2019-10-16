package com.gadgetshop.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProductList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer PLSequence = 0;
    private String categoryIdentifier;

    //OneToOne with category it means that every single category can only have only one product list

    //OneToMany with the products. products list can have one or many products but product can only have one product list

    public ProductList() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPLSequence() {
        return PLSequence;
    }

    public void setPLSequence(Integer PLSequence) {
        this.PLSequence = PLSequence;
    }

    public String getCategoryIdentifier() {
        return categoryIdentifier;
    }

    public void setCategoryIdentifier(String categoryIdentifier) {
        this.categoryIdentifier = categoryIdentifier;
    }
}
