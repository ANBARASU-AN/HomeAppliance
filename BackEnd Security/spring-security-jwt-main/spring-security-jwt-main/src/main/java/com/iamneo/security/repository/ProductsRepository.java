package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Products;

//@Repository
public interface ProductsRepository extends JpaRepository<Products, Integer> {

}

