import React from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';

function AppointmentTenant() {
    return (
        <div className="container-appointment">
            <div className="card-appointment">
                <h1> Appointment Tenant page </h1>
                {/* Render the CalendarTenant component */}
                <CalendarTenant />
            </div>
        </div>
    );
}

export default AppointmentTenant;
