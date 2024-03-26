import React, { useRef, useState } from "react";
import '../../css/app.css'


export default function Form({ onAddTodo }) {
    const inputRef = useRef();
    const [todoText, setTodoText] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    function clickHandler() {
        const newTodo = { text: todoText, fromDate, toDate };

        onAddTodo(newTodo);

        // Clear input fields after adding todo
        inputRef.current.value = "";
        setTodoText("");
        setFromDate("");
        setToDate("");
    }

    return (
        <div className="flex space-x-6 mb-7 mt-7 ml-3">
            <input
                type="text"
                ref={inputRef}
                placeholder="Appointment details"
                onChange={(e) => setTodoText(e.target.value)}
                className="border border-gray-400 rounded px-3 py-2 text-gray-800"
            />
            <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                placeholder="From"
                className="border border-gray-400 rounded px-3 py-2 text-gray-800"
            />
            <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="To"
                className="border border-gray-400 rounded px-3 py-2 text-gray-800"
            />
            <button
                onClick={clickHandler}
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-800"
            >
                Add
            </button>
        </div>
    );
}
