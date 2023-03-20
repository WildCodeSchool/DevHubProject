import React from "react";
import { Box } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: [
      "Project A",
      "DevHub Connect",
      "DevHub Project",
      "Project D",
      "DevHub Share",
    ],
    datasets: [
      {
        label: "Progress",
        data: [60, 20, 100, 45, 75],
        backgroundColor: [
          "#2196F3",
          "#F44336",
          "#4CAF50",
          "#FFC107",
          "#4CAF50",
        ],
        borderColor: ["#2196F3", "#F44336", "#4CAF50", "#FFC107", "#4CAF50"],
        borderWidth: 1,
        cutout: "85%",
        borderRadius: 20,
        offset: 5,
      },
    ],
  };

  return (
    <Box sx={{ width: "350px" }}>
      <Doughnut data={data} />
    </Box>
  );
}

export default PieChart;
