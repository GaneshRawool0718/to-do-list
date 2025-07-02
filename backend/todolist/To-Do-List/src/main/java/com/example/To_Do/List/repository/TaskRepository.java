package com.example.To_Do.List.repository;

import com.example.To_Do.List.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
    // This interface extends JpaRepository to provide CRUD operations for Task entities
    // The Task entity is identified by an Integer ID
    // No additional methods are defined here, as JpaRepository provides standard methods like save, findAll, findById, deleteById
}
