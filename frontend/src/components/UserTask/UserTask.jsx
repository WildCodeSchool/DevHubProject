import { useState, useEffect } from "react";
import { Box, CardContent } from "@mui/material";
import axios from "axios";
import TaskList from "@components/TaskList/TaskList";

const token = localStorage.getItem("token");
function UserTask({ idProject }) {
  const [userTasks, setUserTasks] = useState([]);
  const userId = parseInt(localStorage.getItem("userId"), 10);
  console.info("🚀 ~ file: UserTask.jsx:10 ~ UserTask ~ userId:", userId);

  const getTaskByUserId = () => {
    console.info(idProject, "PROJECT ID ON getTaskByUserId");
    axios
      .get(
        `http://localhost:5000/users/${userId}/projects/${idProject}/tasks/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.info(
          "🚀 ~ file: UserTask.jsx:31 ~ getTaskByUserId ~ response:",
          response
        );
        return response.data;
      })
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
        setUserTasks(formattedData);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getTaskByUserId();
  }, [userId, idProject]); // added dependencies

  return (
    <Box>
      {userTasks.map((task) => (
        <Box>
          <CardContent sx={{ marginBottom: "5px" }}>
            <TaskList
              key={task.id}
              id={task.id}
              name={task.name}
              state={task.state}
              progress={task.progress}
              description={task.description}
              startDate={task.task_start_date}
              endDate={task.task_end_date}
              type={task.type}
            />
          </CardContent>
        </Box>
      ))}
    </Box>
  );
}

export default UserTask;
