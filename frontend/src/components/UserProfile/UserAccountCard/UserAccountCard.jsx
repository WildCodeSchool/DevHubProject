import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  useTheme,
  Paper,
  Typography,
  CardContent,
  FormGroup,
  FormLabel,
  FormControl,
  Divider,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { tokens } from "../../../theme";

function UserAccountCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isEditing] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    city: "",
    email: "",
    github_page: "",
    biography: "",
  });

  const { id } = useParams();

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setUserInfo(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations de l'utilisateur:",
        error
      );
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Grid xs={12} item sx={{ mt: "20px" }}>
      <Paper
        elevation="10"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.grey[200],
        }}
      >
        <CardContent sx={{ pb: "24px" }}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              border: "0px !important",
              justifyContent: "space-between",
              mb: "1.5rem",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: colors.primary[400],
                p: "0.25rem 0",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              USER INFORMATION
            </Typography>
          </Box>

          <Box sx={{ pl: "1.5rem" }}>
            <Grid
              container
              sx={{
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <Grid item xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexFlow: "column, wrap",
                    mb: "1.5rem",
                  }}
                >
                  <FormLabel sx={theme.formLabelStyle}>First Name</FormLabel>
                  <FormControl
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      position: "relative",
                      mb: "1rem",
                      width: "100%",
                    }}
                  >
                    <TextField
                      type="text"
                      value={userInfo.firstname || ""}
                      style={{
                        ...theme.TextFieldStyle,
                        backgroundColor: isEditing ? "#f5f5f5" : "#ffffff",
                      }}
                      inputProps={{
                        style: { color: colors.primary[500] },
                        readOnly: !isEditing,
                      }}
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
              <Grid item xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexFlow: "column, wrap",
                    mb: "1.5rem",
                  }}
                >
                  <FormLabel sx={theme.formLabelStyle}>Last Name</FormLabel>
                  <FormControl
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      position: "relative",
                      mb: "1rem",
                      width: "100%",
                    }}
                  >
                    <TextField
                      type="text"
                      value={userInfo.lastname || ""}
                      style={{
                        ...theme.TextFieldStyle,
                        backgroundColor: isEditing ? "#f5f5f5" : "#ffffff",
                      }}
                      inputProps={{
                        style: { color: colors.primary[500] },
                        readOnly: !isEditing,
                      }}
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <Grid xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexFlow: "column, wrap",
                    mb: "1.5rem",
                  }}
                >
                  <FormLabel sx={theme.formLabelStyle}>Phone</FormLabel>
                  <FormControl
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      position: "relative",
                      mb: "1rem",
                      width: "100%",
                    }}
                  >
                    <TextField
                      type="text"
                      value={userInfo.phone || ""}
                      style={{
                        ...theme.TextFieldStyle,
                        backgroundColor: isEditing ? "#f5f5f5" : "#ffffff",
                      }}
                      inputProps={{
                        style: { color: colors.primary[500] },
                        readOnly: !isEditing,
                      }}
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
              <Grid item xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexFlow: "column, wrap",
                    mb: "1.5rem",
                  }}
                >
                  <FormLabel sx={theme.formLabelStyle}>City</FormLabel>
                  <FormControl
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      position: "relative",
                      mb: "1rem",
                      width: "100%",
                    }}
                  >
                    <TextField
                      type="text"
                      value={userInfo.city || ""}
                      style={{
                        ...theme.TextFieldStyle,
                        backgroundColor: isEditing ? "#f5f5f5" : "#ffffff",
                      }}
                      inputProps={{
                        style: { color: colors.primary[500] },
                        readOnly: !isEditing,
                      }}
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
          <Divider
            sx={{ backgroundColor: colors.primary[500], m: "1.5rem 0" }}
          />
          <Typography
            variant="h6"
            sx={{
              color: colors.primary[400],
              p: "0.25rem 0",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              mb: "1.5rem",
            }}
          >
            Contact Information
          </Typography>
          <Box sx={{ pl: "1.5rem" }}>
            <Grid
              container
              sx={{
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <Grid item xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexFlow: "column, wrap",
                    mb: "1.5rem",
                  }}
                >
                  <FormLabel sx={theme.formLabelStyle}>Email</FormLabel>
                  <FormControl
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      position: "relative",
                      mb: "1rem",
                      width: "100%",
                    }}
                  >
                    <TextField
                      type="text"
                      value={userInfo.email || ""}
                      style={{
                        ...theme.TextFieldStyle,
                        backgroundColor: isEditing ? "#f5f5f5" : "#ffffff",
                      }}
                      inputProps={{
                        style: { color: colors.primary[500] },
                        readOnly: !isEditing,
                      }}
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
              <Grid item xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexFlow: "column, wrap",
                    mb: "1.5rem",
                  }}
                >
                  <FormLabel sx={theme.formLabelStyle}>GitHub Page</FormLabel>
                  <FormControl
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      position: "relative",
                      mb: "1rem",
                      width: "100%",
                    }}
                  >
                    <TextField
                      type="text"
                      value={userInfo.github_page || ""}
                      style={{
                        ...theme.TextFieldStyle,
                        backgroundColor: isEditing ? "#f5f5f5" : "#ffffff",
                      }}
                      inputProps={{
                        style: { color: colors.primary[500] },
                        readOnly: !isEditing,
                      }}
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
          <Divider
            sx={{ backgroundColor: colors.primary[500], m: "1.5rem 0" }}
          />
          <Typography
            variant="h6"
            sx={{
              color: colors.primary[400],
              p: "0.25rem 0",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              mb: "1.5rem",
            }}
          >
            Biography
          </Typography>
          <Box sx={{ pl: "1.5rem" }}>
            <Grid
              container
              sx={{
                boxSizing: "border-box",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{ Width: "50%", p: "0 15px", maxWidth: { xs: "100%" } }}
              >
                <FormGroup
                  sx={{
                    display: "flex",
                    flexFlow: "column, wrap",
                    mb: "1.5rem",
                  }}
                >
                  <FormLabel sx={theme.formLabelStyle}>About Me</FormLabel>
                  <FormControl
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      position: "relative",
                      mb: "1rem",
                      width: "100%",
                    }}
                  >
                    <TextField
                      sx={{
                        boxShadow: "0px 1px 3px rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        borderRadius: "5px",
                        cursor: "text",
                        border: "0",
                        backgroundColor: isEditing ? "#f5f5f5" : "#ffffff",
                      }}
                      inputProps={{
                        style: { color: colors.primary[500] },
                        readOnly: !isEditing,
                      }}
                      value={userInfo.biography || ""}
                      multiline
                      rows={4}
                      fullWidth
                      variant="outlined"
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Paper>
    </Grid>
  );
}

export default UserAccountCard;
