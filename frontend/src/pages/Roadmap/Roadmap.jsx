import React from "react";
import Task from "@components/Task/Task";
import { Box } from "@mui/material";
import Header from "@components/Header/Header";
// import AddTaskForm from "@components/TodoList/HandleSubmitTask";
import AddTaskRoadmap from "@components/TodoList/HandleSubmitTaskRoadmap";

function Roadmap() {
  return (
    <Box m="20">
      <Header title="ROADMAP" subtitle="Tasks list" />
      <Box marginBottom={1}>
        <AddTaskRoadmap />
        <Task />
      </Box>
    </Box>
  );
}

export default Roadmap;
