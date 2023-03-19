import { useState, useEffect, useContext } from "react";
import { Box, CardContent } from "@mui/material";
import axios from "axios";
import TaskCard from "../TaskCard/TaskCard";
import { UserContext } from "../../context/userContext";

function UserTask(props) {
  const { userId } = useContext(UserContext);
  console.info("🚀 ~ file: UserTask.jsx:9 ~ UserTask ~ userId:", userId);
  const { projectId } = props; // props added
  const [userTasks, setUserTasks] = useState([]);

  const getTaskByUserId = () => {
    axios
      .get(`http://localhost:5000/users/${userId}/projects/${projectId}/tasks`)
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
  }, [userId, projectId]); // added dependencies

  return (
    <Box>
      {userTasks.map((taskMap) => (
        <Box>
          <CardContent sx={{ marginBottom: "1%", backgroundColor: "grey" }}>
            <TaskCard
              key={taskMap.id}
              name={taskMap.name}
              state={taskMap.state}
              progress={taskMap.progress}
              description={taskMap.description}
              startDate={taskMap.task_start_date}
              endDate={taskMap.task_end_date}
              type={taskMap.type}
            />
          </CardContent>
        </Box>
      ))}
    </Box>
  );
}

export default UserTask;
