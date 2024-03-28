import React, { useState } from 'react';

const AddReminder = ({ onAddReminder, onClose, onCancel }) => {
    const [reminderText, setReminderText] = useState('');
    const [reminderDeadline, setReminderDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReminder = {
            text: reminderText,
            deadline: reminderDeadline,
            statement: 'Not paid!'
        };

        onAddReminder(newReminder);

        setReminderText('');
        setReminderDeadline('');
    };


    return (
        <div className='add-new'>


            <h2 className="reminder-heading-new">Add New Reminder</h2>

            <form className='reminder-form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='Write here...' value={reminderText}
                           onChange={(e) => setReminderText(e.target.value)}/>
                </div>
                <div>
                    <input type="date" value={reminderDeadline} onChange={(e) => setReminderDeadline(e.target.value)}/>
                </div>
                <button type="submit"
                        className="bg-green-600 text-white font-bold py-2 px-4 ml-6 mt-2 mr-2 rounded hover:bg-orange-800">Add
                </button>

                <button onClick={onCancel}
                        className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-800">Close
                </button>
            </form>

        </div>
    );
};

export default AddReminder;
