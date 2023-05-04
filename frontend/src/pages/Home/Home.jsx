import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "mui-image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeP3 from "../../assets/Home.png";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body, #root {
          display: block;
          height: 100%;
          margin: 0;
          padding: 0;
          transform: translate(0, -28px);
        }
      `,
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: "#B28011",
    },
    secondary: {
      main: "#FFA300",
    },
  },
});
function BGHome() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      height={{ xs: "100%", md: "500px" }}
    >
      <Box
        sx={{
          backgroundImage: `url(${HomeP3})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: { xs: "400px", md: "100%" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          p: 4,
        }}
      >
        <Typography
          textAlign="center"
          gutterBottom
          variant="h3"
          component="div"
          sx={{ color: "#00205B", fontWeight: "bold", mb: 4 }}
        >
          Connectez-vous avec DevHubProject et donnez vie à vos projets.
        </Typography>
        <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
          <Button
            variant="contained"
            href="/register"
            sx={{ fontSize: "100%", mr: { md: 2 }, backgroundColor: "#FDB813" }}
          >
            S'inscrire
          </Button>
          <Button
            variant="contained"
            href="/login"
            sx={{ backgroundColor: "#FDB813" }}
          >
            Se connecter
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
function Feature() {
  return (
    <Box sx={{ padding: 0 }}>
      <Box sx={{ bgcolor: "#FDB813", p: 4, borderRadius: 4, boxShadow: 4 }}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#FFFFFF" }}
          >
            Organisation, collaboration, succès - tout est possible avec une
            application de gestion de projets.
          </Typography>
          <Typography variant="h6" color="#00205B">
            L'application de gestion de projet est un outil précieux pour les
            équipes travaillant sur des projets complexes. Elle permet de suivre
            l'avancement des tâches, de gérer les ressources et de communiquer
            efficacement. Grâce à cette application, les membres de l'équipe
            peuvent facilement collaborer et rester synchronisés sur les
            différentes étapes du projet. De plus, l'application permet de
            visualiser les dépendances entre les tâches et de planifier les
            ressources en fonction des besoins. En somme, une application de
            gestion de projet est un outil indispensable pour tout projet
            réussi.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
function Skills() {
  return (
    <Box sx={{ padding: 0 }}>
      <Box sx={{ bgcolor: "#F5F5F5", p: 4, borderRadius: 0, boxShadow: 4 }}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="h6" color="#00205B">
            Notre équipe possède une vaste gamme de compétences en développement
            web et en conception. Nous sommes passionnés par la création de
            solutions innovantes qui répondent aux besoins de nos clients. Voici
            quelques-unes des compétences que nous maîtrisons :
          </Typography>
        </Stack>
        <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 6, md: 6 }}
            justifyContent="space-between"
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
            <Image src="../../src/assets/icon/js.png" height={70} width={70} />
            <Image
              src="../../src/assets/icon/atom.png"
              height={70}
              width={70}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        <Paper style={{ marginTop: 0 }} sx={{ borderRadius: 0 }}>
          <CssBaseline />
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BGHome />
          </Container>
        </Paper>
        <Paper sx={{ borderRadius: 0 }}>
          <Feature />
        </Paper>
        <Skills sx={{ borderRadius: 0, paddingBottom: 46 }} />
      </div>
    </ThemeProvider>
  );
}
