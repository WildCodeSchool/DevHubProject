import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { amber, blue, green, red } from "@mui/material/colors";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function TaskCard(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { name, state, progress, description, startDate, endDate, type } =
    props;

  const getColor = () => {
    if (progress < 25) {
      return red[500]; // Rouge pour une valeur de progress <= 25
    }
    if (progress < 50) {
      return amber[500]; // Orange pour une valeur de progress > 25 et <= 50
    }
    if (progress < 75) {
      return blue[500]; // Bleu pour une valeur de progress > 50 et <= 75
    }
    return green[500]; // Vert pour une valeur de progress > 75
  };

  return (
    <Card>
      <CardContent sx={{ maxWidth: "30em" }}>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: colors.primary[200] }}>
            Task name : {name}
          </Typography>
          <Typography color="secondary">Status : {state}</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: colors.primary[500],
          }}
        >
          <Typography maxwidth="120">{description}</Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Type : {type}</Typography>
        </Box>

        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Start : {startDate}</Typography>
          <Typography>End : {endDate}</Typography>
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            mt: 1,
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              mt: 1,
            }}
          >
            <Typography>Progress :</Typography>
            <Typography>{progress}%</Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              height: 8,
              borderRadius: 5,
              overflow: "hidden",
              background: "#ccc",
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: "100%",
                borderRadius: 5,
                background: getColor(progress),
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
                 ${getColor({ progress })}`,
                width: `${progress}%`,
              }}
            />
            <Box sx={{ ml: 1, Width: 70 }} />
            <Typography
              variant="h6"
              sx={{ textAlign: "right", color: getColor(progress) }}
            >
              {`${progress}%`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
export default TaskCard;
