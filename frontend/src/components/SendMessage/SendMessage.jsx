import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  Modal,
  TextField,
  Typography,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: 8,
    maxWidth: 400,
    width: "100%",
    textAlign: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

function SendMessage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { onSendMessage, firstname, lastname } = props;

  const handleOpen = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!subject || !message) {
      return;
    }
    console.info(`Sending message ${message} to "${firstname} ${lastname}"`);
    onSendMessage(subject, message);
    setSubject("");
    setMessage("");
    handleClose();
    setSnackbarMessage("Message sent with success");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  console.info("subject", subject);
  console.info("message", message);
  console.info("snackbarOpen", snackbarOpen);

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        onClick={handleOpen}
      >
        Send Message to "{firstname} {lastname}"
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="send-message-modal-title"
        aria-describedby="send-message-modal-description"
        className={classes.modal}
        anchorEl={anchorEl}
      >
        <div className={classes.paper}>
          <Typography variant="h6" className={classes.title}>
            Send a message to "{firstname} {lastname}"
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              id="subject"
              label="Object"
              variant="outlined"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              message={snackbarMessage}
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleSnackbarClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
              severity={snackbarSeverity}
            />
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default SendMessage;
