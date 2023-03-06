import { useState } from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
// import CalendarComponent from "../../components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import NoteList from "../../components/NotesList/NotesList";
import SliderTeam from "../../components/SliderTeam/SliderTeam";
import { tokens } from "../../theme";
import AddNote from "../../components/AddNote/AddNote";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import PieChart from "../../components/PieChart/PieChart";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: notes.length + 1,
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
  const [searchText, setSearchText] = useState("");
  return (
    <Grid width="100%" container spacing={3}>
      <Grid item xs={12}>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Grid>
      <Grid item xs={3} md={4}>
        <SliderTeam />
        <Box sx={{ m: "200px 10px 10px 35px" }}>
          <SearchBar handleSearchNote={setSearchText} />
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                mb: "1em",
                background: `${colors.grey[400]}`,
                borderRadius: "10px",
                p: "1rem",
                minHeight: "15px",
                width: "30%",
              }}
            >
              <Typography variant="h5" color={colors.primary[500]}>
                Vos notes
              </Typography>
            </Box>
            <AddNote handleAddNote={addNote} />
          </Box>
          <NoteList
            notes={notes.filter((note) =>
              note.noteText.toLocaleLowerCase().includes(searchText)
            )}
            handleDeleteNote={deleteNote}
          />
        </Box>
      </Grid>
      <Grid item xs={2} md={4}>
        CALENDAR COMPONENT
      </Grid>
      <Grid
        item
        xs={4}
        md={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex-direction="column"
      >
        <Box>
          <PieChart />
          <ProjectsList />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
