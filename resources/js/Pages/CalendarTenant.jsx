import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

    return (
        <div>
            {/* Render the calendar */}
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
}

export default CalendarTenant;
