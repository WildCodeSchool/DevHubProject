import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";
import { Button, Modal, TextField, Typography, Box } from "@material-ui/core";

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
    textAlign: "center", // Centrer le contenu de la modal
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

function SendMessage({ firstName, lastName }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.error(`Sending message "${message}" to ${firstName} ${lastName}`);
    handleClose();
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        onClick={handleOpen}
      >
        Send Message to "{firstName} {lastName}"
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="send-message-modal-title"
        aria-describedby="send-message-modal-description"
        className={classes.modal}
      >
        <div className={classes.paper}>
          <Typography variant="h6" className={classes.title}>
            Send a message to {firstName} {lastName}
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
              multiline
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </Box>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default SendMessage;
