import { Box } from "@mui/material";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <Box
      display="grid"
      gap="1rem"
      gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
    >
      {notes.map((note) => (
        <Note
          id={note.id}
          noteText={note.noteText}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </Box>
  );
}

export default NotesList;
