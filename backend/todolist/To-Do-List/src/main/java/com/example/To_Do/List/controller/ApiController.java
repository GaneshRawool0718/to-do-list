package com.example.To_Do.List.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.To_Do.List.model.Task;
import com.example.To_Do.List.repository.TaskRepository;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class ApiController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable int id) {
        return taskRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable int id, @RequestBody Task taskDetails) {
        return taskRepository.findById(id).map(task -> {
            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            return taskRepository.save(task);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id) {
        taskRepository.deleteById(id);
    }

    @GetMapping("/hello")
    public String apiData() {
        return "API is running";
    }

    @GetMapping("/test")
    public String test() {
        return "Test endpoint is working";
    }
}
