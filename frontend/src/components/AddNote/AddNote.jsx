import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { tokens } from "../../theme";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 300;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = async () => {
    // ajouter async
    if (noteText.trim().length > 0) {
      try {
        const response = await axios.post("http://localhost:5000/notes", {
          description: noteText,
          user_id: 1,
        });
        handleAddNote(response.data);
        setNoteText("");
        handleClose();
        const getResponse = await axios.get("http://localhost:5000/notes", {
          user_id: 1,
        });
        console.info(getResponse.data);
      } catch (error) {
        console.info(error);
      }
    }
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Button
        sx={{
          background: `${colors.grey[200]}`,
          mb: "10px",
          borderRadius: "10px",
          p: "1rem",
          height: "100%",
          width: "150px",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Add Note
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{
            background: `${colors.grey[200]}`,
            mb: "10px",
            borderRadius: "10px",
            p: "1rem",
            width: "500px",
          }}
        >
          <TextField
            id="note-textfield"
            label="Your Notes"
            multiline
            rows={4}
            value={noteText}
            onChange={handleChange}
            placeholder="Type to add a note..."
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h7">
              {characterLimit - noteText.length} remaining
            </Typography>
            <Button onClick={handleSaveClick} variant="contained">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default AddNote;
