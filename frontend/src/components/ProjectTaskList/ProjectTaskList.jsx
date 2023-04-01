import React, { useState, useEffect } from "react";
import { Box, useTheme, Typography } from "@mui/material";
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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: colors.primary[400],
        borderRadius: "5px",
        boxShadow: "0px 7px 8px 0px rgba(83,84,85,0.65)",
        mt: "1em",
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
            borderRadius: "5px",
            m: "1em",
          }}
        >
          <Typography sx={{ color: colors.primary[500] }}>
            {task.name}
          </Typography>
          <Typography sx={{ color: colors.primary[500] }}>
            {task.state}
          </Typography>
        </Box>
      ))}
    </Box>
    // </Box>
  );
}

export default ProjectTaskList;
