import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "@components/Header/Header";
// import AddTaskForm from "@components/TodoList/HandleSubmitTask";
// import AddTaskRoadmap from "@components/TodoList/HandleSubmitTaskRoadmap";
import UserTask from "@components/UserTask/UserTask";
import SelectProject from "@components/SelectProject/SelectProject";
import ProjectTaskList from "@components/ProjectTaskList/ProjectTaskList";
// import Task from "../../components/Task/Task";

function Roadmap() {
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [idProject, setIdProject] = useState("");
  console.info(selectedProjectName);
  const handleProjectSelect = (ProjectName) => {
    setSelectedProjectName(ProjectName);
  };

  return (
    <Box m="20" sx={{ marginTop: { xs: "60px", sm: "40px", md: "40px" } }}>
      <Header title="ROADMAP" subtitle="Tasks list" />
      <Box display="flex" flexDirection="column" height="100%" my="16px">
        <SelectProject
          handleProjectSelect={handleProjectSelect}
          setIdProject={setIdProject}
          setSelectedProjectName={setSelectedProjectName}
        />
        <UserTask />
        <ProjectTaskList idProject={idProject} />
      </Box>
    </Box>
  );
}

export default Roadmap;
