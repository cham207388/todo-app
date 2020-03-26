package com.abc.backend.todo.service;

import com.abc.backend.todo.entity.Todos;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoHardCodedService {
    private static List<Todos> todos = new ArrayList<>();
    private static Long idCounter = 0L;

    static {
        todos.add(new Todos(++idCounter, "baicham", "Learn to dance", LocalDate.now(), false));
        todos.add(new Todos(++idCounter, "baicham", "Learn to code", LocalDate.now(), false));
        todos.add(new Todos(++idCounter, "baicham", "Studying Java", LocalDate.now(), false));
        todos.add(new Todos(++idCounter, "baicham", "Socialize", LocalDate.now(), false));
    }

    public Todos save(Todos todo) {
        // if _todo is not present, add it to todos
        if (todo.getId() == -1 || todo.getId() == 0) {
            todo.setId(++idCounter);
            // else update the _todo
        } else {
            deleteById(todo.getId());
        }
        todos.add(todo);
        return todo;
    }

    public List<Todos> findAll() {
        return getTodos();
    }

    public Todos deleteById(long id) {
        Todos todo = findById(id);
        if (todo == null) {
            return null;
        }
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todos findById(long id) {
        List<Todos> list = getTodos().stream()
                .filter(todo -> todo.getId() == id)
                .collect(Collectors.toList());
        if (list.size() == 1) {
            return list.get(0);
        }
        return null;
    }

    public static List<Todos> getTodos() {
        return todos;
    }
}

