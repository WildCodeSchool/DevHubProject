import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import { tokens } from "../../theme";
import Header from "../../components/Header/Header";

function AddProject() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20">
      <Header title="CREATE PROJECT" subtitle="Create your new project here" />
      <Box display="flex" height="100%">
        <Box
          backgroundColor={colors.primary[300]}
          borderRadius="4px"
          width="20%"
          height="100%"
        >
          <Typography component="h1" variant="h5">
            Project Manager
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[100]}
          borderRadius="4px"
          width="80%"
          height="100%"
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            display="flex"
            flex-direction="column"
            flex-wrap="nowrap"
            justify-content="center"
            align-items="center"
            backgroundColor={colors.primary[200]}
          >
            <Box
              display="flex"
              flex-direction="column"
              flex-wrap="nowrap"
              justify-content="center"
              align-items="center"
              backgroundColor={colors.primary[100]}
            >
              <Input id="input" label="Title" placeholder="Project Title" />

              <TextField
                id="outlined-multiline-flexible"
                placeholder="Placeholder"
                maxRows={15}
                defaultValue="Describe your project here..."
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddProject;
