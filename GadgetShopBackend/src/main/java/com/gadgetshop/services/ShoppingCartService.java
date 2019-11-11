package com.gadgetshop.services;

import com.gadgetshop.domain.Product;
import com.gadgetshop.domain.ShoppingCart;
import com.gadgetshop.domain.User;
import com.gadgetshop.repositories.ProductRepository;
import com.gadgetshop.repositories.ShoppingCartRepository;
import com.gadgetshop.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ShoppingCartService {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public ShoppingCart saveShoppingCartProduct(ShoppingCart shoppingCart, String categorySequence, String username) {
        //adding owner of the item in cart
        User user = userRepository.findByUsername(username);
        shoppingCart.setUser(user);
        shoppingCart.setCartItemOwner(username);
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
