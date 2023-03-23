import Slider from "react-slick";
// import { Box } from "@mui/material";
import Note from "../Note/Note";

function NotesList({ notes, handleDeleteNote }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider>
      {notes.map((note) => (
        <Note
          key={note.id}
          description={note.description}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </Slider>
  );
}

export default NotesList;
