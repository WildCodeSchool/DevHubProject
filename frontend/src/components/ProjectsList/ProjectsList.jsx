import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";
import axios from "axios";

function ProjectsList() {
  const [projectState, setProjectState] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        console.info("Projects:", response.data);
        setProjectState(response.data);
      } catch (err) {
        setError(error);
      }
    };
    console.info("Fetching projects...");
    fetchProjects();
  }, []);

  const getColor = (progress) => {
    if (progress < 25) {
      return red[500];
    }
    if (progress < 50) {
      return amber[500];
    }
    if (progress < 75) {
      return blue[500];
    }
    return green[500];
  };

  if (error) {
    console.error("Error fetching projects:", error);
    return <div>Error: {error}</div>;
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box sx={{ mt: 3 }}>
          {projectState.map((project) => (
            <Box
              key={project.id}
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <Box sx={{ width: "100%", mr: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: 8,
                      borderRadius: 5,
                      overflow: "hidden",
                      background: "#ccc",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        borderRadius: 5,
                        background: getColor(project.progress),
                      }}
                    />
                  </Box>
                  <Box sx={{ ml: 1 }}>
                    <Typography variant="caption">{`${project.progress}%`}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProjectsList;
