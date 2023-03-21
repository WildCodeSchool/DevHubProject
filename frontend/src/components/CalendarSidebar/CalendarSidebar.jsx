import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

function CalendarSidebar({ events }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      style={{
        flex: "1 1 20%",
        backgroundColor: colors.primary[400],
        padding: "15px",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h5">Events</Typography>
      <List>
        {events.map((event) => (
          <ListItem
            key={event.id}
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
        ))}
      </List>
    </div>
  );
}

export default CalendarSidebar;
