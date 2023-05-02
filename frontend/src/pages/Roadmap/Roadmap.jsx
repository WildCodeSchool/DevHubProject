import React, { useState } from "react";
import { Box } from "@mui/material";
import UserTask from "@components/UserTask/UserTask";
import SelectProject from "@components/SelectProject/SelectProject";
import Header from "../../components/Header/Header";

function Roadmap() {
  const [selectedProjectName, setSelectedProjectName] = useState("");
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
      </Box>
    </Box>
  );
}
export default Roadmap;
