package com.abc.backend.todo.service.impl;

import com.abc.backend.todo.entity.Todos;
import com.abc.backend.todo.repository.TodoRepository;
import com.abc.backend.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {
    private final TodoRepository repository;

    @Override
    public Todos save(Todos todo) {
        return repository.save(todo);
    }

    @Override
    public Todos findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Todos findByUsernameAndDescription(String username, String description) {
        return repository.findByUsernameAndDescription(username, description).orElse(null);
    }

    @Override
    public List<Todos> findAll() {
        List<Todos> todos = new ArrayList<>();
        repository.findAll().forEach(todos::add);
        return todos;
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteByUsernameAndDescription(String username, String description) {
        repository.deleteByUsernameAndDescription(username, description);
    }
}
