import React, { useState } from 'react';
import AddReminder from './AddReminder';
import "../../css/ReminderPanel.css";

const ReminderTenant = ({ onClose }) => {
    const [reminders, setReminders] = useState([
        { id: 1, text: "Pay gas bill", deadline: "2024-05-15", statement: "Not paid!" },
        { id: 2, text: "Call landlord", deadline: "2024-04-08", statement: "It's over" },
    ]);

    const [editMode, setEditMode] = useState(false);

    const handleAddReminder = (newReminder) => {
        setReminders([...reminders, { id: reminders.length + 1, ...newReminder }]);
        setEditMode(false);
    };

    const handleDeleteReminder = (id) => {
        const updatedReminders = reminders.filter(reminder => reminder.id !== id);
        setReminders(updatedReminders);
    };

    const handleToggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleCancel = () => {
        setEditMode(false);
    };

    return (
        <div className="reminder-panel">
            {reminders.map(reminder => (
                <div key={reminder.id} className="reminder-box">
                    <div className="reminder-text">
                        {reminder.text}
                        <button className='delete-reminder' onClick={() => handleDeleteReminder(reminder.id)}>
                            <i className='bx bxs-trash'></i>
                        </button>
                    </div>
                    <div className="reminder-deadline">Deadline: {reminder.deadline}</div>
                    <div className="reminder-statement">{reminder.statement}</div>
                </div>
            ))}
            <div className='flex max-w-100 m-auto'>
                <button onClick={handleToggleEditMode} className="bg-white text-yellow-500 font-bold mr-3 py-2 px-1 w-40 m-auto rounded hover:bg-yellow-500  hover:text-white">
                    Add Reminder
                </button>
                <button onClick={onClose} className="bg-yellow-500 text-white font-bold w-40 m-auto py-2 px-4 rounded hover:bg-orange-800">
                    Close
                </button>
            </div>
            {editMode && (
                <div className="reminder-form-container">
                    <AddReminder onAddReminder={handleAddReminder} onCancel={handleCancel} />
                </div>
            )}
        </div>
    );
};

export default ReminderTenant;
