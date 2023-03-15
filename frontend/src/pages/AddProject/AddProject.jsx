import React, { useState } from "react";
import { Box } from "@mui/material";
import AddProjectForm from "@components/TodoList/HandleSubmitProject";
import AddTaskCard from "@components/TodoList/HandleSubmitTest";
// import AddTaskForm from "@components/TodoList/HandleSubmitTask";
// import { tokens } from "../../theme";
// import Input from "@mui/material/Input";
// import ToDoList from "../../components/TodoList/TodoList";
import Header from "../../components/Header/Header";

function AddProject() {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const [startDate, setStartDate] = useState("");
  const [projectName, setProjectName] = useState("");

  return (
    <Box m="20">
      <Header title="CREATE PROJECT" subtitle="Create your new project here" />
      <Box display="flex" flexDirection="column" height="100%" my="12px">
        <Box
          display="flex"
          m={1}
          justifyContent="center"
          borderRadius={1}
          p={1}
          sx={{ backgroundColor: "#f2f0f0" }}
        >
          <AddProjectForm setProjectName={setProjectName} />
        </Box>

        {/* <Box
          display="flex"
          m={1}
          flexDirection="column"
          justifyContent="center"
          borderRadius={1}
          p={1}
          sx={{ backgroundColor: "#f2f0f0" }}
        >
          <AddTaskForm projectName={projectName} />
        </Box> */}

        <Box
          display="flex"
          m={1}
          flexDirection="column"
          justifyContent="center"
          borderRadius={1}
          p={1}
          sx={{ backgroundColor: "#f2f0f0" }}
        >
          <AddTaskCard projectName={projectName} />
        </Box>

        <Box>{/* <ToDoList /> */}</Box>
      </Box>
    </Box>
  );
}

export default AddProject;
