import React, { useState } from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';
import FormCalendar from '@/Components/FormCalender.jsx';
import EditAppointments from '@/Pages/EditAppointments.jsx'; // Import the new component

function AppointmentTenant() {
    const [editMode, setEditMode] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const handleAddAppointment = (newAppointment) => {
        setAppointments([...appointments, newAppointment]);
    };

    const handleEditAppointments = () => {
        setEditMode(!editMode);
    };

    const handleDeleteAppointment = (index) => {
        const updatedAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(updatedAppointments);
    };

    const handleCancel = () => {
        setEditMode(false); // Set edit mode to false to close the edit appointments component
    };

    return (
        <div className="container-appointment">
            <div className="card-appointment">
                {!editMode ? (
                    <>
                        <FormCalendar onAddAppointment={handleAddAppointment} onEditAppointments={handleEditAppointments} />
                        <CalendarTenant appointments={appointments} />
                    </>
                ) : (
                    <EditAppointments appointments={appointments} onDelete={handleDeleteAppointment} onCancel={handleCancel} />
                )}
            </div>
        </div>
    );
}

export default AppointmentTenant;

