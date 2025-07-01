import React from "react";

const ViewAll = ({ tasks, onDelete }) => {
    return (
        <div style={{ maxWidth: 600, margin: "2rem auto", padding: 30, background: "#f8fafc", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <h2 style={{ textAlign: "center", color: "#2563eb", marginBottom: 24, letterSpacing: 1 }}>📋 All Tasks</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {tasks.length === 0 ? (
                    <li style={{ textAlign: "center", color: "#9ca3af", fontStyle: "italic", marginTop: 32 }}>No tasks to show.</li>
                ) : (
                    tasks.map((task, idx) => (
                        <li key={idx} style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.04)", padding: 14, marginBottom: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                            <div style={{ fontWeight: 600, fontSize: 17 }}>Title: {task.title || "Untitled"}</div>
                            <div style={{ color: "#374151", fontSize: 15 }}>Description: {task.description || "No description"}</div>
                            <button
                                onClick={() => onDelete(idx)}
                                style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", width: 100, fontWeight: 500, cursor: "pointer", alignSelf: "flex-end", marginTop: 6 }}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ViewAll;
