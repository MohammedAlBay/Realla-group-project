import React from 'react';

function EditAppointments({ appointments, onCancel, onDelete }) {
    return (
        <div className="flex justify-center items-center mt-6">
            <div className="edit-appointments bg-gray-100 p-8 rounded-lg shadow-md ">
                <h2 className="text-2xl font-bold mb-4 text-gray-500">Manage Your Appointments</h2>
                <ul className="mb-4 ">
                    {appointments.map((appointment, index) => (
                        <li key={index} className="mb-4 text-gray-800">
                            <span className="font-semibold">{appointment.title}</span>
                            <br/>
                            <span>{formatDate(appointment.start)}</span>
                            <span> - </span>
                            <span>{formatDate(appointment.end)}</span>
                            <button onClick={() => onDelete(index)} className="ml-2 bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-800">Delete</button>
                        </li>
                    ))}
                </ul>
                <button onClick={onCancel} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-800">Close</button>
            </div>
        </div>
    );
}
function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZone: 'Europe/Berlin' // Set to Central European Time
    };
    return new Date(date).toLocaleDateString('en-US', options);
}

export default EditAppointments;
