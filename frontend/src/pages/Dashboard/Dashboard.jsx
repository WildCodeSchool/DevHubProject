// import { useState } from "react";
import { Box, Grid } from "@mui/material";
// import CalendarComponent from "../../components/Calendar/Calendar";
import Header from "../../components/Header/Header";
// import NoteList from "../../components/NotesList/NotesList";
// import SliderTeam from "../../components/SliderTeam/SliderTeam";
// import { tokens } from "../../theme";
// import AddNote from "../../components/AddNote/AddNote";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import PieChart from "../../components/PieChart/PieChart";

function Dashboard() {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const [notes, setNotes] = useState([
  //   {
  //     id: 1,
  //     noteText: "This is my first note!",
  //     date: "15/04/2021",
  //   },
  //   {
  //     id: 2,
  //     noteText: "This is my second note!",
  //     date: "21/04/2021",
  //   },
  // ]);

  // const addNote = (text) => {
  //   const date = new Date();
  //   const newNote = {
  //     id: notes.length + 1,
  //     noteText: text,
  //     date: date.toLocaleDateString(),
  //   };
  //   const newNotes = [...notes, newNote];
  //   setNotes(newNotes);
  // };

  // const deleteNote = (id) => {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  // };
  // const [searchText, setSearchText] = useState("");
  return (
    <Grid container>
      <Grid item xs={12} sx={{ border: 1 }}>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Grid>
      <Box sx={{ width: "50px", border: 1 }}>filtre</Box>
    </Grid>
  );
}

export default Dashboard;
