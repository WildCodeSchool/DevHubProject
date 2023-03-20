import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import {
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
} from "@material-ui/icons";
import SendMessage from "../../components/SendMessage/SendMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

function Mailbox() {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);

  const handleMessage = (subject, message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now(), subject, message, read: false },
    ]);
  };

  const handleRead = (id) => {
    setMessages((prevMessages) => {
      const newMessages = prevMessages.map((message) => {
        if (message.id === id) {
          return { ...message, read: !message.read };
        }
        return message;
      });
      return newMessages;
    });
  };

  return (
    <div className={classes.root}>
      <SendMessage
        onSendMessage={(subject, message) => handleMessage(subject, message)}
        firstname="John"
        lastname="Doe"
      />
      <List>
        {messages.map((message) => (
          <ListItem
            key={message.id}
            button
            onClick={() => handleRead(message.id)}
          >
            <ListItemText
              primary={message.subject}
              secondary={message.message}
              primaryTypographyProps={{
                noWrap: true,
                variant: message.read ? "body1" : "body1",
                color: message.read ? "textSecondary" : "textPrimary",
              }}
              secondaryTypographyProps={{
                noWrap: true,
                variant: message.read ? "body2" : "body1",
                color: message.read ? "textSecondary" : "textPrimary",
              }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleRead(message.id)}>
                {message.read ? (
                  <CheckBoxOutlined color="primary" />
                ) : (
                  <CheckBoxOutlineBlankOutlined color="primary" />
                )}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Mailbox;
