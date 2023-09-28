package com.KC.backend.service;


import com.KC.backend.dto.MessageDTO;
import com.KC.backend.entity.Message;
import com.KC.backend.mailserver.EmailSenderService;
import com.KC.backend.repo.MessageRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class MessageService {
    @Autowired
    private MessageRepo messageRepo;

    @Autowired
    private EmailSenderService senderService;

    @Autowired
    private ModelMapper modelMapper;
    public MessageDTO sendMessage(MessageDTO messageDTO){

        senderService.sendEmail(messageDTO.getFrom_email(), messageDTO.getTo_email(), messageDTO.getSubject(),messageDTO.getText());

        messageRepo.save(modelMapper.map(messageDTO, Message.class));
        return messageDTO;
    }

}
