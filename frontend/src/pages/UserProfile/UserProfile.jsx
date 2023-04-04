/* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
import { Grid, useTheme } from "@mui/material";

import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import UserProfileCard from "../../components/UserProfile/UserProfileCard/UserProfilCard";
import UserAccountCard from "../../components/UserProfile/UserAccountCard/UserAccountCard";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

function UserProfile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            mt: { xs: "60px", sm: "20px", md: "20px" },
          }}
        >
          <Header
            title="USER PROFILE"
            subtitle="Welcome to User profile page"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid item xs={12} md={7} sx={{ mt: "20px" }}>
            <UserAccountCard />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mt: "20px" }}>
            <UserProfileCard />
            <ProjectsList />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
