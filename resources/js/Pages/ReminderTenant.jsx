import React, { useState } from 'react';
import AddReminder from './AddReminder';
import "../../css/ReminderPanel.css"; // Import CSS for styling

const ReminderPanel = () => {
    // Dummy data for reminders
    const [reminders, setReminders] = useState([
        { id: 1, text: "Pay gas bill", deadline: "2024-05-15", statement: "Not paid!" },
        { id: 2, text: "Call a plumber", deadline: "2024-04-18", statement: "It's over" },
        { id: 3, text: "Pay rent bill", deadline: "2024-04-20", statement: "It's over" },
        // Add more reminders as needed
    ]);

    const handleAddReminder = (newReminder) => {
        // Update the list of reminders with the new reminder
        setReminders([...reminders, { id: reminders.length + 1, ...newReminder }]);
    };

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
            <AddReminder onAddReminder={handleAddReminder} />
        </div>
    );
};

export default ReminderPanel;
