import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import AddTaskForm from "../../components/TodoList/HandleSubmitTask";
import AddProjectForm from "../../components/TodoList/HandleSubmitProject";
import { tokens } from "../../theme";
import Header from "../../components/Header/Header";

function AddProject() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [projectName, setProjectName] = useState("");

  return (
    <Box
      mr="20px"
      sx={{ marginTop: { xs: "50px", sm: "40px", md: "40px", lg: "20px" } }}
    >
      <Header title="CREATE PROJECT" subtitle="Create your new project here" />
      <Box display="flex" flexDirection="column" height="100%" my="12px">
        <Box
          display="flex"
          m={1}
          justifyContent="space-around"
          borderRadius={1}
          p={1}
        >
          <AddProjectForm setProjectName={setProjectName} />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          m={1}
          justifyContent="center"
          borderRadius={1}
          borderColor={colors.primary[100]}
          p={1}
        >
          <AddTaskForm projectName={projectName} />
        </Box>
      </Box>
    </Box>
  );
}

export default AddProject;
