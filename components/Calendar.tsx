'use client'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'


export default function Calendar() {
    return (
        <FullCalendar
            plugins={[dayGridPlugin,
                interactionPlugin,
                timeGridPlugin]}
            initialView="dayGridMonth"
            // events=[{}]
        />

    )
}
