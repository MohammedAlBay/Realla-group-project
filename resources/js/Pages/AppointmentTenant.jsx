// AppointmentTenant.jsx

import React, { useState, useEffect } from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';
import FormCalendar from '@/Components/FormCalender.jsx';
import EditAppointments from '@/Pages/EditAppointments.jsx';

function AppointmentTenant() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Retrieve appointments from local storage when component mounts
        const storedAppointments = JSON.parse(localStorage.getItem('appointments'));
        if (storedAppointments) {
            setAppointments(storedAppointments);
        }
    }, []); // Empty dependency array ensures this effect runs only once when component mounts

    const handleAddAppointment = (newAppointment) => {
        const updatedAppointments = [...appointments, newAppointment];
        setAppointments(updatedAppointments);
        // Store appointments in local storage
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    };

    const handleEditAppointments = (editedAppointments) => {
        setAppointments(editedAppointments);
        // Update appointments in local storage
        localStorage.setItem('appointments', JSON.stringify(editedAppointments));
    };

    const handleAppointmentClick = (clickedAppointment) => {
        // Implement logic to remove or update clicked appointment
        // You can open a modal for editing or prompt for confirmation before deletion
        console.log("Clicked appointment:", clickedAppointment);
    };

    return (
        <div className="container-appointment">
            <div className="card-appointment">
                <FormCalendar onAddAppointment={handleAddAppointment} />
                <CalendarTenant appointments={appointments} onAppointmentClick={handleAppointmentClick} />
            </div>
        </div>
    );
}

export default AppointmentTenant;
