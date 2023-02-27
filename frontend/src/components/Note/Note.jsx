import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { tokens } from "../../theme";

function Note({ id, title, date, handleDeleteNote }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        background: `${colors.primary[400]}`,
        mb: "10px",
        borderRadius: "10px",
        p: "1rem",
        minHeight: "170px",
        whiteSpace: "pre-wrap",
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h7">{date}</Typography>
        <DeleteForeverIcon size="1.3em" onClick={() => handleDeleteNote(id)} />
      </Box>
    </Box>
  );
}

export default Note;
