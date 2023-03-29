import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "mui-image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeP3 from "../../assets/Home.png";
import Logo from "../../assets/logo/Logo.png";

const styles = {
  paperContainer: {
    backgroundImage: `url(${HomeP3})`,

    height: { xs: "700px", sm: "500px" },
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "15%",
    height: "auto",
    padding: "1%",
  },
};

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body, #root {
          display: block;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `,
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={0}>
        <Paper style={styles.paperContainer} sx={{ borderRadius: 0 }}>
          <CssBaseline />
          <img src={Logo} alt="logo" style={styles.logo} />
          <Container
            width="600px"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              height={{ xs: "700px", sm: "500px" }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ color: "#B28011" }}
                  style={{ marginBottom: "8%" }}
                >
                  Connectez-vous avec DevHubProject et donnez vie à vos projets.
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row">
                <Button variant="contained" href="/register">
                  S'inscrire
                </Button>
                <Button variant="outlined" href="/login">
                  Se connecter
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Paper>
        <Paper
          sx={{
            borderRadius: 0,
            background: "linear-gradient(to right bottom)",
            pl: 2,
            pr: 2,
            pt: 2,
          }}
        >
          <Container>
            <Box sx={{ padding: 0 }}>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Box
                sx={{
                  bgcolor: "#FFA300",
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 4,
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#FFFFFF" }}
                  >
                    Organisation, collaboration, succès - tout est possible avec
                    une application de gestion de projets.
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    L'application de gestion de projet est un outil précieux
                    pour les équipes travaillant sur des projets complexes. Elle
                    permet de suivre l'avancement des tâches, de gérer les
                    ressources et de communiquer efficacement. Grâce à cette
                    application, les membres de l'équipe peuvent facilement
                    collaborer et rester synchronisés sur les différentes étapes
                    du projet. De plus, l'application permet de visualiser les
                    dépendances entre les tâches et de planifier les ressources
                    en fonction des besoins. En somme, une application de
                    gestion de projet est un outil indispensable pour tout
                    projet réussi.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Container>
        </Paper>
        <Paper sx={{ borderRadius: 0 }}>
          <Container width="600px">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 6, md: 6 }}
              sx={{ mt: 6, mb: 6, overflowX: "hidden" }}
              justifyContent="space-around"
              alignItems="center"
            >
              <Image
                src="../../src/assets/icon/css-3.png"
                height={80}
                width={80}
              />
              <Image
                src="../../src/assets/icon/html-5.png"
                height={80}
                width={80}
              />

              <Image
                src="../../src/assets/icon/js.png"
                height={70}
                width={70}
              />
              <Image
                src="../../src/assets/icon/atom.png"
                height={70}
                width={70}
              />
            </Stack>
          </Container>
        </Paper>
      </Stack>
    </ThemeProvider>
  );
}
