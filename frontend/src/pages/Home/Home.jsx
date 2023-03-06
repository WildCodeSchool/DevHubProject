import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import PeleMele from "../../assets/pelemele.png";

const theme = createTheme();

function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "40%",
              padding: "1%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                border: "1px solid gray",
                width: "70%",
              }}
            >
              <Typography component="h1" variant="h5" lign="center">
                Bienvenue dans l'application DevHubProject
              </Typography>
              <br />
              <Typography component="h2" variant="body1" a>
                Cette application vous permettra de créer, gérer et planifier
                vos projets ainsi que vos équipes de développeur
              </Typography>
            </Paper>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
              }}
            >
              <Link href="/login">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 5, mb: 2, width: "10em" }}
                >
                  Log In
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: "10em" }}
                >
                  Register
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ width: "60%", height: "100%" }}>
            <img
              src={PeleMele}
              alt="pelemele"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
