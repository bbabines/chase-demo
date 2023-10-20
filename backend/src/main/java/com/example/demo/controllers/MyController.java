package com.example.demo.controllers;

import com.example.demo.models.Message;
import com.example.demo.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MyController {

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/")
    public String home() {
        return "Welcome to my Spring Boot application!";
    }

 

@GetMapping("/messages")
public List<Message> getMessages() {
    List<Message> messages = messageRepository.findAll();
    messages.forEach(System.out::println);
    return messages;
}


}
