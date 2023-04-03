/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Grid, useTheme } from "@mui/material";

import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import ProfileCard from "../../components/MyProfile/ProfileCard/ProfileCard";
import AccountCard from "../../components/MyProfile/AccountCard/AccountCard";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

function MyProfile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Grid container>
        <Grid
          xs={12}
          sx={{
            mt: { xs: "60px", sm: "20px", md: "20px" },
          }}
        >
          <Header
            title="YOUR PROFILE"
            subtitle="Welcome to your profile page"
          />
        </Grid>
        <Grid xs={12} sx={{ display: "flex" }}>
          <Grid item xs={12} md={7} sx={{ mt: "20px" }}>
            <AccountCard />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mt: "20px" }}>
            <ProfileCard />
            <ProjectsList />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyProfile;
