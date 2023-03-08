import { useState } from "react";
import { Box, Grid, useTheme, Typography } from "@mui/material";
// import CalendarComponent from "../../components/Calendar/Calendar";
import Header from "../../components/Header/Header";
import NoteList from "../../components/NotesList/NotesList";
import SliderTeam from "../../components/SliderTeam/SliderTeam";
import AddNote from "../../components/AddNote/AddNote";
import SearchBar from "../../components/SearchBar/SearchBar";
import PieChart from "../../components/PieChart/PieChart";
import SelectProject from "../../components/SelectProject/SelectProject";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { tokens } from "../../theme";

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
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ border: 1, padding: "0 10px 0 10px" }}
        display="flex"
        justifyContent="space-between"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box sx={{ width: "250px", marginTop: "25px", border: 1 }}>
          <SelectProject />
        </Box>
      </Grid>
      <Grid
        display="flex "
        justifyContent="flexStart"
        flexDirection="column"
        item
        xs={5}
        sx={{ border: 1 }}
      >
        <Box sx={{ border: 1, padding: "1em" }}>
          <SliderTeam />
        </Box>
        <Box
          display="flex"
          justifyContent="flexStart"
          flexDirection="column"
          height="200px"
          sx={{ border: 1, paddingTop: "0.2em" }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              border: 1,
              height: "50px",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              color={colors.grey[100]}
              fontWeight="bold"
              letterSpacing="0.15em"
            >
              TASK LIST
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" overflow="auto" m="0.5em">
            <ProjectsList />
          </Box>
        </Box>
        <Box sx={{ m: "10px" }}>
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
                Your notes
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
      <Grid xs={4} display="flex" justifyContent="center" sx={{ border: 1 }}>
        <Typography
          variant="h4"
          color={colors.grey[100]}
          fontWeight="bold"
          letterSpacing="0.15em"
        >
          CHAT COMPONENT
        </Typography>
      </Grid>
      <Grid
        xs={3}
        display="flex"
        justifyContent="flexStart"
        flexDirection="column"
        alignItems="center"
        sx={{ border: 1 }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            borderBottom: 1,
            height: "100px",
            width: "100%",
            padding: "10px",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="200px"
            sx={{
              border: 1,
              height: "50px",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <Typography
              variant="h4"
              color={colors.grey[100]}
              fontWeight="bold"
              letterSpacing="0.15em"
            >
              Project Name
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ borderBottom: 1, paddingBottom: "10px", width: "100%" }}
        >
          <PieChart />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            border: 1,
            height: "50px",
            borderRadius: "5px",
            width: "90%",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <Typography
            variant="h4"
            color={colors.grey[100]}
            fontWeight="bold"
            letterSpacing="0.15em"
          >
            Project Task List
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            border: 1,
            height: "100%",
            borderRadius: "5px",
            width: "90%",
            marginTop: "10px",
          }}
        >
          <Typography
            variant="h4"
            color={colors.grey[100]}
            fontWeight="bold"
            letterSpacing="0.15em"
          >
            TASK LIST COMPONENT
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
