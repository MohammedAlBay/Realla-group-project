// AppointmentTenant.jsx
import React, { useEffect, useState } from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';
import FormCalendar from '@/Components/FormCalender.jsx';

function AppointmentTenant() {
    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
        const storedAppointments = localStorage.getItem('appointments');
        if (storedAppointments) {
            setAppointments(JSON.parse(storedAppointments));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }, [appointments]);


    const addAppointment = (newAppointment) => {
        setAppointments([...appointments, newAppointment]);
    };

    return (
        <div className="container-appointment">
            <div className="card-appointment">
                <FormCalendar onAddAppointment={addAppointment} />
                <CalendarTenant appointments={appointments} />
            </div>
        </div>
    );
}

export default AppointmentTenant;
