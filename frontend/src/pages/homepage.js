import React, { useEffect, useState } from "react";
import ViewAll from "./ViewAll";

const Homepage = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [showAll, setShowAll] = useState(false);

    // Fetch all tasks from the backend
    useEffect(() => {
        fetch("/api/tasks")
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error("Error fetching tasks:", err));
    }, []);

    // Handle adding a task to the backend
    const handleAddTask = () => {
        if (title.trim() === "" && description.trim() === "") return;

        const newTask = { title: title.trim(), description: description.trim() };

        fetch("/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(createdTask => {
                setTasks([...tasks, createdTask]);
                setTitle("");
                setDescription("");
            })
            .catch(err => console.error("Error adding task:", err));
    };

    // Handle deleting a task from the backend
    const handleDeleteTask = (id) => {
        fetch(`/api/tasks/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                setTasks(tasks.filter(task => task.id !== id));
            })
            .catch(err => console.error("Error deleting task:", err));
    };

    // Show ViewAll page
    if (showAll) {
        return (
            <ViewAll
                tasks={tasks}
                onDelete={(idx) => handleDeleteTask(tasks[idx].id)}
            />
        );
    }

    return (
        <div style={{ maxWidth: 500, margin: "2rem auto", padding: 30, background: "#f8fafc", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <h2 style={{ textAlign: "center", color: "#2563eb", marginBottom: 24, letterSpacing: 1 }}>📝 To Do List</h2>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: 24, gap: 10 }}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task Title"
                    style={{ padding: 10, borderRadius: 8, border: "1px solid #d1d5db", fontSize: 16 }}
                    onKeyDown={e => { if (e.key === 'Enter') handleAddTask(); }}
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description"
                    style={{ padding: 10, borderRadius: 8, border: "1px solid #d1d5db", fontSize: 16, resize: "vertical", minHeight: 40 }}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAddTask(); } }}
                />
                <button
                    onClick={handleAddTask}
                    style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontWeight: 600, cursor: "pointer", alignSelf: "flex-end" }}
                >
                    Add
                </button>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {tasks.length === 0 ? (
                    <li style={{ textAlign: "center", color: "#9ca3af", fontStyle: "italic", marginTop: 32 }}>
                        No tasks yet. Add your first task!
                    </li>
                ) : (
                    tasks.map((task, idx) => (
                        <li key={task.id} style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                            marginBottom: 16,
                            background: "#fff",
                            borderRadius: 8,
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                            padding: 14
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "12px",
                                border: "1px solid #ddd",
                                borderRadius: "6px",
                                backgroundColor: "#f9f9f9",
                                gap: 6
                            }}>
                                <span style={{ fontSize: 17, fontWeight: 600 }}>
                                    Title: {task.title || "Untitled"}
                                </span>
                                <span style={{ color: "#374151", fontSize: 15 }}>
                                    Description: {task.description || "No description"}
                                </span>
                            </div>
                        </li>
                    ))
                )}
            </ul>

            <button
                onClick={() => setShowAll(true)}
                style={{ marginTop: 24, background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 600, cursor: "pointer", display: "block", marginLeft: "auto", marginRight: "auto" }}
            >
                View All Items
            </button>
        </div>
    );
};

export default Homepage;
