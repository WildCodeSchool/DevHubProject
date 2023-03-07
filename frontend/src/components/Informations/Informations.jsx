import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
  },
  field: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Informations(props) {
  const { firstName, lastName, phone, city, email, githubPage, biography } =
    props;

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
            label="Phone Number"
            value={phone}
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
            label="Email"
            value={email}
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
            minRows={6}
            fullWidth
            disabled
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Informations;
