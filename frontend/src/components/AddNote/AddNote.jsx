import { Box, Typography, Button, useTheme } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";

import { tokens } from "../../theme";

function AddNote({ handleAddNote }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [noteText, setNoteText] = useState("");
  const characterLimit = 300;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        background: `${colors.grey[200]}`,
        mb: "10px",
        borderRadius: "10px",
        p: "1rem",
        minHeight: "170px",
      }}
    >
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
        value={noteText}
        onChange={handleChange}
        placeholder="Type to add a note..."
      />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h7">
          {characterLimit - noteText.length} remaining
        </Typography>
        <Button
          onClick={handleSaveClick}
          sx={{ mt: "10px" }}
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default AddNote;
