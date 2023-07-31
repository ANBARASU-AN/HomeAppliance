package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Products;
import com.iamneo.security.repository.ProductsRepository;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;


    public Products createProduct(Products product) {
        // You may want to add some validation or business logic before saving the product
        return productsRepository.save(product);
    }

    public List<Products> getDetails() {
        return productsRepository.findAll();
    }

    
}


/*
package com.example.springapp.Service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.springapp.Entity.Products;
import com.example.springapp.Entity.User;
import com.example.springapp.Repository.ProductsRepository;
import com.example.springapp.Repository.UserRepository;




@Service
public class ProductsService {
	
	
	@Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<Object> saveDetails(Products products) {
        // Check if the associated user already exists in the database
        User user = products.getUser();
        User existingUser = userRepository.findByEmail(user.getEmail());
    	System.out.println("User "+existingUser);
        if (existingUser == null) {
            // If the user does not exist, save the user first
           // existingUser = userRepository.save(user);
        	System.out.println("Email Id Not Found");
        	return new ResponseEntity<Object>("Invalid email", HttpStatus.OK);
        }else {
        	 // Associate the saved user with the products entity
            products.setUser(existingUser);
            System.out.println("Product Request Service is Sent");
            return new ResponseEntity<Object>(productsRepository.save(products),HttpStatus.OK);
        }
        
       
    }
	
	
	public List<Products> getDetails(){
		return productsRepository.findAll();
	}
	
	public List<Products> getSorted(String field) {
		return productsRepository.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	
	public List<Products> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<Products> page =productsRepository.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}


	
}

*/