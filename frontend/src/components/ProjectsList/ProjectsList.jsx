import {
  Paper,
  useTheme,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { tokens } from "../../theme";

function ProgressionBar({ value }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getColor = (progress) => {
    if (progress < 26) {
      return colors.red[500];
    }
    if (progress < 51) {
      return colors.safran[500];
    }
    if (progress < 80) {
      return colors.blue[500];
    }
    return colors.green[500];
  };

  return (
    <>
      <Typography variant="body2" sx={{ mt: -1, mb: 1 }}>
        {`${value}%`}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        style={{ backgroundColor: colors.grey[200] }}
        sx={{ "& > .MuiLinearProgress-bar": { bgcolor: getColor(value) } }}
      />
    </>
  );
}

function ProjectsList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [projects, setProjects] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`http://localhost:5000/users/${id}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.info(response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.info(error);
      });
  }, []);

  return (
    <Paper
      elevation="1"
      sx={{
        m: "20px",
        color: colors.primary[500],
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.grey[200],
        border: "0px",
        borderRadius: "5px",
        boxShadow: "0px 0px 2rem rgba(136, 152, 170, 0.15)",
      }}
    >
      <CardHeader
        title="Your project list"
        sx={{
          display: "flex",
          alignItems: "center",
          background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          letterSpacing: "0.05rem",
          color: colors.safran[500],
          textTransform: "uppercase",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      />
      <TableContainer
        sx={{
          backgroundColor: colors.grey[200],
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: colors.primary[500], fontSize: "1em" }}>
                Nom du projet
              </TableCell>
              <TableCell sx={{ color: colors.primary[500], fontSize: "1em" }}>
                Description
              </TableCell>
              <TableCell sx={{ color: colors.primary[500], fontSize: "1em" }}>
                Status
              </TableCell>
              <TableCell sx={{ color: colors.primary[500], fontSize: "1em" }}>
                Progression
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "#ffffff" }}>
            {projects.map((project) => (
              <TableRow key={project.name}>
                <TableCell
                  sx={{ color: colors.primary[500] }}
                  component="th"
                  scope="row"
                >
                  {project.name}
                </TableCell>
                <TableCell sx={{ color: colors.primary[500] }}>
                  {project.description}
                </TableCell>
                <TableCell sx={{ color: colors.primary[500] }}>
                  {project.state}
                </TableCell>
                <TableCell sx={{ color: colors.primary[500] }}>
                  <ProgressionBar value={project.progress} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ProjectsList;
