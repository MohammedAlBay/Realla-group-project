import React, { useState, useEffect } from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';
import FormCalendar from '@/Components/FormCalender.jsx';
import EditAppointments from '@/Pages/EditAppointments.jsx';
import ReminderTenant from "@/Pages/ReminderTenant.jsx";


function AppointmentTenant() {
    const [editMode, setEditMode] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [showReminder, setShowReminder] = useState(false);

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem('appointments'));
        if (storedAppointments) {
            setAppointments(storedAppointments);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }, [appointments]);

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
        setEditMode(false);
    };


    const handleReminderClick = () => {
        setShowReminder(true);
    };

    const handleReminderClose = () => {
        setShowReminder(false);
    };


    return (
        <div className="container-appointment">
            <div className="card-appointment">
                {!editMode ? (
                    <>
                        <FormCalendar
                            onAddAppointment={handleAddAppointment}
                            onEditAppointments={handleEditAppointments}
                            onReminderClick={handleReminderClick}
                        />

                        <CalendarTenant appointments={appointments} />
                        <ReminderTenant onClose={handleReminderClose} />
                    </>
                ) : (

                    <EditAppointments appointments={appointments} onDelete={handleDeleteAppointment} onCancel={handleCancel} />


                )}

            </div>
        </div>
    );
}

export default AppointmentTenant;
