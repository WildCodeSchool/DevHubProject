import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { Box } from "@mui/material";

function CalendarComponent({ setCurrentEvents }) {
  const handleDateClick = (selected) => {
    // A modifier par une modal ou pop up
    const title = console.info("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselected();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      console.info(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box flex="1 1 100%" ml="15px">
      <FullCalendar
        height="75vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="dayGridMonth"
        editable
        selectable
        selectMirror
        dayMaxEvents
        select={handleDateClick}
        eventClick={handleEventClick}
        eventsSet={(events) => setCurrentEvents(events)}
        initialEvents={[
          {
            id: "12315",
            title: "All-day event",
            date: "2022-09-14",
          },
          {
            id: "5123",
            title: "Timed event",
            date: "2022-09-28",
          },
        ]}
      />
    </Box>
  );
}

export default CalendarComponent;
