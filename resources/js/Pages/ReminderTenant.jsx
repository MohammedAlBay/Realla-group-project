import React, { useState } from 'react';
import AddReminder from './AddReminder';
import "../../css/ReminderPanel.css";

const ReminderPanel = () => {

    const [reminders, setReminders] = useState([
        { id: 1, text: "Pay gas bill", deadline: "2024-05-15", statement: "Not paid!" },


    ]);

    const [editMode, setEditMode] = useState(false); // State variable for edit mode

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
            <h2 className="reminder-heading">Reminder <i className='bx bxs-bell'></i></h2>
            {reminders.map(reminder => (
                <div key={reminder.id} className="reminder-box">
                    <div className="reminder-text">{reminder.text}
                        <button className='delete-reminder' onClick={() => handleDeleteReminder(reminder.id)}><i
                            className='bx bxs-trash'></i>
                        </button>
                    </div>
                    <div className="reminder-deadline">Deadline: {reminder.deadline}</div>
                    <div className="reminder-statement">{reminder.statement}</div>

                </div>
            ))}
            {editMode ? (
                <AddReminder onAddReminder={handleAddReminder} onCancel={handleCancel} />
            ) : (
                <button onClick={handleToggleEditMode} className="bg-white text-yellow-500 font-bold py-2 px-4 rounded hover:bg-yellow-500  hover:text-white">Add Reminder</button>
            )}
        </div>
    );
};

export default ReminderPanel;
