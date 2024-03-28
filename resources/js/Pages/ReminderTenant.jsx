// ReminderPanel.jsx
import React from 'react';
import "../../css/ReminderPanel.css"; // Import CSS for styling

const ReminderTenant = () => {
    // Dummy data for reminders
    const reminders = [
        { id: 1, text: "Meeting with client", deadline: "2024-03-15", statement: "Prepare presentation" },
        { id: 2, text: "Submit project proposal", deadline: "2024-03-18", statement: "Review and finalize" },
        { id: 3, text: "Call with team", deadline: "2024-03-20", statement: "Discuss project progress" },
        // Add more reminders as needed
    ];

    return (
        <div className="reminder-panel">
            {reminders.map(reminder => (
                <div key={reminder.id} className="reminder-box">
                    <div className="reminder-text">{reminder.text}</div>
                    <div className="reminder-deadline">Deadline: {reminder.deadline}</div>
                    <div className="reminder-statement">{reminder.statement}</div>
                </div>
            ))}
        </div>
    );
};

export default ReminderTenant;
