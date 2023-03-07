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
          backgroundColor={colors.primary[300]}
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
          backgroundColor={colors.primary[300]}
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
            backgroundColor={colors.primary[100]}
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
        {/* <Box  
                display="flex"
                justifyContent="center"
                component="div"               
                width="100%"
                height="6em"
                backgroundColor={colors.greenAccent[500]}>
                <TextField 
                    helperText=" Please Select Task Type" 
                    label='Task' 
                    width="5em" 
                    select >
                  <MenuItem value="Front">Frontend</MenuItem>
                  <MenuItem value="Back">Backend</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
                  <MenuItem value="Wireframe">Wireframe</MenuItem>
                </TextField>
                <TextField
                    label="Start Date"            
                    size="normal"
                    color='primary'
                    helperText="Please Select Start Date">
                </TextField>
                <TextField
                    label="End Date"            
                    size="normal"
                    color='primary'
                    helperText="Please Select End Date">
                </TextField>
                <TextField 
                    helperText="Please Select Team User" 
                    label='User' 
                    select >
                  <MenuItem value="Cri">Christophe</MenuItem>
                  <MenuItem value="Roro">Roland</MenuItem>
                  <MenuItem value="Pulp">Pulpy</MenuItem>
                </TextField>
              </Box> */}

        {/* <TableContainer component={Paper}
                height="8em">
                <Table aria-label="simple table" >                
                  <TableHead>
                    <TableRow sx={{
                      backgroundColor: "yellow",
                      borderBottom: "1px solid black",
                      "& th": {
                      fontSize: "1rem",
                      color: "rgba(96, 96, 96)"
                      }
                      }}>
                      <TableCell>Id</TableCell>
                      <TableCell>Tasks</TableCell>
                      <TableCell>Start date</TableCell>
                      <TableCell>End date</TableCell>
                      <TableCell>Users</TableCell>                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                    <TableRow 
                      key={row.id}
                      sx={{'&:last-child td, &:last-child th': {border:0}}}>
                      <TableCell sx={{backgroundColor: "blue"}}>{row.id}</TableCell>
                      <TableCell sx={{backgroundColor: "grey"}}>{row.task}</TableCell>
                      <TableCell sx={{backgroundColor: "grey"}}>{row.start}</TableCell>
                      <TableCell sx={{backgroundColor: "grey"}}>{row.end}</TableCell>
                      <TableCell sx={{backgroundColor: "grey"}}>{row.user}</TableCell>                      
                    </TableRow>))}
                  </TableBody>
                </Table>
              </TableContainer> 
      </Box> */}
      </Box>
      <ToDoList />
    </Box>
  );
}
// const tableData = [
//   {
//     id: 1,
//     task: "Task 1",
//     start: "2023-02-01",
//     end: "2023-02-08",
//     user: "bob",
//   },
//   {
//     id: 2,
//     task: "Task 2",
//     start: "2023-02-01",
//     end: "2023-02-08",
//     user: "bobboy",
//   },
//   {
//     id: 3,
//     task: "Task 3",
//     start: "2023-05-03",
//     end: "2023-02-08",
//     user: "bobbyby",
//   },
//   {
//     id: 4,
//     task: "Task 4",
//     start: "2023-02-01",
//     end: "2023-02-08",
//     user: "bobus",
//   },
//   {
//     id: 5,
//     task: "Task 5",
//     start: "2023-02-01",
//     end: "2023-02-08",
//     user: "bobabbba",
//   },
// ];

export default AddProject;
