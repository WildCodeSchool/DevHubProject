import { useState, useEffect } from "react";
import { Paper, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { tokens } from "../../theme";

function SelectRole({ setSelectedRole }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [role, setRole] = useState("");
  const [roleList, setRoleList] = useState([]);

  const handleChange = (event) => {
    setRole(event.target.value);
    setSelectedRole(event.target.value);
  };

  const getRole = () => {
    const token = localStorage.getItem("token");
    axios

      .get(`http://localhost:5000/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)

      .then((data) => {
        const roles = new Set();
        data.forEach((roleMap) => {
          roles.add(roleMap.user_role);
        });
        setRoleList(Array.from(roles));
      });
  };

  useEffect(() => {
    getRole();
  }, [role]);

  return (
    <Paper
      elevation="10"
      sx={{ backgroundColor: "transparent", width: "100%" }}
    >
      <TextField
        label="Role List"
        select
        value={role}
        onChange={handleChange}
        fullWidth
        size="small"
        style={{
          background: `linear-gradient(to left, ${colors.primary[700]}, ${colors.primary[400]})`,
          width: "100%",
          borderRadius: "5px",
        }}
      >
        {roleList.map((roleMap) => (
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
            key={roleMap}
            value={roleMap}
          >
            {roleMap}
          </MenuItem>
        ))}
      </TextField>
    </Paper>
  );
}

export default SelectRole;
