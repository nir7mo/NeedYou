package com.needyou.web.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class OtpMailService {

    private static final Logger log = LoggerFactory.getLogger(OtpMailService.class);

    private final JavaMailSender mailSender;
    private final String from;

    public OtpMailService(JavaMailSender mailSender, @Value("${app.mail.from}") String from) {
        this.mailSender = mailSender;
        this.from = from;
    }

    public void sendOtp(String to, String code, int expirationMinutes) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(from);
            message.setTo(to);
            message.setSubject("NeedYou - Email Verification Code");
            message.setText("Your NeedYou OTP code is: " + code + "\n\nThis code expires in " + expirationMinutes + " minutes.");
            mailSender.send(message);
        } catch (Exception e) {
            log.warn("Could not send OTP mail to {}: {}", to, e.getMessage());
        }
    }
}
