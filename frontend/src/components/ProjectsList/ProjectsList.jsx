import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";

const projects = [
  { id: 1, name: "Projet A", description: "Fatigue", progress: 60 },
  {
    id: 2,
    name: "Dev Hub Connect",
    description: "Fanny et fred G ne font rien",
    progress: 20,
  },
  {
    id: 3,
    name: "Dev Hub Project",
    description: "Au top les poulets",
    progress: 100,
  },
  { id: 4, name: "Projet D", description: "Bienveillance", progress: 45 },
  {
    id: 5,
    name: "Dev Hub Share",
    description: "Heureusement les filles sont là",
    progress: 75,
  },
];

function ProjectsList() {
  const getColor = (progress) => {
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
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box sx={{ mt: 3 }}>
          {projects.map((project) => (
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
                        background: getColor(project.progress), // La couleur de fond dépend de la valeur de progress
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), ${getColor(
                          project.progress
                        )}`,
                        width: `${project.progress}%`, // La largeur dépend de la valeur de progress
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
                      {`${project.progress}%`}{" "}
                      {/* La valeur affichée dépend de la valeur de progress */}
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
