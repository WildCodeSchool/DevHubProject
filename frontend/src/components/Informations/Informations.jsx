import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
    marginBottom: theme.spacing(2),
  },
  field: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Informations({
  firstName,
  lastName,
  gender,
  phoneNumber,
  city,
  country,
  nationality,
  email,
  website,
  githubPage,
  biography,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="First Name"
            value={firstName}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="Last Name"
            value={lastName}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="Gender"
            value={gender}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="Phone Number"
            value={phoneNumber}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="City"
            value={city}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="Country"
            value={country}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="Nationality"
            value={nationality}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="Email"
            value={email}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.field}
            label="Website"
            value={website}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Git-Hub Page"
            value={githubPage}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Biography"
            value={biography}
            multiline
            rows={8}
            fullWidth
            disabled
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Informations;
