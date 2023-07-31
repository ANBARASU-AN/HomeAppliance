package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Products;
import com.iamneo.security.service.ProductsService;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/api/v1/auth")
public class ProductsController {

    @Autowired
    ProductsService productsService;
    
    @PostMapping("/addProducts")
    public ResponseEntity<Products> createProduct(@RequestBody Products product) {
        Products createdProduct = productsService.createProduct(product);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    @GetMapping("/showProducts")
    public ResponseEntity<List<Products>> fetchDetails() {
        List<Products> products = productsService.getDetails();
        return ResponseEntity.ok(products);
    }

    
}
