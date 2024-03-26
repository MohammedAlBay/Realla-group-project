import React from 'react';
import "../../css/Appointment.css";
import CalendarTenant from '@/Pages/CalendarTenant';
import FormCalendar from '@/Components/FormCalender.jsx'

function AppointmentTenant() {
    return (
        <div className="container-appointment">
            <div className="card-appointment">
                <FormCalendar />
                <CalendarTenant />
            </div>
        </div>
    );
}
export default AppointmentTenant;
