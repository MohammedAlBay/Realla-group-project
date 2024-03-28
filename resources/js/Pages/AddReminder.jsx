import React, { useState } from 'react';

const AddReminder = ({ onAddReminder }) => {
    const [reminderText, setReminderText] = useState('');
    const [reminderDeadline, setReminderDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation and other logic can be added here
        const newReminder = {
            text: reminderText,
            deadline: reminderDeadline,
            statement: 'Not paid!' // Default statement, you can modify this as needed
        };
        // Pass the new reminder to the parent component
        onAddReminder(newReminder);
        // Reset the form fields
        setReminderText('');
        setReminderDeadline('');
    };

    return (
        <div>
            <h2>Add New Reminder</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Reminder Text:</label>
                    <input type="text" value={reminderText} onChange={(e) => setReminderText(e.target.value)} />
                </div>
                <div>
                    <label>Deadline:</label>
                    <input type="date" value={reminderDeadline} onChange={(e) => setReminderDeadline(e.target.value)} />
                </div>
                <button type="submit">Add Reminder</button>
            </form>
        </div>
    );
};

export default AddReminder;
