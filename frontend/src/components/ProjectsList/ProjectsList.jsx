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
// import { red, amber, blue, green } from "@mui/material/colors";

import { tokens } from "../../theme";

const rows = [
  {
    nomProjet: "Projet 1",
    description: "Description du projet 1",
    status: "En cours",
    progression: 60,
  },
  {
    nomProjet: "Projet 2",
    description: "Description du projet 2",
    status: "Terminé",
    progression: 100,
  },
  {
    nomProjet: "Projet 3",
    description: "Description du projet 3",
    status: "En pause",
    progression: 45,
  },
  {
    nomProjet: "Projet 4",
    description: "Description du projet 4",
    status: "En pause",
    progression: 25,
  },
];

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
          backgroundColor: "#ffffff",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          letterSpacing: "0.05rem",
        }}
      />
      <TableContainer
        sx={{ backgroundColor: colors.grey[200] }}
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
            {rows.map((row) => (
              <TableRow key={row.nomProjet}>
                <TableCell
                  sx={{ color: colors.primary[500] }}
                  component="th"
                  scope="row"
                >
                  {row.nomProjet}
                </TableCell>
                <TableCell sx={{ color: colors.primary[500] }}>
                  {row.description}
                </TableCell>
                <TableCell sx={{ color: colors.primary[500] }}>
                  {row.status}
                </TableCell>
                <TableCell sx={{ color: colors.primary[500] }}>
                  <ProgressionBar value={row.progression} />
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
