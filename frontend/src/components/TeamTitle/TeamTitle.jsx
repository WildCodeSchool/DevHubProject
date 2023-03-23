import React from "react";
import { Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function TeamTitle({ selectedRole }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper>
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        letterSpacing="0.15em"
        textAlign="center"
        sx={{
          borderRadius: "5px",
          padding: "0.4em",
          width: "300px",
          backgroundColor: colors.primary[500],
        }}
      >
        {selectedRole || "Selected Team"}
      </Typography>
    </Paper>
  );
}

export default TeamTitle;
