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
      width="100%"
      sx={{
        height: "50px",
        borderRadius: "10px",
        padding: "10px",
        border: "none",
        background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: colors.grey[100] }}
        fontWeight="bold"
        letterSpacing="0.15em"
      >
        {selectedProjectName || "Project Name"}
      </Typography>
    </Box>
  );
}

export default ProjectTitle;
