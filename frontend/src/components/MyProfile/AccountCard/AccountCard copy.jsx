import React from "react";
import { Button, Card, Grid, Box, TextField, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

function AccountCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid item sx={{ mt: "20px" }}>
      <Card>
        <Box
          sx={{
            padding: "20px",
            background: `linear-gradient(to top, ${colors.primary[400]}, ${colors.primary[700]})`,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} sx={{}}>
              <TextField label="Username" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email address" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="First Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Last Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="City" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Country" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Postal Code" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="About me"
                fullWidth
                multiline
                rows={5}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            padding: "20px",
            background: `linear-gradient(to bottom, ${colors.primary[400]}, ${colors.primary[700]})`,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: colors.grey[200],
              color: colors.primary[500],
              "&:hover": {
                color: colors.grey[200],
              },
            }}
          >
            Update Profile
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}

export default AccountCard;
