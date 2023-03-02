import Carousel from "react-material-ui-carousel";
import Note from "../Note/Note";

function NotesList({ notes, handleDeleteNote }) {
  return (
    <Carousel>
      {notes.map((note) => (
        <Note
          key={note.id}
          noteText={note.noteText}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </Carousel>
  );
}

export default NotesList;
