package com.abc.backend.todo.bootstrap;

import com.abc.backend.todo.entity.Todos;
import com.abc.backend.todo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {
    private final TodoRepository repository;

    @Override
    public void run(String... args) throws Exception {
        loadTodos();
    }

    private void loadTodos() {
        Todos gratitude = new Todos();
        gratitude.setUsername("baicham");
        gratitude.setDescription("write daily gratitude journal");
        gratitude.setTargetDate(LocalDate.now().plusDays(1));
        gratitude.setDone(false);

        repository.save(gratitude);

    }
}
