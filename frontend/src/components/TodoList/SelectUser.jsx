import React, { useState } from "react";

import { FormControl, InputLabel, Select } from "@material-ui/core";
// import { Stack } from "@mui/material";
// import Task from "../Task/Task";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: "100%",
//       backgroundColor: "white",
//       flexdirection: "row",
//       justifycontent: "space-around",
//       flexwrap: "nowrap",
//       alignItems: "center",
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     button: {
//       margin: theme.spacing(1),
//       backgroundColor: "yellow",
//     },
//   }));

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
