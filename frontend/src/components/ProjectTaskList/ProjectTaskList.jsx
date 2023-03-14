import React, { useState, useEffect } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import axios from "axios";
import { tokens } from "../../theme";

function ProjectTaskList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects/1/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.info(error);
      });
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        border: 1,
        height: "100%",
        borderRadius: "5px",
        width: "90%",
        marginTop: "10px",
      }}
    >
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        letterSpacing="0.15em"
        mb={2}
      >
        LISTE DES TÂCHES
      </Typography>
      <Box sx={{ width: "90%", display: "flex", flexDirection: "column" }}>
        {tasks.map((task) => (
          <Box
            key={task.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ borderBottom: 1, p: 2 }}
          >
            <Typography>{task.name}</Typography>
            <Typography>{task.status}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ProjectTaskList;
