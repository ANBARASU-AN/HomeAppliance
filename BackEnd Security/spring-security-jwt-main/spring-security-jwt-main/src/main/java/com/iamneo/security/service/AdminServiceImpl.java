package com.iamneo.security.service;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;



@Service
public class AdminServiceImpl implements AdminService {


    @Value("${admin.username}")
    private String adminUsername;

    @Value("${admin.password}")
    private String adminPassword;

    @Override
    public boolean isAdminAuthenticated(String username, String password) {
        return username.equals(adminUsername) && password.equals(adminPassword);
    }
    
    
    
}
