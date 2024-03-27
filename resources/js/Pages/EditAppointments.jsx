import React from 'react';

function EditAppointments({ appointments, onCancel }) {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="edit-appointments bg-gray-100 p-8 rounded-lg shadow-md mb-20">
                <h2 className="text-2xl font-bold mb-4 text-gray-500">Manage Your Appointments</h2>
                <ul className="mb-4">
                    {appointments.map((appointment, index) => (
                        <li key={index} className="mb-2 text-gray-800">
                            <span className="font-semibold">{appointment.title}</span>
                            <br/>
                            <span>{formatDate(appointment.start)}</span>
                            <span> - </span>
                            <span>{formatDate(appointment.end)}</span>
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
