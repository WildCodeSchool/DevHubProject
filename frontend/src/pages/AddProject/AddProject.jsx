import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import AddTaskForm from "@components/TodoList/HandleSubmitTask";
import AddProjectForm from "../../components/TodoList/HandleSubmitProject";
// import AddTaskCard from "../../components/TodoList/HandleSubmitTest";
import { tokens } from "../../theme";
import Header from "../../components/Header/Header";

function AddProject() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
          sx={{ backgroundColor: colors.grey[500] }}
        >
          <AddProjectForm setProjectName={setProjectName} />
        </Box>

        <Box
          display="flex"
          m={1}
          flexDirection="column"
          justifyContent="center"
          borderRadius={1}
          p={1}
          sx={{ backgroundColor: "#f2f0f0" }}
        >
          <AddTaskForm projectName={projectName} />
        </Box>
      </Box>
    </Box>
  );
}

export default AddProject;
