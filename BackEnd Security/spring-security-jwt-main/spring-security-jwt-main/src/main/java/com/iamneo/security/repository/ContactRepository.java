package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Contact;
//import org.springframework.stereotype.Repository;


//@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}

