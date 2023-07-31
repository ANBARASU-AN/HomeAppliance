package com.iamneo.security.controller;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.iamneo.security.service.AdminService;

@RestController
@CrossOrigin("http://localhost:3000/") 
@RequestMapping("/api/v1/auth")
public class AdminController {

    private final AdminService adminService;

    //@Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/api/adminlogin")
    public ResponseEntity<String> adminAccess(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        if (adminService.isAdminAuthenticated(username, password)) {
            StringBuilder responseMessage = new StringBuilder("Admin access granted.");
            return new ResponseEntity<>(responseMessage.toString(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        }
    }

    // Create a LoginRequest class to receive the login data from the frontend
    static class LoginRequest {
        private String username;
        private String password;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
    
    

}
