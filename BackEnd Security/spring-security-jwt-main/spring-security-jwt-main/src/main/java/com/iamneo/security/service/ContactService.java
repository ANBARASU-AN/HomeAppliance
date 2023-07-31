package com.iamneo.security.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Contact;
import com.iamneo.security.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;
    
    
    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> getDetails() {
        return contactRepository.findAll();
    }

    
}
