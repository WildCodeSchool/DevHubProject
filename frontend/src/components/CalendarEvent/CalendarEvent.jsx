import React from "react";
import { ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import { tokens } from "../../theme";

function CalendarEvent(props) {
  const { event } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ListItem
      sx={{
        backgroundColor: colors.greenAccent[500],
        margin: "10px 0",
        borderRadius: "2px",
      }}
    >
      <ListItemText
        primary={event.title}
        secondary={
          <Typography>
            {formatDate(event.start, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Typography>
        }
      />
    </ListItem>
  );
}

export default CalendarEvent;
