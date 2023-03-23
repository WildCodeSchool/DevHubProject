import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { tokens } from "../../theme";

function Note({ id, description, date, handleDeleteNote }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // console.info(description, "description dans NOTE.JSX");
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        background: `${colors.primary[500]}`,
        mb: "10px",
        borderRadius: "10px",
        p: "1rem",
        minHeight: "170px",
        whiteSpace: "pre-wrap",
      }}
    >
      <TextField multiline rows={4} value={description} variant="filled" />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h7">{date}</Typography>
        <DeleteForeverIcon
          cursor="pointer"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </Box>
    </Box>
  );
}

export default Note;
