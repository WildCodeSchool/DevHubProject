import React, { useState, useEffect } from "react";
import { Paper, Box, useTheme, Typography } from "@mui/material";
import axios from "axios";
import { tokens } from "../../theme";

function ProjectTaskList({ idProject }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tasks, setTasks] = useState([]);

  const getTasksByProjectId = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/projects/${idProject}/tasks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks(response.data);
      console.info(
        "getTasksByProjectId retrieved successfully:",
        response.data
      );
    } catch (error) {
      console.info(error);
    }
  };
  useEffect(() => {
    if (idProject) {
      console.info("Selected project ID:", idProject);
      getTasksByProjectId();
    }
  }, [idProject]);

  return (
    <Paper
      sx={{
        height: "100%",
        borderRadius: "10px",
        width: "90%",
        marginTop: "10px",
        textAlign: "center",
        backgroundColor: colors.grey[500],
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: "0.5em",
      }}
    >
      <Paper
        elevation="10"
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: colors.primary[500],
        }}
      >
        {tasks.map((task) => (
          <Box
            key={task.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              p: 2,
              backgroundColor: colors.grey[500],
              borderRadius: "10px",
              m: "1em",
            }}
          >
            <Typography sx={{ color: colors.primary[500] }}>
              {task.name}
            </Typography>
            <Typography sx={{ color: colors.primary[500] }}>
              {task.status}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Paper>
  );
}

export default ProjectTaskList;
