import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../css/Appointment.css'

const localizer = momentLocalizer(moment);

function CalendarTenant() {
    // Sample events data
    const events = [
        {
            title: 'Event 1',
            start: new Date(2024, 2, 15),
            end: new Date(2024, 2, 17),
        },
        {
            title: 'Event 2',
            start: new Date(2024, 2, 20),
            end: new Date(2024, 2, 22),
        },
    ];

    // Event style function to customize event content color
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#FDB514',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
        };
        return {
            style,
        };
    };

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
                style={{ height: 500, width: 750, backgroundColor: 'white', color: 'darkgray' }}
            />
        </div>
    );
}

export default CalendarTenant;
