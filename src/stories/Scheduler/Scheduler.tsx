import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // for dateClick and event drag
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"; // for resource scheduling

let eventGuid = 0;
export const createEventId = () => String(eventGuid++);

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: "2024-09-13",
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: "2024-09-13T12:00:00",
  },
];

const CalendarComponent = () => {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [weekendsVisible, setWeekendsVisible] = useState(true);

  // Handle date click to select range or create an event
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Enter Event Title");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  // Handle event click for interaction
  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Delete the event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  };

  return (
    <div className="calendar-container" style={{ width: "60vw" }}>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          resourceTimelinePlugin,
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,resourceTimeline",
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        weekends={weekendsVisible}
        events={events} // load initial events
        select={handleDateSelect} // date selection
        eventClick={handleEventClick} // event interaction
        resources={[
          { id: "a", title: "Room A" },
          { id: "b", title: "Room B" },
          { id: "c", title: "Room C" },
        ]} // rooms for resource scheduling
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
      />
    </div>
  );
};

export default CalendarComponent;
