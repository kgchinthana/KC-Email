package com.KC.backend.repo;

import com.KC.backend.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message,String> {

}
