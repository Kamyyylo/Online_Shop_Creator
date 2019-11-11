package com.gadgetshop.web;

import com.gadgetshop.domain.Product;
import com.gadgetshop.domain.ShoppingCart;
import com.gadgetshop.services.ProductService;
import com.gadgetshop.services.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/shoppingCart")
@CrossOrigin
public class ShoppingCartController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ShoppingCartService shoppingCartService;

    @PostMapping("/{categorySequence}")
    public ResponseEntity<?> addProductToShoppingCart(@Valid @RequestBody ShoppingCart shoppingCart, @PathVariable String categorySequence, Principal principal) {
        ShoppingCart shoppingCart1 = shoppingCartService.saveShoppingCartProduct(shoppingCart, categorySequence, principal.getName());
        return new ResponseEntity<>(shoppingCart1, HttpStatus.OK);
    }

    @GetMapping("")
    public Iterable<ShoppingCart> getProductsInCart(Principal principal) {
        return productService.findProductsInShoppingCart(principal.getName());
    }

//    @DeleteMapping("/{productList_id}/{pl_id}")
//    public ResponseEntity<?> deleteProduct(@PathVariable String productList_id, @PathVariable String pl_id) {
//        productService.deleteProductByCategorySequence(productList_id, pl_id);
//        return new ResponseEntity<String>("Product with id '" + pl_id + "' was deleted successfully", HttpStatus.OK);
//    }

    @DeleteMapping("/{shoppingCartId}")
    public ResponseEntity<?> deleteProductInCart(@PathVariable String shoppingCartId) {
        shoppingCartService.deleteProductInCart(shoppingCartId);
        return new ResponseEntity<String>("Product was successfully deleted from cart", HttpStatus.OK);
    }
}
