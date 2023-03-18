import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";

function ProjectsList({ projects }) {
  const [projectFilter, setProjectFilter] = useState("");

  const handleFilterChange = (event) => {
    setProjectFilter(event.target.value);
  };

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

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(projectFilter.toLowerCase())
  );

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <input
          type="text"
          placeholder="Filter projects by name"
          value={projectFilter}
          onChange={handleFilterChange}
        />
        <Box sx={{ mt: 3 }}>
          {filteredProjects.map((project) => {
            console.info(project);
            return (
              <Box
                key={project.id}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <Box sx={{ width: "100%", mr: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: green[500] }}>
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
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProjectsList;
