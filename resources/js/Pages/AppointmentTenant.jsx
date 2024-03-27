import React, { useState } from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';
import FormCalendar from '@/Components/FormCalender.jsx';
import EditAppointments from '@/Pages/EditAppointments.jsx'; // Import the new component

function AppointmentTenant() {
    const [editMode, setEditMode] = useState(false); // State to track edit mode
    const [appointments, setAppointments] = useState([]); // State to store appointments

    // Function to add a new appointment
    const handleAddAppointment = (newAppointment) => {
        setAppointments([...appointments, newAppointment]);
    };

    // Function to toggle edit mode and show/hide edit appointments component
    const handleEditAppointments = () => {
        setEditMode(!editMode);
    };

    return (
        <div className="container-appointment">
            <div className="card-appointment">
                {/* Conditional rendering of components based on edit mode */}
                {!editMode ? (
                    <>
                        <FormCalendar onAddAppointment={handleAddAppointment} onEditAppointments={handleEditAppointments} />
                        <CalendarTenant appointments={appointments} />
                    </>
                ) : (
                    <EditAppointments appointments={appointments} onCancel={handleEditAppointments} />
                )}
            </div>
        </div>
    );
}

export default AppointmentTenant;

