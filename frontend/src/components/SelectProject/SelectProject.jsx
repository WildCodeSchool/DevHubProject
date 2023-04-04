/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import { Paper, useTheme } from "@mui/material";
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
    <Paper elevation="10" sx={{ background: "transparent" }}>
      <TextField
        label="Projects List"
        select
        value={selectedProject}
        onChange={handleChange}
        fullWidth
        size="small"
        style={{
          background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
          border: "none",
          width: "100%",
          borderRadius: "5px",
          color: colors.grey[200],
        }}
      >
        {projectList.map((project) => (
          <MenuItem
            sx={{
              backgroundColor: colors.primary[500],
              "&:hover": {
                backgroundColor: colors.primary[400],
              },
              "&.Mui-selected": {
                backgroundColor: colors.primary[700],
              },
              "&.Mui-selected:hover": {
                backgroundColor: colors.primary[400],
              },
            }}
            key={project.id}
            value={project}
          >
            {project.name}
          </MenuItem>
        ))}
      </TextField>
    </Paper>
  );
}

export default SelectProject;
