import React from "react";
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
} from "@mui/material";

import { tokens } from "../../../theme";

function AccountCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
            USER INFORMATION
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
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    Username
                  </FormLabel>
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
                      value="Your name"
                      sx={{
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        color: colors.primary[100],
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        p: "0 0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        border: "0",
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
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    Email
                  </FormLabel>
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
                      value="johndoe@exemple.com"
                      sx={{
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        color: colors.primary[100],
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        p: "0 0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        border: "0",
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
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    First Name
                  </FormLabel>
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
                      value="John"
                      sx={{
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        color: colors.primary[100],
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        p: "0 0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        border: "0",
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
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    Last Name
                  </FormLabel>
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
                      value="Doe"
                      sx={{
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        color: colors.primary[100],
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        p: "0 0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        border: "0",
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
                flexWrap: "wrap",
                boxSizing: "border-box",
              }}
            >
              <Grid xs={12} sx={{ maxWidth: "100%", p: "0 15px" }}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexFlow: "column, wrap",
                    mb: "1.5rem",
                  }}
                >
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    Address
                  </FormLabel>
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
                      value="Gare de Marseille St-Charles Marseille 130001"
                      sx={{
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        color: colors.primary[100],
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        p: "0 0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        border: "0",
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
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    City
                  </FormLabel>
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
                      value="Marseille"
                      sx={{
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        color: colors.primary[100],
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        p: "0 0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        border: "0",
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
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    Country
                  </FormLabel>
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
                      value="France"
                      sx={{
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        color: colors.primary[100],
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        p: "0 0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        border: "0",
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
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    Postal Code
                  </FormLabel>
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
                      value="13000"
                      sx={{
                        boxShadow: "0px 1px 3px  rgba(50,50,93,0.15)",
                        boxSizing: "border-box",
                        color: colors.primary[100],
                        position: "relative",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        p: "0 0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        border: "0",
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
            About me
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
                  <FormLabel
                    sx={{
                      color: colors.primary[500],
                      display: "inline-block",
                      mb: "0.5rem",
                      lineHeight: "1",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    About Me
                  </FormLabel>
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

                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        cursor: "text",
                        border: "0",
                      }}
                      inputProps={{ style: { color: colors.primary[500] } }}
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Placeat, commodi pariatur. Quos quod sunt architecto non placeat voluptate aspernatur commodi blanditiis velitlaudantium dolor impedit ratione saepe quidem, asperioressnostrum."
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
