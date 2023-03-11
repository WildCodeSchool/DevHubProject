import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";

function ProjectsList() {
  const [projectState] = useState([]);
  const [error] = useState(null);

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
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${getColor(
                          project.progress
                        )}`,
                        width: `${project.progress}%`,
                      }}
                    />
                  </Box>
                  <Box sx={{ ml: 1, width: 70 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "right",
                        color: getColor(project.progress),
                      }}
                    >
                      {`${project.progress}%`}
                    </Typography>
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
