// ReminderPanel.jsx
import React from 'react';
import "../../css/ReminderPanel.css"; // Import CSS for styling

const ReminderTenant = () => {
    // Dummy data for reminders
    const reminders = [
        { id: 1, text: "Pay gas bill", deadline: "2024-05-15", statement: "Not paid!" },
        { id: 2, text: "Call a plumber", deadline: "2024-04-18", statement: "It's over" },
        { id: 3, text: "Pay rent pill", deadline: "2024-04-20", statement: "It's over" },
        // Add more reminders as needed
    ];

    return (
        <div className="reminder-panel">
            <h2 className="reminder-heading">Reminder <i className='bx bxs-bell'></i></h2>
            {reminders.map(reminder => (
                <div key={reminder.id} className="reminder-box">
                    <div className="reminder-text">{reminder.text}</div>
                    <div className="reminder-deadline">Deadline: {reminder.deadline}</div>
                    <div className="reminder-statement">{reminder.statement}</div>
                </div>
            ))}
            <button className="add-new-reminder"> Add new <i className='bx bxs-add-to-queue'></i></button>
        </div>
    );
};

export default ReminderTenant;
