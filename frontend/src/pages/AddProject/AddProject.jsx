import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
// import Input from "@mui/material/Input";
import ToDoList from "@components/TodoList/TodoList";
import { tokens } from "../../theme";
import Header from "../../components/Header/Header";
// import { Stack, Avatar, MenuItem } from "@mui/material";
// import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper,} from "@mui/material"

// import { Form, FormControl, Button } from '@material-ui/core'

function AddProject() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Box m="20">
      <Header title="CREATE PROJECT" subtitle="Create your new project here" />
      <Box display="flex" flexDirection="column" height="100%">
        <Box
          p={1}
          display="flex"
          justifyContent="center"
          backgroundColor="#0088CE"
          width="100%"
          height="5em"
        >
          <TextField
            required
            id="outlined-required"
            label="Project Manager"
            defaultValue="Project Manager"
            helperText="Enter Project Manager"
          />
          <TextField
            required
            id="outlined-required"
            label="Project Name"
            defaultValue="Project Name"
            helperText="Enter Project Name"
          />
          <TextField
            id="outlined-required"
            label="Start Date"
            type="date"
            defaultValue={startDate}
            helperText="Select Start Date"
            onBlur={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-required"
            label="End Date"
            type="date"
            defaultValue={endDate}
            helperText="Select End Date"
            onBlur={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box
          p={1}
          display="flex"
          justifyContent="space-between"
          backgroundColor="#0088CE"
          width="100%"
          height="2em"
        />

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          flex-direction="column"
          flex-wrap="nowrap"
          justify-content="center"
          align-items="center"
          backgroundColor={colors.primary[300]}
        >
          <Box
            display="flex"
            width="100%"
            flex-direction="column"
            justify-content="center"
            align-items="center"
            backgroundColor={colors.grey[100]}
          >
            <TextField
              InputProps={{
                sx: {
                  "& input": {
                    textAlign: "center",
                    height: "8em",
                    margin: "0.5em",
                  },
                },
              }}
              id="outlined-multiline-flexible"
              placeholder="Describe your project here..."
              maxRows={15}
            />
          </Box>
        </Box>
      </Box>
      <ToDoList />
    </Box>
  );
}

export default AddProject;
