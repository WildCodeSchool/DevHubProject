import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { useState } from "react";
import { Box, Modal, TextField, Button } from "@mui/material";

function CalendarComponent({ setCurrentEvents }) {
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setTitle("");
    setShowModal(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleModalSave = () => {
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselected();

    if (title) {
      calendarApi.addEvent({
        id: `${selectedDate.dateStr}-${title}`,
        title,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });
    }

    handleModalClose();
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
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
      <Modal open={showModal} onClose={handleModalClose}>
        <Box sx={{ p: 2 }}>
          <TextField label="Title" value={title} onChange={handleTitleChange} />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleModalSave}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default CalendarComponent;
