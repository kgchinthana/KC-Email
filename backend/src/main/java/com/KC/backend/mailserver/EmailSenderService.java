package com.KC.backend.mailserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String from_email,String to_email,String subject,String body){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from_email);
        message.setTo(to_email);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }

}
