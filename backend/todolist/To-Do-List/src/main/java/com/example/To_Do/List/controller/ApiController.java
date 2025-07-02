package com.example.To_Do.List.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.To_Do.List.model.Task;
import com.example.To_Do.List.repository.TaskRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Change to your frontend URL
@RestController
@RequestMapping("/api/tasks")
public class ApiController {
// Controller for managing tasks in a to-do list application
    @Autowired
    private TaskRepository taskRepository;

    // This controller provides endpoints to create, read, update, and delete tasks
    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Endpoint to create a new task
    // It accepts a Task object in the request body and saves it to the repository
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    // Endpoints to manage tasks by ID
    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable int id) {
        return taskRepository.findById(id).orElse(null);
    }
// Endpoint to update an existing task
    @PutMapping("/{id}")
    public Task updateTask(@PathVariable int id, @RequestBody Task taskDetails) {
        return taskRepository.findById(id).map(task -> {
            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            return taskRepository.save(task);
        }).orElse(null);
    }
// Endpoint to delete a task by ID
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id) {
        taskRepository.deleteById(id);
    }
// Additional endpoints for testing and API status
    @GetMapping("/hello")
    public String apiData() {
        return "API is running";
    }

    @GetMapping("/test")
    public String test() {
        return "Test endpoint is working";
    }
}
