import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header/Header";
import NoteList from "../../components/NotesList/NotesList";
import SliderTeam from "../../components/SliderTeam/SliderTeam";
import { tokens } from "../../theme";
import AddNote from "../../components/AddNote/AddNote";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [notes, setNotes] = useState([
    {
      id: 1,
      noteText: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: 2,
      noteText: "This is my second note!",
      date: "21/04/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: notes.length + 1,
      noteText: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box sx={{ width: "50%" }}>
        <SliderTeam />
      </Box>
      <Box mt="20px" sx={{ width: "50%" }}>
        <Box display="flex" justifyContent="space-between">
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              mb: "1em",
              background: `${colors.primary[400]}`,
              borderRadius: "10px",
              p: "1rem",
              minHeight: "15px",
              width: "30%",
            }}
          >
            <Typography variant="h5" color={colors.grey[100]}>
              Your notes
            </Typography>
          </Box>

          <AddNote handleAddNote={addNote} />
        </Box>
        <NoteList notes={notes} handleDeleteNote={deleteNote} />
      </Box>
    </Box>
  );
}

export default Dashboard;
