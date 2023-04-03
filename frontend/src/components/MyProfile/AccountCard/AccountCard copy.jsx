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
  Input,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { tokens } from "../../../theme";

function AccountCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { id } = useParams();

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:5000/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.info(response.data);
        setCurrentUser(response.data);
        setUserUpdate(response.data);
        console.info(currentUser, "current");
      })
      .catch((error) => {
        console.info(error);
      });
  }, [id]);

  const handleEdit = () => {
    setEditing(!editing);
    setUserUpdate({
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      phone: currentUser.phone,
      city: currentUser.city,
      email: currentUser.email,
      github_page: currentUser.github_page,
      biography: currentUser.biography,
    });
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    axios
      .put(`http://localhost:5000/users/${id}`, userUpdate, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setCurrentUser(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFirstnameChange = (event) => {
    setUserUpdate({ ...userUpdate, firstname: event.target.value });
  };

  const handleLastnameChange = (event) => {
    setUserUpdate({ ...userUpdate, lastname: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setUserUpdate({ ...userUpdate, phone: event.target.value });
  };

  const handleCityChange = (event) => {
    setUserUpdate({ ...userUpdate, city: event.target.value });
  };

  const handleEmailChange = (event) => {
    setUserUpdate({ ...userUpdate, email: event.target.value });
  };

  const handleGithubChange = (event) => {
    setUserUpdate({ ...userUpdate, github_page: event.target.value });
  };

  const handleBiographyChange = (event) => {
    setUserUpdate({ ...userUpdate, biography: event.target.value });
  };

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
            {editing ? (
              <Button onClick={handleSaveChanges} sx={theme.editButton}>
                save
              </Button>
            ) : (
              <Button onClick={handleEdit} sx={theme.editButton}>
                edit
              </Button>
            )}
          </Box>
          <Box sx={{ pl: "1.5rem" }}>
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
                    <Input
                      type="text"
                      value={currentUser.firstname}
                      onChange={handleFirstnameChange}
                      readOnly={!editing}
                      sx={{
                        ...theme.inputStyle,
                        backgroundColor: editing ? colors.grey[300] : "#ffffff",
                      }}
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
              <Grid xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
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
                    <Input
                      type="text"
                      value={currentUser.lastname}
                      onChange={handleLastnameChange}
                      readOnly={!editing}
                      sx={{
                        ...theme.inputStyle,
                        backgroundColor: editing ? colors.grey[300] : "#ffffff",
                      }}
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
                    <Input
                      type="text"
                      value={currentUser.phone}
                      onChange={handlePhoneChange}
                      readOnly={!editing}
                      sx={{
                        ...theme.inputStyle,
                        backgroundColor: editing ? colors.grey[300] : "#ffffff",
                      }}
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
              <Grid xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
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
                    <Input
                      type="text"
                      value={currentUser.city}
                      onChange={handleCityChange}
                      readOnly={!editing}
                      sx={{
                        ...theme.inputStyle,
                        backgroundColor: editing ? colors.grey[300] : "#ffffff",
                      }}
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
              <Grid xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
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
                    <Input
                      type="text"
                      value={currentUser.email}
                      onChange={handleEmailChange}
                      readOnly={!editing}
                      sx={{
                        ...theme.inputStyle,
                        backgroundColor: editing ? colors.grey[300] : "#ffffff",
                      }}
                    />
                  </FormControl>
                </FormGroup>
              </Grid>
              <Grid xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
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
                    <Input
                      type="text"
                      value={currentUser.github_page}
                      onChange={handleGithubChange}
                      readOnly={!editing}
                      sx={{
                        ...theme.inputStyle,
                        backgroundColor: editing ? colors.grey[300] : "#ffffff",
                      }}
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
              <Grid xs={12} sx={{ maxWidth: "50%", p: "0 15px" }}>
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
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: editing ? colors.grey[300] : "#ffffff",
                        borderRadius: "5px",
                        cursor: "text",
                        border: "0",
                      }}
                      inputProps={{ style: { color: colors.primary[500] } }}
                      value={currentUser.biography}
                      onChange={handleBiographyChange}
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

export default AccountCard;
