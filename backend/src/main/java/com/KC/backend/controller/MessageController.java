package com.KC.backend.controller;

import com.KC.backend.dto.MessageDTO;
import com.KC.backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api")
@CrossOrigin
public class MessageController {
    @Autowired
    private MessageService messageService;

    @PostMapping("/sendmessage")
    public MessageDTO sendMessage(@RequestBody MessageDTO messageDTO){
        return messageService.sendMessage(messageDTO);
    }
}
