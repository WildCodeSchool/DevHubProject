import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";

function ProjectsList({ projects }) {
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

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Box sx={{ mt: 3 }}>
          {projects &&
            projects.map((project) => {
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
                    <Typography variant="body2">
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
                            width: `${project.progress}%`,
                          }}
                        />
                      </Box>

                      <Box sx={{ ml: 1, Width: 70 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            textAlign: "right",
                          }}
                        >
                          {`${project.progress}%`}{" "}
                          {/* La valeur affichée dépend de la valeur de progress */}
                        </Typography>
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
