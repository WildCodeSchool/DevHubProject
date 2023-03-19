import Slider from "react-slick";
import Note from "../Note/Note";

function NotesList({ notes, handleDeleteNote }) {
  const settings = {
    adaptiveHeight: true,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
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
