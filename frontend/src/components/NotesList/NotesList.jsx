import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box } from "@mui/material";
import Note from "../Note/Note";
import "swiper/swiper-bundle.css";

function NotesList({ notes, handleDeleteNote }) {
  return (
    <Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {notes.map((note) => (
          <SwiperSlide key={note.id}>
            <Note
              description={note.description}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default NotesList;
