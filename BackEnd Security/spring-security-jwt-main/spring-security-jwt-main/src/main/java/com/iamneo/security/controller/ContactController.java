package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Contact;
import com.iamneo.security.service.ContactService;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/api/v1/auth")
public class ContactController {

    @Autowired
    ContactService contactService;

    @PostMapping("/addUpdate")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        Contact createdContact = contactService.createContact(contact);
        return new ResponseEntity<>(createdContact, HttpStatus.CREATED);
    }

    @GetMapping("/showUpdates")
    public ResponseEntity<List<Contact>> fetchDetails() {
        List<Contact> products = contactService.getDetails();
        return ResponseEntity.ok(products);
    }

}
