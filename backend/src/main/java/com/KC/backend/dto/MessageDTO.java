package com.KC.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MessageDTO {
    private String from_email;
    private String to_email;
    private String subject;
    private String text;


    public String getFrom_email() {
        return from_email;
    }

    public String getTo_email() {
        return to_email;
    }

    public String getSubject() {
        return subject;
    }

    public String getText() {
        return text;
    }
}
