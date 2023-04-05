import { useState } from "react";
import { Card, CardContent, TextField, Button } from "@material-ui/core";
import { amber, blue, green, red } from "@mui/material/colors";
import {
  Box,
  useTheme,
  //   FormControl,
  //   InputLabel,
  //   Select,
  //   FormHelperText,
  Paper,
  Stack,
} from "@mui/material";
import { tokens } from "../../theme";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

function TaskList(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isEditable, setIsEditable] = useState(true);
  console.info(isEditable);

  const {
    name,
    state,
    progress,
    description,
    startDate,
    endDate,
    type,
    // user_id = [],
  } = props;

  const getColor = () => {
    if (progress < 25) {
      return red[500]; // Rouge pour une valeur de progress <= 25
    }
    if (progress < 50) {
      return amber[500]; // Orange pour une valeur de progress > 25 et <= 50
    }
    if (progress < 75) {
      return blue[500]; // Bleu pour une valeur de progress > 50 et <= 75
    }
    return green[500]; // Vert pour une valeur de progress > 75
  };

  return (
    <Paper
      elevation="10"
      mb="10px"
      sx={{
        background: `linear-gradient(to left, ${colors.primary[700]}, ${colors.primary[400]})`,
        p: "1%",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          borderColor: "primary",
          borderRadius: "5px",
          backgroundColor: colors.grey[100],
          p: "8px",
        }}
      >
        <Card>
          <CardContent>
            <Box
              style={{ display: "flex", justifyContent: "space-around" }}
              sx={{ marginBottom: 3 }}
            >
              <TextField
                defaultValue={name}
                placeholder={name}
                label="Task Name"
                disabled
                fullWidth
                color="primary"
                variant="filled"
                InputLabelProps={{ style: { color: colors.grey[100] } }}
                inputProps={{
                  style: {
                    color: colors.grey[100],
                    background: `linear-gradient(to left, ${colors.primary[700]}, ${colors.primary[400]})`,
                    p: "1%",
                  },
                }}
              />
              <TextField
                defaultValue={state}
                placeholder={state}
                label="State"
                variant="outlined"
                disabled
                isEditable={false}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                p: "1",
              }}
              sx={{ marginBottom: 3 }}
            >
              <TextField
                defaultValue={description}
                placeholder={description}
                label="Description"
                disabled
                fullWidth
                variant="outlined"
                inputProps={{
                  style: {
                    backgroundColor: colors.grey[300],
                    color: colors.primary[500],
                  },
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                p: "1",
              }}
              sx={{ marginBottom: 3 }}
            >
              <TextField
                defaultValue={type}
                placeholder={type}
                disabled
                label="Type"
                variant="outlined"
                inputProps={{
                  style: {
                    backgroundColor: colors.grey[300],
                    color: colors.primary[500],
                  },
                }}
              />
              <TextField
                defaultValue={startDate}
                placeholder={startDate}
                label="Start Date"
                variant="outlined"
                disabled
                inputProps={{
                  style: {
                    backgroundColor: colors.grey[300],
                    color: colors.primary[500],
                  },
                }}
              />
              <TextField
                defaultValue={endDate}
                placeholder={endDate}
                label="End Date"
                variant="outlined"
                disabled
                inputProps={{
                  style: {
                    backgroundColor: colors.grey[300],
                    color: colors.primary[500],
                  },
                }}
              />
              <TextField
                defaultValue={`${progress}%`}
                placeholder={`${progress}%`}
                label="Progress"
                disabled
                variant="outlined"
                inputProps={{
                  style: {
                    backgroundColor: colors.grey[300],
                    color: colors.primary[500],
                  },
                }}
              >
                {progress}%
              </TextField>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                mt: 1,
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  mt: 1,
                }}
              />
              <Box
                sx={{
                  flexGrow: 1,
                  height: 8,
                  borderRadius: 5,
                  overflow: "hidden",
                  background: "#ccc",
                  width: "100%",
                  marginBottom: 3,
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    marginBottom: 1,
                    borderRadius: 5,
                    background: getColor(progress),
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
            ${getColor({ progress })}`,
                    width: `${progress}%`,
                  }}
                />
                <Box sx={{ ml: 1, Width: 70 }} />
                <Box sx={{ textAlign: "right", color: getColor(progress) }}>
                  {`${progress}%`}
                </Box>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                p: "1",
              }}
              sx={{ marginBottom: 1 }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: colors.safran[500] }}
                onClick={() => setIsEditable(true)}
              >
                Update
              </Button>
              <Button variant="contained" color="secondary">
                Save Update
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Paper>
  );
}
export default TaskList;
