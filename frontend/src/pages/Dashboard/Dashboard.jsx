import { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import NoteList from "../../components/NotesList/NotesList";
import SearchBar from "../../components/SearchBar/SearchBar";
import SliderTeam from "../../components/SliderTeam/SliderTeam";

function Dashboard() {
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
    {
      id: 3,
      noteText: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: 4,
      noteText: "This is my new note!",
      date: "30/04/2021",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: 1,
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
      <Box mt="20px">
        <Box sx={{ mb: "1em" }}>
          <SearchBar handleSearchNote={setSearchText} />
        </Box>
        <NoteList
          notes={notes.filter((note) =>
            note.noteText.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </Box>
    </Box>
  );
}

export default Dashboard;
