package com.abc.backend.todo.repository;

import com.abc.backend.todo.entity.Todos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TodoRepository extends CrudRepository<Todos, Long> {

    Optional<Todos> findByUsernameAndDescription(String username, String description);
    void deleteByUsernameAndDescription(String username, String description);
}
