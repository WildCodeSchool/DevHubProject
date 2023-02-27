import { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import NoteList from "../../components/NotesList/NotesList";

function Dashboard() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Your first note",
      date: "27/02/2023",
    },
    {
      id: 2,
      title: "Your second note",
      date: "10/03/2023",
    },
    {
      id: 3,
      title: "Your third note",
      date: "12/03/2023",
    },
    {
      id: 4,
      title: "Your fourth note",
      date: "13/03/2023",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: 1,
      title: text,
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
      <Box>
        <NoteList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </Box>
    </Box>
  );
}

export default Dashboard;
