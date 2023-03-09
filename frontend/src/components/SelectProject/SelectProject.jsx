import { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { tokens } from "../../theme";

function SelectProject() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [project, setProject] = useState("");
  const [projectList, setProjectList] = useState([]);

  const handleChange = (event) => {
    setProject(event.target.value);
  };

  const getProject = () => {
    axios
      .get(`http://localhost:5000/userProjects`)
      .then((response) => response.data)
      .then((data) => {
        setProjectList(data);
      });
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <Box width="250px">
      <TextField
        label="Project List"
        select
        value={project}
        onChange={handleChange}
        fullWidth
        size="small"
        style={{
          color: colors.grey[100],
        }}
        helperText="Please Select your Project"
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
