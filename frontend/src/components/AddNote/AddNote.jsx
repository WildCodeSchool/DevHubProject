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
  const userId = parseInt(localStorage.getItem("userId"), 10);

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
    if (noteText.trim().length > 0) {
      try {
        const token = localStorage.getItem("token");
        const postResponse = await axios.post(
          `http://localhost:5000/notes/user/${userId}`,
          {
            description: noteText,
            user_id: `${userId}`,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        handleAddNote(postResponse.data);
        setNoteText("");
        handleClose();

        const getResponse = await axios.get(
          `http://localhost:5000/notes/user/${userId}`,
          {
            params: {
              user_id: `${userId}`,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.info(getResponse.data);
      } catch (error) {
        console.info(error);
      }
    }
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        borderRadius: "5px",
      }}
    >
      <Button
        sx={{
          background: `linear-gradient(to left, ${colors.primary[700]}, ${colors.primary[400]})`,
          mb: "10px",
          borderRadius: "5px",
          p: "0.5rem",
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
            background: `${colors.grey[600]}`,
            mb: "10px",
            borderRadius: "5px",
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
    </Box>
  );
}

export default AddNote;
