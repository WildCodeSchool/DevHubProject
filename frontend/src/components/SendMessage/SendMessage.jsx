import { useState } from "react";
import { Button, Modal, TextField, Typography, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { tokens } from "../../theme";

function SendMessage({ open, onClose, onSendMessage, firstname, lastname }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!subject || !message || !onSendMessage) {
      return;
    }
    const sendMessagePromise = onSendMessage(subject, message);
    if (sendMessagePromise && typeof sendMessagePromise.then === "function") {
      sendMessagePromise
        .then(() => {
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="send-message-modal-title"
        aria-describedby="send-message-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: colors.grey[400],
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            outline: "none",
            borderRadius: 8,
            maxWidth: 400,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginBottom: theme.spacing(2),
              color: colors.primary[400],
            }}
          >
            Send a message to {firstname} {lastname}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(2),
            }}
          >
            <TextField
              id="subject"
              name="subject"
              label="Subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              style={{
                backgroundColor: "#f5f5f5",
              }}
              fullWidth
              InputLabelProps={{ style: { color: colors.black[700] } }}
              InputProps={{
                style: {
                  color: colors.primary[700],
                  borderColor: colors.primary[700],
                },
              }}
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              minRows={4}
              InputLabelProps={{ style: { color: colors.black[700] } }}
              style={{
                backgroundColor: "#f5f5f5",
              }}
              InputProps={{
                style: {
                  color: colors.black[700],
                  borderColor: colors.primary[700],
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              style={{
                marginTop: theme.spacing(2),
                backgroundColor: colors.primary[700],
              }}
              onClick={handleClose}
            >
              Send
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              style={{
                marginTop: theme.spacing(1),
                color: colors.black[700],
                backgroundColor: colors.safran[400],
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </form>
  );
}

export default SendMessage;
