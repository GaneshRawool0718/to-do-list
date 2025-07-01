import React, { useState } from "react";

const Homepage = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleAddTask = () => {
        if (input.trim() === "") return;
        setTasks([...tasks, { text: input, completed: false }]);
        setInput("");
    };

    const handleToggleTask = (index) => {
        setTasks(
            tasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20 }}>
            <h2>To Do List</h2>
            <div style={{ display: "flex", marginBottom: 20 }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                    style={{ flex: 1, marginRight: 8 }}
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task, idx) => (
                    <li
                        key={idx}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 8,
                            textDecoration: task.completed ? "line-through" : "none",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleTask(idx)}
                            style={{ marginRight: 8 }}
                        />
                        <span style={{ flex: 1 }}>{task.text}</span>
                        <button onClick={() => handleDeleteTask(idx)}>Delete</button>
                        <button
                            style={{ marginLeft: 8 }}
                            onClick={() => alert(`Task: ${task.text}\nCompleted: ${task.completed ? "Yes" : "No"}`)}
                        >
                            View
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Homepage;