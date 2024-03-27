import React, { useState, useEffect } from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';
import FormCalendar from '@/Components/FormCalender.jsx';
import EditAppointments from '@/Pages/EditAppointments.jsx'; // Import the new component

function AppointmentTenant() {
    const [editMode, setEditMode] = useState(false);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Retrieve appointments from local storage when component mounts
        const storedAppointments = JSON.parse(localStorage.getItem('appointments'));
        if (storedAppointments) {
            setAppointments(storedAppointments);
        }
    }, []); // Empty dependency array ensures this effect runs only once when component mounts

    useEffect(() => {
        // Save appointments to local storage whenever appointments state changes
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }, [appointments]); // Dependency array ensures this effect runs whenever appointments state changes


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

