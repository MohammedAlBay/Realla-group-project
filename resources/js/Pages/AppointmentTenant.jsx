import React from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';

function AppointmentTenant() {
    return (
        <div className="container-appointment">
            <div className="card-appointment">
                <h1>Make a appointment</h1>
                <input placeholder="write a note..."/>
                <CalendarTenant />
            </div>
        </div>
    );
}

export default AppointmentTenant;
