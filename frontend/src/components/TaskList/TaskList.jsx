import { useState } from "react";
import { amber, blue, green, red } from "@mui/material/colors";
import {
  Box,
  useTheme,
  //   FormControl,
  //   InputLabel,
  //   Select,
  //   FormHelperText,
  Stack,
  Button,
  Card,
  CardContent,
  TextField,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
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

  const UpdateButton = styled(Button)({
    backgroundColor: colors.safran[500],
    variant: "contained",
    color: "black",
  });
  const SaveButton = styled(Button)({
    backgroundColor: colors.red[600],
    variant: "contained",
    color: "black",
  });
  const TaskListPaper = styled(Paper)({
    elevation: "10",
    marginBottom: "10px",
    background: `linear-gradient(to left, ${colors.primary[700]}, ${colors.primary[400]})`,
    p: "1%",
  });
  const TaskListCardContend = styled(CardContent)({
    marginBottom: "10px",
    background: colors.grey[100],
    fontFamily: ["Roboto, Arial", "sans-serif"],
    width: "100%",
  });

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
    <TaskListPaper>
      <Stack
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          borderColor: "primary",
          borderRadius: "5px",
          backgroundColor: `linear-gradient(to left, ${colors.primary[700]}, ${colors.primary[400]})`,
          p: "8px",
          width: "100%",
        }}
      >
        <Card
          sx={{
            bgcolor: colors.grey[500],
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: { xs: "center", md: "space-around" },
            marginBottom: "1%",
            width: "100%",
          }}
        >
          <TaskListCardContend>
            <Box
              style={{ display: "flex", justifyContent: "space-around" }}
              sx={{
                marginBottom: 3,
                flexDirection: { xs: "column", sm: "row", md: "row" },
              }}
            >
              <TextField
                defaultValue={name}
                placeholder={name}
                label="Task Name"
                disabled
                fullWidth
                fontFamily="Roboto, Arial"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: colors.grey[100],
                    fontFamily: "Roboto, Arial",
                  },
                }}
                InputProps={{
                  style: {
                    color: colors.grey[100],
                    background: `linear-gradient(to left, ${colors.primary[700]}, ${colors.primary[400]})`,
                    p: "1%",
                    fontFamily: "Roboto, Arial",
                  },
                }}
              />
              <TextField
                defaultValue={state}
                placeholder={state}
                label="State"
                variant="outlined"
                disabled
                fontFamily="Roboto, Arial"
                InputLabelProps={{ style: { color: colors.primary[500] } }}
                InputProps={{
                  style: {
                    color: "colors.grey[100]",
                    backgroundColor: colors.grey[600],
                    p: "1%",
                    fontFamily: "Roboto, Arial",
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
                defaultValue={description}
                placeholder={description}
                label="Description"
                disabled
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: colors.primary[500] } }}
                InputProps={{
                  style: {
                    backgroundColor: colors.grey[600],
                    color: colors.grey[100],
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
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row", md: "row" },
                justifyContent: "space-around",
                alignItems: { xs: "center", md: "space-around" },
                marginBottom: 3,
                marginTop: "4%",
              }}
            >
              <TextField
                defaultValue={type}
                placeholder={type}
                disabled
                label="Type"
                variant="outlined"
                InputLabelProps={{ style: { color: colors.primary[500] } }}
                InputProps={{
                  style: {
                    backgroundColor: colors.grey[600],
                    color: colors.grey[100],
                  },
                }}
              />
              <TextField
                defaultValue={startDate}
                placeholder={startDate}
                label="Start Date"
                variant="outlined"
                disabled
                InputLabelProps={{ style: { color: colors.primary[500] } }}
                InputProps={{
                  style: {
                    backgroundColor: colors.grey[600],
                    color: colors.grey[100],
                  },
                }}
              />
              <TextField
                defaultValue={endDate}
                placeholder={endDate}
                label="End Date"
                variant="outlined"
                disabled
                InputLabelProps={{ style: { color: colors.primary[500] } }}
                InputProps={{
                  style: {
                    backgroundColor: colors.grey[600],
                    color: colors.grey[100],
                  },
                }}
              />
              <TextField
                defaultValue={`${progress}%`}
                placeholder={`${progress}%`}
                label="Progress"
                disabled
                variant="outlined"
                InputLabelProps={{ style: { color: colors.primary[500] } }}
                InputProps={{
                  style: {
                    backgroundColor: colors.grey[600],
                    color: colors.grey[100],
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
              sx={{
                marginBottom: 1,
                flexDirection: { xs: "column", sm: "row", md: "row" },
              }}
            >
              <UpdateButton
                variant="contained"
                onClick={() => setIsEditable(true)}
              >
                Update
              </UpdateButton>
              <SaveButton variant="contained">Save Update</SaveButton>
            </Box>
          </TaskListCardContend>
        </Card>
      </Stack>
    </TaskListPaper>
  );
}
export default TaskList;
