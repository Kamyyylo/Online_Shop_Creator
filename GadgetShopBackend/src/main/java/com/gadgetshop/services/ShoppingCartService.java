package com.gadgetshop.services;

import com.gadgetshop.domain.Product;
import com.gadgetshop.domain.ShoppingCart;
import com.gadgetshop.repositories.ProductRepository;
import com.gadgetshop.repositories.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ShoppingCartService {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    private ProductRepository productRepository;

    public ShoppingCart saveShoppingCartProduct(ShoppingCart shoppingCart, String categorySequence) {
        Product product = productRepository.findByCategorySequence(categorySequence);
        shoppingCart.setProductNameInCart(product.getProductName());
        shoppingCart.setProductPhotoInCart(product.getProductPhoto());
        shoppingCart.setProductPriceInCart(product.getProductPrice());
        return shoppingCartRepository.save(shoppingCart);
    }

    public void deleteProductInCart(String shoppingCartId){
        ShoppingCart shoppingCart = shoppingCartRepository.findById(Long.parseLong(shoppingCartId));
        shoppingCartRepository.delete(shoppingCart);
    }

}
