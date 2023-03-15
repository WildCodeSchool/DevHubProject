import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function ProjectTitle({ selectedProjectName }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="200px"
      sx={{
        border: 1,
        height: "50px",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        letterSpacing="0.15em"
      >
        {selectedProjectName || "Project Name"}
      </Typography>
    </Box>
  );
}

export default ProjectTitle;
