package com.abc.backend.todo.controller;

import com.abc.backend.todo.entity.Todos;
import com.abc.backend.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequiredArgsConstructor
public class TodoController {

    private final TodoService service;


    @GetMapping(path = "/users/{username}/todos")
    public List<Todos> findAll(@PathVariable String username) {
        return service.findAll();
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable String username, @PathVariable long id) {
        service.deleteById(id);
    }

    @GetMapping(path = "/users/{username}/todos/{id}")
    public Todos findById(@PathVariable String username, @PathVariable long id) {
        return service.findById(id);
    }

    @PostMapping(path = "/users/{username}/todos")
    public ResponseEntity<Void> save(@RequestBody Todos todo, @PathVariable String username) {
        Todos createdTodo = service.save(todo);
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Todos> updateTodo(@RequestBody Todos todo, @PathVariable String username, @PathVariable long id) {
        return new ResponseEntity<>(service.save(todo), HttpStatus.ACCEPTED);
    }
}
