package com.example.springapp.Service;

import com.example.springapp.Entity.GmailDetails;

public interface GmailService {
    // Method to send a simple email
    String sendSimpleMail(GmailDetails details);

    // Method to send an email with attachment
    String sendMailWithAttachment(GmailDetails details);
}
