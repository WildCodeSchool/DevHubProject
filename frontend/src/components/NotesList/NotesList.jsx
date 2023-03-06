// import Carousel from "react-material-ui-carousel";
import Slider from "react-slick";
import Note from "../Note/Note";

function NotesList({ notes, handleDeleteNote }) {
  return (
    <Slider>
      {notes.map((note) => (
        <Note
          key={note.id}
          noteText={note.noteText}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </Slider>
  );
}

export default NotesList;
