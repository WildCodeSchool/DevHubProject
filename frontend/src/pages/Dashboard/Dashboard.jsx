import { useState, useEffect } from "react";
import { Box, Grid, useTheme, Typography, Paper } from "@mui/material";
import axios from "axios";
import Header from "../../components/Header/Header";
import NoteList from "../../components/NotesList/NotesList";
import SliderTeam from "../../components/SliderTeam/SliderTeam";
import AddNote from "../../components/AddNote/AddNote";
import SearchBar from "../../components/SearchBar/SearchBar";
import PieChart from "../../components/PieChart/PieChart";
import SelectProject from "../../components/SelectProject/SelectProject";
import SelectRole from "../../components/SelectRole/SelectRole";
import UserTask from "../../components/UserTask/UserTask";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import TeamTitle from "../../components/TeamTitle/TeamTitle";
import ProjectTaskList from "../../components/ProjectTaskList/ProjectTaskList";
import Calendar from "../Calendar/Calendar";
import { tokens } from "../../theme";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notes");

        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      noteText: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.info(newNotes, "NEWNOTES");
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error(error);
    }
  };

  const [searchText, setSearchText] = useState("");

  const [selectedProjectName, setSelectedProjectName] = useState("");
  console.info("🚀 ~ Dashboard ~ selectedProjectName:", selectedProjectName);

  const [idProject, setIdProject] = useState("");
  console.info("🚀 ~ Dashboard ~ idProject:", idProject);

  const handleProjectSelect = (ProjectName) => {
    setSelectedProjectName(ProjectName);
    console.info(
      "🚀 ~ Dashboard ~ ProjectName on handleProjectSelect :",
      ProjectName
    );
  };
  const [selectedRole, setSelectedRole] = useState("");
  // eslint-disable-next-line no-unused-vars

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ border: 1, padding: "0 10px 0 10px", mt: "70px" }}
        display="flex"
        justifyContent="space-between"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box sx={{ width: "250px", marginTop: "1  5px" }}>
          <SelectProject
            handleProjectSelect={handleProjectSelect}
            setIdProject={setIdProject}
            setSelectedProjectName={setSelectedProjectName}
          />
        </Box>
      </Grid>
      <Grid
        display="flex "
        justifyContent="flexStart"
        flexDirection="column"
        item
        xs={5}
        sx={{ border: 1, p: "1em" }}
      >
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: "50px",
            borderRadius: "5px",
            width: "100%",
            marginBottom: "1em",
          }}
        >
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <TeamTitle selectedRole={selectedRole} />
            <Box sx={{ border: 1, borderRadius: "5px" }}>
              <SelectRole setSelectedRole={setSelectedRole} />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ border: 1, padding: "1em" }}>
          <SliderTeam selectedRole={selectedRole} idProject={idProject} />
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
            <UserTask setIdProject={setIdProject} />
          </Box>
        </Box>
        <Box sx={{ mt: "10px" }}>
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
          <Paper elevation="10">
            <SearchBar handleSearchNote={setSearchText} />
          </Paper>
          <Paper elevation="10" sx={{ borderRadius: "10px" }}>
            <NoteList
              notes={notes.filter(
                (note) =>
                  typeof note.description === "string" &&
                  note.description.toLocaleLowerCase().includes(searchText)
              )}
              handleDeleteNote={deleteNote}
            />
          </Paper>
        </Box>
      </Grid>
      <Grid
        xs={4}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        sx={{ border: 1 }}
      >
        <Calendar />
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
          <ProjectTitle selectedProjectName={selectedProjectName} />
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
        <ProjectTaskList idProject={idProject} />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
