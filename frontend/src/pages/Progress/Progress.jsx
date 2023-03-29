import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import PieChart from "../../components/PieChart/PieChart";
import UserTask from "../../components/UserTask/UserTask";

function Progress() {
  return (
    <Box m="20px">
      <Header title="PieChart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
        <UserTask />
      </Box>
    </Box>
  );
}

export default Progress;
