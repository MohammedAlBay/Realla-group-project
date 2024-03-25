import React, { useRef, useState } from "react";

export default function Form({ onAddTodo }) {
    const inputRef = useRef();
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    function clickHandler() {
        const inputElement = inputRef.current;
        const newTodo = { text: inputElement.value, done: false };

        onAddTodo(newTodo, fromDate, toDate);

        inputElement.value = "";
        setFromDate("");
        setToDate("");
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: "1rem",
                padding: "1rem",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                    ref={inputRef}
                    type="text"
                    id="outlined-basic"
                    placeholder="Write a todo"
                    style={{
                        marginTop: "1.5rem",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid #ccc",
                        padding: "0.5rem",
                        borderRadius: "4px",
                    }}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}>
                <label style={{ marginBottom: "0.5rem" }}>From:</label>
                <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    style={{
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        padding: "0.5rem",
                        borderRadius: "4px",
                    }}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}>
                <label style={{ marginBottom: "0.5rem" }}>To:</label>
                <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    style={{
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        padding: "0.5rem",
                        borderRadius: "4px",
                    }}
                />
            </div>
            <button
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginLeft: "1rem",
                }}
                onClick={clickHandler}
            >
                Add
            </button>
        </div>
    );
}
