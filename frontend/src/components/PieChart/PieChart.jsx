import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { red, amber, blue, green } from "@mui/material/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ idProject }) {
  const [tasks, setTasks] = useState([]);
  const getColor = (progress) => {
    if (progress < 30) {
      return red[500];
    }
    if (progress < 51) {
      return amber[500];
    }
    if (progress < 80) {
      return blue[500];
    }
    return green[500];
  };

  const getTasksByProjectId = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/projects/${idProject}/tasks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks(response.data);
      console.info(
        "getTasksByProjectId retrieved successfully:",
        response.data
      );
    } catch (error) {
      console.info(error);
    }
  };
  useEffect(() => {
    if (idProject) {
      console.info("Selected project ID:", idProject);
      getTasksByProjectId();
    }
  }, [idProject]);

  const progressSum = tasks.reduce(
    (accumulator, currentValue) => accumulator + currentValue.progress,
    0
  );
  const progressAverage = tasks.length > 0 ? progressSum / tasks.length : 0;
  const percentageRemaining = 100 - progressAverage;
  const projectValue = progressSum / tasks.length;

  const chartData = {
    labels: ["Accomplished (%)", "Remaining (%)"],
    datasets: [
      {
        label: "",
        data: [projectValue, percentageRemaining],
        backgroundColor: [getColor(projectValue), "#E0E0E0"],
        borderWidth: 1,
        cutout: "80%",
        borderRadius: 20,
        offset: 5,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          if (label === "Accomplished (%)" || label === "Remaining (%)") {
            return value.toFixed(2);
          }
          return value;
        },
        color: "#fff",
      },
    },
    cutout: 75,
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box
      sx={{
        width: "350px",
        height: "350px",
        position: "relative",
        margin: "0 auto",
      }}
    >
      {tasks.length > 0 && (
        <>
          <Doughnut data={chartData} options={chartOptions} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "primary.main",
            }}
          >
            {projectValue.toFixed(2)}%
            <Typography
              variant="body2"
              sx={{ display: "block", color: "#FFA300" }}
            >
              {tasks.length} tasks
            </Typography>
          </Typography>
        </>
      )}
    </Box>
  );
}

export default PieChart;
