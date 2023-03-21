/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { tokens } from "../../theme";

function SelectProject({
  handleProjectSelect,
  setIdProject,
  setSelectedProjectName,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectList, setProjectList] = useState([]);

  const handleChange = (event) => {
    const project = event.target.value;
    setSelectedProject(project);
    setIdProject(project.id);
    setSelectedProjectName(project.name);
    console.info("ID du projet sélectionné :", project.id);
    console.info("Nom du projet sélectionné :", project.name);
    handleProjectSelect(project.name);
  };

  const getProjectsByUserID = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = parseInt(localStorage.getItem("userId"), 10);
      const response = await axios.get(
        `http://localhost:5000/users/${userId}/projects`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const projects = response.data.map((projectMap) => ({
        ...projectMap,
        id: projectMap.id,
        name: projectMap.name,
      }));
      setProjectList(projects);
      console.info("Projects retrieved successfully:", projects);
    } catch (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    getProjectsByUserID();
  }, []);

  return (
    <Box width="250px">
      <TextField
        label="Liste de projets"
        select
        value={selectedProject}
        onChange={handleChange}
        fullWidth
        size="small"
        style={{
          color: colors.grey[100],
        }}
        helperText="Veuillez sélectionner votre projet"
      >
        {projectList.map((project) => (
          <MenuItem key={project.id} value={project}>
            {project.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default SelectProject;
