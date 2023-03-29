import React from "react";
import { Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function TeamTitle({ selectedRole }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper elevation="10" sx={{ background: "transparent" }}>
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        letterSpacing="0.15em"
        textAlign="center"
        sx={{
          borderRadius: "5px",
          padding: "0.3em",
          background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
          width: "100%",
        }}
      >
        {selectedRole || "Selected Team"}
      </Typography>
    </Paper>
  );
}

export default TeamTitle;
