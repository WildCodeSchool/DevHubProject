import { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import axios from "axios";
import { CardContent } from "@mui/material";
import TaskCard from "../TaskCard/TaskCard";

function Task() {
  const [task, setTask] = useState([]);
  const token = localStorage.getItem("token");
  const getTask = () => {
    axios
      .get("http://localhost:5000/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((data) => {
        const formattedData = data.map((item) => {
          const formattedStartDate = new Date(item.task_start_date)
            .toLocaleDateString("fr-FR")
            .slice(0, 10);
          const formattedEndDate = new Date(item.task_end_date)
            .toLocaleDateString("fr-FR")
            .slice(0, 10);
          return {
            ...item,
            task_start_date: formattedStartDate,
            task_end_date: formattedEndDate,
          };
        });
        setTask(formattedData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <Card sx={{ backgroundColor: "grey" }}>
      {task.map((tasks) => {
        return (
          <CardContent sx={{ marginBottom: "1%", backgroundColor: "grey" }}>
            <TaskCard
              key={tasks.id}
              name={tasks.name}
              state={tasks.state}
              progress={tasks.progress}
              description={tasks.description}
              startDate={tasks.task_start_date}
              endDate={tasks.task_end_date}
              type={tasks.type}
            />
          </CardContent>
        );
      })}
    </Card>
  );
}
export default Task;
