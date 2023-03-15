import React from "react";
import Task from "@components/Task/Task";
import { Box } from "@mui/material";
import Header from "@components/Header/Header";

function Roadmap() {
  return (
    <Box m="20">
      <Header title="ROADMAP" subtitle="Tasks list" />
      <Box marginBottom={1}>
        <Task />
      </Box>
    </Box>
  );
}

export default Roadmap;
