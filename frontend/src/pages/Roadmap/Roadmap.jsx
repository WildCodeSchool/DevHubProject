import React, { useState } from "react";
import { Box } from "@mui/material";
// import AddTaskForm from "@components/TodoList/HandleSubmitTask";
// import AddTaskRoadmap from "@components/TodoList/HandleSubmitTaskRoadmap";
import UserTask from "@components/UserTask/UserTask";
import SelectProject from "@components/SelectProject/SelectProject";
import ProjectTaskList from "@components/ProjectTaskList/ProjectTaskList";
// import ProjectsList from "@components/ProjectsList/ProjectsList";
// import PieChart from "@components/PieChart/PieChart";
import SliderTeam from "@components/SliderTeam/SliderTeam";
import SelectRole from "@components/SelectRole/SelectRole";
import Header from "../../components/Header/Header";

function Roadmap() {
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [idProject, setIdProject] = useState("");
  console.info(selectedProjectName);
  const handleProjectSelect = (ProjectName) => {
    setSelectedProjectName(ProjectName);
  };

  return (
    <Box
      mr="10px"
      sx={{ marginTop: { xs: "50px", sm: "40px", md: "40px", lg: "20px" } }}
    >
      <Header title="ROADMAP" subtitle="Tasks list" />
      <Box display="flex" flexDirection="column" height="100%" my="16px">
        <SelectProject
          handleProjectSelect={handleProjectSelect}
          setIdProject={setIdProject}
          setSelectedProjectName={setSelectedProjectName}
        />
        <UserTask idProject={idProject} />
        {/* <PieChart idProject={idProject} /> */}
        <ProjectTaskList idProject={idProject} />
        <SelectRole setSelectedRole={setSelectedRole} />
        <SliderTeam selectedRole={selectedRole} idProject={idProject} />
        {/* <UserTaskList idProject={idProject}/> */}
      </Box>
    </Box>
  );
}
export default Roadmap;
