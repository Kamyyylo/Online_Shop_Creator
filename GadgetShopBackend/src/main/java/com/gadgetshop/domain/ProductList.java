package com.gadgetshop.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/*
 * id - id of the productList
 * PLSequence - unique sequence for products in product list
 * category - category assigned to list *can be only one*
 * products - list of products. Many to one relation. many products - one list
 * */
@Entity
public class ProductList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer PLSequence = 0;
    private String categoryIdentifier;

    //OneToOne with category it means that every single category can only have only one product list
    //here need to be json ignore to avoid infinite recursion
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    @JsonIgnore
    private Category category;
    //OneToMany with the products. products list can have one or many products but product can only have one product list
    //orphan removal is needed because when we delete category, product list should also be deleted and that causes delete the products.
    //Cascade type refresh is needed when we delete product and want to refresh the list
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "productList", orphanRemoval = true)
    private List<Product> products = new ArrayList<>();

    public ProductList() {
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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
