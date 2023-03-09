import React, { useState } from "react";

import { FormControl, InputLabel, Select } from "@material-ui/core";
// import { Stack } from "@mui/material";
// import Task from "../Task/Task";

function selectUser() {
  // const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/users")
  //     .then((response) => response.data)
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  return (
    <FormControl>
      <InputLabel id="user-label">Utilisateur</InputLabel>
      <Select
        labelId="user-label"
        id="user"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      />
    </FormControl>
  );
}

export default selectUser;
