import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import Header from "../Header/Header";
import { tokens } from "../../theme";

function DashBoardCalendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [deleteEvent, setDeleteEvent] = useState({ id: "", event: null });

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setOpen(true);
  };

  const handleEventClick = (selected) => {
    setDeleteEvent({ id: selected.event.id, event: selected.event });
    setOpen(true);
  };

  const handleSave = () => {
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selectedDate.dateStr}-${title}`,
        title,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });

      setTitle("");
      setOpen(false);
    }
  };

  return (
    <Box m="20px">
      <Header
        title="CALENDAR"
        sx={{
          background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
        }}
      />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR */}
        <Box
          flex="1 1 100%"
          sx={{
            background: colors.primary[400],
            borderRadius: "5px",
            p: "0.5em",
            mt: "10px",
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
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
      </Box>
      <Box m="20px">
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle sx={{ backgroundColor: colors.primary[400] }}>
            {deleteEvent.event ? "Delete Event" : "New Event"}
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: colors.primary[400] }}>
            {deleteEvent.event ? (
              <Typography>
                Are you sure you want to delete the event '
                {deleteEvent.event.title}'?
              </Typography>
            ) : (
              <TextField
                label="Title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            )}
          </DialogContent>
          <DialogActions sx={{ backgroundColor: colors.primary[400] }}>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            {deleteEvent.event ? (
              <Button
                onClick={() => {
                  deleteEvent.event.remove();
                  setOpen(false);
                  setDeleteEvent({ id: "", event: null });
                }}
                variant="contained"
                color="primary"
              >
                Delete
              </Button>
            ) : (
              <Button onClick={handleSave} variant="contained" color="primary">
                Save
              </Button>
            )}
          </DialogActions>
        </Dialog>
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.safran[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography variant="h6">
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default DashBoardCalendar;
