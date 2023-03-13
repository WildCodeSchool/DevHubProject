import { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { tokens } from "../../theme";

function SelectProject({ onProjectSelect }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [project, setProject] = useState("");
  const [projectList, setProjectList] = useState([]);

  const handleChange = (event) => {
    const selectedProjectName = event.target.value;
    setProject(selectedProjectName);
    onProjectSelect(selectedProjectName);
  };

  const getProjectsByUserID = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/users/1/projects"
      );
      setProjectList(response.data);
      console.info("Projects retrieved successfully:", response.data);
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
        value={project}
        onChange={handleChange}
        fullWidth
        size="small"
        style={{
          color: colors.grey[100],
        }}
        helperText="Veuillez sélectionner votre projet"
      >
        {projectList.map((projectMap) => (
          <MenuItem key={projectMap.id} value={projectMap.name}>
            {projectMap.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default SelectProject;
