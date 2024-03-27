import React from 'react';

function EditAppointments({ appointments, onCancel }) {
    return (
        <div className="edit-appointments">
            <h2>Edit Appointments</h2>
            <ul>
                {appointments.map((appointment, index) => (
                    <li key={index}>
                        <span>{appointment.title}</span>
                        <span>{appointment.start.toString()}</span>
                        <span>{appointment.end.toString()}</span>
                    </li>
                ))}
            </ul>
            <button onClick={onCancel}>Close</button>
        </div>
    );
}

export default EditAppointments;
