import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function TeamTitle({ selectedRole }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        letterSpacing="0.15em"
        textAlign="center"
        sx={{
          border: 1,
          borderRadius: "5px",
          padding: "0.4em",
          width: "300px",
        }}
      >
        {selectedRole || "Selected Team"}
      </Typography>
    </Box>
  );
}

export default TeamTitle;
