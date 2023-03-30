import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Paper, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import SelectProject from "../../components/SelectProject/SelectProject";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import NoteList from "../../components/NotesList/NotesList";
import ProjectTaskList from "../../components/ProjectTaskList/ProjectTaskList";
import PieChart from "../../components/PieChart/PieChart";
import SliderTeam from "../../components/SliderTeam/SliderTeam";
import SelectRole from "../../components/SelectRole/SelectRole";
import UserTask from "../../components/UserTask/UserTask";
import AddNote from "../../components/AddNote/AddNote";
import SearchBar from "../../components/SearchBar/SearchBar";
import DashBoardCalendar from "../../components/Calendar/DashboardCalendar";
import { tokens } from "../../theme";
import TeamTitle from "../../components/TeamTitle/TeamTitle";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [notes, setNotes] = useState([]);
  const [noteId, setNoteId] = useState();

  console.info("🚀 ~ file: Dashboard.jsx:23 ~ Dashboard ~ setNotes:", notes);
  const userId = parseInt(localStorage.getItem("userId"), 10);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/notes/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

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
  const deleteNote = async () => {
    console.info("🚀 ~ file: Dashboard.jsx:57 ~ deleteNote ~ noteId:", noteId);
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:5000/notes/${noteId}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await axios.get(
        `http://localhost:5000/notes/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNoteId(response.data);
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
  return (
    <Grid container sx={{ mt: "10px" }}>
      <Grid
        xs={12}
        style={{
          mt: "10px",
          borderRadius: "5px",
        }}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Grid>

      <Grid lg={5} md={6} sm={12} xs={12}>
        <Grid
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              background: colors.grey[200],
              p: "0.3em",
              mt: "10px",
              borderRadius: "5px",
              boxShadow: "0px 7px 8px 0px rgba(83,84,85,0.65)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& > *": {
                flex: 1,
                margin: "0 5px",
              },
            }}
          >
            <TeamTitle selectedRole={selectedRole} />
            <SelectRole setSelectedRole={setSelectedRole} />
          </Box>

          <Box
            sx={{
              height: "280px",
              backgroundColor: colors.grey[200],
              borderRadius: "5px",
              margin: "15px 0",
              boxShadow: "0px 7px 8px 0px rgba(83,84,85,0.65)",
            }}
          >
            <SliderTeam selectedRole={selectedRole} idProject={idProject} />
          </Box>

          <Box
            display="flex"
            justifyContent="flexStart"
            flexDirection="column"
            height="200px"
            sx={{ paddingTop: "0.2em" }}
          >
            <Paper
              elevation="10"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "50px",
                borderRadius: "5px",
                width: "100%",
                padding: "10px",
                background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                color="text.primary"
                fontWeight="bold"
                letterSpacing="0.15em"
              >
                TASK LIST
              </Typography>
            </Paper>
            <Box
              display="flex"
              justifyContent="center"
              overflow="auto"
              m="0.5em"
              sx={{ height: "400px" }}
            >
              <UserTask idProject={idProject} />
            </Box>
          </Box>

          <Paper
            elevation="10"
            sx={{
              mt: "10px",
              background: colors.grey[300],
              borderRadius: "5px",
              p: "1em",
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Paper
                elevation="10"
                display="flex"
                justifyContent="center"
                sx={{
                  mb: "1em",
                  background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
                  borderRadius: "5px",
                  p: "0.5rem",
                  minHeight: "15px",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" color={colors.grey[300]}>
                  NOTES
                </Typography>
              </Paper>
              <AddNote handleAddNote={addNote} />
            </Box>
            <Paper elevation="10" sx={{ borderRadius: "5px" }}>
              <SearchBar handleSearchNote={setSearchText} />
            </Paper>
            <Paper
              elevation="10"
              sx={{ borderRadius: "5px", background: colors.primary[500] }}
            >
              <NoteList
                notes={notes.filter(
                  (note) =>
                    typeof note.description === "string" &&
                    note.description.toLocaleLowerCase().includes(searchText)
                )}
                handleDeleteNote={deleteNote}
              />
            </Paper>
          </Paper>
        </Grid>
      </Grid>
      <Grid xs={12} lg={4} md={6} sm={12}>
        <DashBoardCalendar />
      </Grid>
      <Grid xs={12} lg={3} sm={12}>
        <Box
          sx={{
            mt: "10px",
            boxShadow: "0px 7px 8px 0px rgba(83,84,85,0.65)",
            borderRadius: "5px",
          }}
        >
          <SelectProject
            handleProjectSelect={handleProjectSelect}
            setIdProject={setIdProject}
            setSelectedProjectName={setSelectedProjectName}
          />
        </Box>
        <Box
          sx={{
            mt: "20px",
            boxShadow: "0px 7px 8px 0px rgba(83,84,85,0.65)",
            borderRadius: "5px",
          }}
        >
          <ProjectTitle selectedProjectName={selectedProjectName} />
        </Box>
        <Box
          sx={{
            mt: "20px",
            backgroundColor: colors.grey[200],
            borderRadius: "5px",
            p: "0.5em",
          }}
        >
          <PieChart />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
              width: "100%",
              textAlign: "center",
              borderRadius: "5px",
              mt: "0.5em",
              p: "0.5em 0",
              boxShadow: "0px 7px 8px 0px rgba(83,84,85,0.65)",
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
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProjectTaskList idProject={idProject} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
