package com.milanwittpohl.playgroundwebbackend.repository;

import com.milanwittpohl.playgroundwebbackend.data.ToDo;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ToDoRepository extends MongoRepository<ToDo, String> {}