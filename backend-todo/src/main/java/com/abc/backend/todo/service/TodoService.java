package com.abc.backend.todo.service;

import com.abc.backend.todo.entity.Todos;

import java.util.List;

public interface TodoService {
    Todos save(Todos todo);

    Todos findById(Long id);

    Todos findByUsernameAndDescription(String username, String description);

    List<Todos> findAll();

    void deleteByUsernameAndDescription(String username, String description);

    void deleteById(Long id);

}
