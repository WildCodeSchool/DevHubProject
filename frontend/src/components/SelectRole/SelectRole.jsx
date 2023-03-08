import { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { tokens } from "../../theme";

function SelectRole() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [role, setRole] = useState("");
  const [roleList, setRoleList] = useState([]);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const getRole = () => {
    axios
      .get(`http://localhost:5000/users`)
      .then((response) => response.data)
      .then((data) => {
        setRoleList(data);
      });
  };

  useEffect(() => {
    getRole();
  }, []);

  return (
    <Box width="250px">
      <TextField
        label="Role List"
        select
        value={role}
        onChange={handleChange}
        fullWidth
        size="small"
        style={{
          color: colors.grey[100],
        }}
      >
        {roleList.map((roleMap) => (
          <MenuItem key={roleMap.id} value={roleMap.name}>
            {roleMap.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default SelectRole;
