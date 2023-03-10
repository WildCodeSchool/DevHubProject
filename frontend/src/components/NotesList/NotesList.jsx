// import Carousel from "react-material-ui-carousel";
import Slider from "react-slick";
import Note from "../Note/Note";

function NotesList({ notes, handleDeleteNote }) {
  return (
    <Slider>
      {notes.map((note) => (
        <Note
          id={note.id}
          description={note.description}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </Slider>
  );
}

export default NotesList;
