import React, { useState } from "react";

export default function Todo({
                                 todos,
                                 handleCheckboxChange,
                                 handleEditTodo,
                                 handleDeleteTodo,
                             }) {
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handleDoubleClick = (index, text) => {
        setEditIndex(index);
        setEditValue(text);
    };

    const handleEditInputChange = (event) => {
        setEditValue(event.target.value);
    };

    const handleEditInputBlur = (index) => {
        handleEditTodo(index, editValue);
        setEditIndex(null);
        setEditValue("");
    };

    return (
        <div style={{ textAlign: "left" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            borderRadius: "25px",
                            padding: "5px",
                            display: "flex",
                            alignItems: "center",
                            margin: "1rem",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        {editIndex === index ? (
                            <input
                                type="text"
                                value={editValue}
                                onChange={handleEditInputChange}
                                onBlur={() => handleEditInputBlur(index)}
                                autoFocus
                            />
                        ) : (
                            <span onDoubleClick={() => handleDoubleClick(index, todo.text)}>
                {todo.text}
              </span>
                        )}
                        <button
                            onClick={() => handleDoubleClick(index, todo.text)}
                            style={{ marginLeft: "auto", color: "lightblue", cursor: "pointer" }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteTodo(index)}
                            style={{ marginLeft: "8px", color: "darkred", cursor: "pointer" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
